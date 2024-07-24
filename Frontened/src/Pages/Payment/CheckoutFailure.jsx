import HomeLayouts from '@/Layouts/HomeLayouts'
import { RxCrossCircled } from 'react-icons/rx';
import { Link } from 'react-router-dom'; 

function CheckoutFailure() {
  return (
    <HomeLayouts>
 <div className="min-h-[90vh] flex items-center justify-center bg-gray-800 text-white">
        <div className="w-80 h-[26rem] flex flex-col justify-center items-center shadow-lg rounded-lg relative bg-gray-900">
          <h1 className="bg-red-500 text-center absolute top-0 w-full py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
            Payment Failed
          </h1>
          <div className="px-4 flex flex-col items-center justify-center space-y-4 mt-16">
            <div className="text-center space-y-2">
              <h2 className="text-lg font-semibold text-red-400">Oops ! Your payment failed</h2>
              <p className="text-green-300">
                Please try again later
              </p>
            </div>
            <RxCrossCircled className="text-red-600 text-6xl" />
          </div>
          <Link to="/checkout" className="bg-red-500 hover:bg-red-400 transition-all ease-in-out duration-300 absolute bottom-0 w-full text-xl font-semibold text-center py-2 rounded-br-lg rounded-bl-lg">
            Try again
          </Link>
        </div>
      </div>
    </HomeLayouts>
  )
}

export default CheckoutFailure