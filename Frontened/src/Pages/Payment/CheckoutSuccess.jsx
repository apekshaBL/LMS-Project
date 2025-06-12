import HomeLayouts from '@/Layouts/HomeLayouts';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom'; 

function CheckoutSuccess() {
  return (
    <HomeLayouts>
      <div className="min-h-[90vh] flex items-center justify-center bg-gray-800 text-white">
        <div className="w-80 h-[26rem] flex flex-col justify-center items-center shadow-lg rounded-lg relative bg-gray-900">
          <h1 className="bg-teal-500 text-center absolute top-0 w-full py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
            Payment Successful
          </h1>
          <div className="px-4 flex flex-col items-center justify-center space-y-4 mt-16">
            <div className="text-center space-y-2">
              <h2 className="text-lg font-semibold text-teal-400">Welcome to the Pro Bundle</h2>
              <p className="text-gray-300">
                You now have access to all the courses available on our platform.
              </p>
            </div>
            <AiFillCheckCircle className="text-teal-500 text-6xl" />
          </div>
          <Link to="/" className="bg-teal-500 hover:bg-teal-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full text-xl font-semibold text-center py-2 rounded-br-lg rounded-bl-lg">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </HomeLayouts>
  );
}

export default CheckoutSuccess;
