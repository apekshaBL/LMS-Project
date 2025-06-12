import HomeLayouts from "@/Layouts/HomeLayouts";
import { getRazorpayId, purchaseCourseBundle, verifyUserPayment } from "@/Redux/Slices/RazorpaySlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { BiRupee } from "react-icons/bi";

function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const razorpayKey = useSelector((state) => state?.razorpay?.key);
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);
    const userData = useSelector((state) => state?.user?.data);
    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: ""
    };

    async function handleSubscription(e) {
        e.preventDefault();
        if (! razorpayKey || !subscription_id || !userData) {
            toast.error("Something went wrong");
            return;
        }
        const options = {
            key: razorpayKey,
            subscription_id: subscription_id,
            name: "Coursify Pvt.Ltd.",
            description: "Subscription",
            theme: {
                color: '#F37254'
            },
            prefill: {
                email: userData.email,
                name: userData.username
            },
            handler: async function (response) {
                paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                paymentDetails.razorpay_signature = response.razorpay_payment_id;
                paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id;
                toast.success("Payment successful");
                const res=await dispatch(verifyUserPayment(paymentDetails));
                res?.payload ?.success? navigate("/checkout/success") : navigate("/checkout/fail");
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    async function load() {
        try{
            if(userData){
                console.log("User Data ID:",userData.id);
                await dispatch(getRazorpayId());
                await dispatch(purchaseCourseBundle(userData.id));
            }
            else{
                toast.error("User data not found")
            }
        }
        catch(err){
            console.error("Failed to purchase course bundle:", err);
        }
    }

    useEffect(() => {
        load();
    }, [userData])

    return (
        <HomeLayouts>
            <div className="container mx-auto p-6 bg-gray-800">
                <form onSubmit={handleSubscription} className="min-h-[90vh] flex items-center justify-center text-white">
                    <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative bg-gray-800">
                        <h1 className="bg-teal-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tr-lg rounded-tl-lg">
                            Subscription Bundle
                        </h1>
                        <div className="px-4 space-y-5 text-center">
                            <p className="text-[17px]">
                                This purchase will allow you to access all available courses on our platform for{" "}
                                <span className="text-yellow-500 font-bold">
                                    <br />
                                    1 year duration
                                </span>. All the existing and newly launched courses will also be available.
                            </p>
                            <p className="flex items-center justify-center gap-1 text-2xl font-bold text-yellow-500">
                                <BiRupee /><span>499</span> only
                            </p>
                            <div className="text-gray-200">
                                <p>100% refund on cancellation</p>
                                <p>* Terms and conditions apply *</p>
                            </div>
                            <button type="submit" className="bg-teal-600 hover:bg-teal-700 transition-all ease-in-out duration-300 absolute bottom-0 w-full left-0 text-xl font-bold rounded-bl-lg rounded-br-lg py-2">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </HomeLayouts>
    )
}

export default Checkout;
