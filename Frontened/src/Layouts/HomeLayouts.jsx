import Footer from '@/LayoutComponents/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { logout } from '@/Redux/Slices/AuthSlice';

function HomeLayouts({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

//logout function
async function handleLogout(e){
  e.preventDefault();
  const res=await dispatch(logout());
  if(res?.payload?.success)
    navigate('/');
}

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 shadow-md z-30 py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-white text-3xl font-bold">
            <Link to="/" className='hover:text-teal-400 transition-colors duration-300'>PW Skills</Link>
          </div>
          <div className="space-x-4 flex items-center text-lg">
            <Link to="/" className="text-white hover:text-teal-400 transition-colors duration-300">Home</Link>
            {isLoggedIn && role === 'ADMIN' && (
              <Link to="/admin/dashboard" className="text-white hover:text-teal-400 transition-colors duration-300">Admin Dashboard</Link>
            )}
          
            <Link to="/about" className="text-white hover:text-teal-400 transition-colors duration-300">About Us</Link>
            <Link to="/contact" className="text-white hover:text-teal-400 transition-colors duration-300">Contact Us</Link>
            <Link to="/AllCourses" className="text-white hover:text-teal-400 transition-colors duration-300">All Courses</Link>
            {isLoggedIn && (
              <div className='flex items-center space-x-2'>
                <Button asChild className='bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300'>
                  <Link to="/profile">Profile</Link>
                </Button>
                <Button asChild className='bg-red-500 text-white hover:bg-red-600 transition-colors duration-300' onClick={handleLogout}>
                  <Link to="/logout"> LogOut </Link>
                </Button>
              </div>
            )}
            {!isLoggedIn && (
              <div className='flex items-center space-x-2'>
                <Button asChild className='bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300'>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className='bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300'>
                  <Link to="/signup">Signup</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>
      {children}
      <Footer />
    </>
  );
}

export default HomeLayouts;
