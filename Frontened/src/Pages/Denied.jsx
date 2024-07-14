import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
function Denied(){
    const navigate=useNavigate();
    return(
        <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-800">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">
                403
            </h1>
            <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">Access denied</div>
            <Button asChild className='bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300 m-5'>
            <a href="/" onClick={()=>navigate(-1)}>Go Back</a>
            </Button>
        </main>
    )

}
export default Denied;