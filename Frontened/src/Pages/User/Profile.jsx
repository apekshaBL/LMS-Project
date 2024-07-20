import HomeLayouts from "@/Layouts/HomeLayouts";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state?.auth?.data);

    return (
        <HomeLayouts>
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="w-full max-w-lg bg-gray-800 shadow-lg rounded-lg p-6">
                    {/* Profile Header */}
                    <div className="flex flex-col items-center mb-8">
                        <img 
                            src={userData?.avatar?.secure_url} 
                            className="w-32 h-32 rounded-full border-4 border-teal-500 shadow-md" 
                            alt="Profile Avatar" 
                        />
                        <h2 className="text-3xl font-semibold mt-4 text-teal-400">
                            {userData?.username}
                        </h2>
                    </div>
                    
                    {/* User Info */}
                    <div className="space-y-4 mb-6 text-gray-200">
                        <div className="flex justify-between">
                            <span className="font-medium">Email:</span>
                            <span>{userData?.email}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Role:</span>
                            <span>{userData?.role}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Subscription:</span>
                            <span className={`font-semibold ${userData?.subscription?.status === 'active' ? 'text-teal-300' : 'text-red-400'}`}>
                                {userData?.subscription?.status === 'active' ? "Active" : "Inactive"}
                            </span>
                        </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4">
                        <Link to="/changePassword">
                            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition-colors duration-300">
                                Change Password
                            </button>
                        </Link>
                        <Link to="/editprofile">
                            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition-colors duration-300">
                                Edit Profile
                            </button>
                        </Link>
                        {userData?.subscription?.status === 'active' && (
                            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors duration-300">
                                Cancel Subscription
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </HomeLayouts>
    );
}

export default Profile;
