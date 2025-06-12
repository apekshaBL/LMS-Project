import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeLayouts from '@/Layouts/HomeLayouts';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { login } from '@/Redux/Slices/AuthSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  }

  async function onLogin(event) {
    event.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error('Please fill all the details!');
      return;
    }
    try {
      const response = await dispatch(login(loginData)).unwrap();
      console.log(response);
      if (response && response.success) {
        navigate('/');
      } else {
        toast.error('Error in logging in. Please try again!');
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Error in logging in. Please try again!');
    }

    setLoginData({
      email: "",
      password: "",
    });
  }

  return (
    <HomeLayouts>
      <div className="flex h-screen">
        {/* Image Section */}
        <div className="hidden md:flex md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('')" }}></div>

        {/* Signup Card Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-800 p-6">
          <div className="bg-gray-900 text-gray-800 rounded-xl shadow-lg p-12 mt-11 max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-teal-500">Login Form</h1>

            <form noValidate onSubmit={onLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-4"
                  placeholder="Enter your email"
                  onChange={handleUserInput}
                  value={loginData.email}
                  autoComplete='email'
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-4"
                  placeholder="Enter your password"
                  onChange={handleUserInput}
                  value={loginData.password}
                  autoComplete='new-password'
                />
              </div>

              <button type="submit" className="mt-6 bg-teal-500 text-white py-3 px-6 rounded-full hover:bg-teal-600 transition-colors duration-300 w-full">
                Login
              </button>
            </form>

            <p className="mt-6 text-center text-gray-600">
              Don't have an account? <Link to="/signup" className="text-teal-500 hover:underline">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </HomeLayouts>
  );
}

export default Login;
