import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeLayouts from '@/Layouts/HomeLayouts';
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { createAccount } from '@/Redux/Slices/AuthSlice';


function Signup() {
  const [previewImage, setPreviewImage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    avatar: ''
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function getImage(event) {
    const uploadedImage = event.target.files[0];
    if (uploadedImage) {
      setSignupData((prevData) => ({
        ...prevData,
        avatar: uploadedImage
      }));
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setPreviewImage(this.result);
      });
    }
  }

  async function createNewAccount(event) {
    event.preventDefault();
    if (!signupData.email || !signupData.username || !signupData.password || !signupData.avatar) {
      toast.error('Please fill all the details!');
      return;
    }
    if (signupData.username.length < 5) {
      toast.error('Your Name should be of at least 5 characters!');
      return;
    }
    if (!signupData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      toast.error('Please enter a valid email!');
      return;
    }
    if (!signupData.password.match(/^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{16,}$/)) {
      toast.error('Enter a strong password with at least 16 characters, including an uppercase letter, a lowercase letter, a number, and a special character.');
      return;
    }

    const formData = new FormData();
    formData.append("username", signupData.username);
    formData.append("email", signupData.email);
    formData.append("password", signupData.password);
    formData.append("avatar", signupData.avatar);

    try {
      const response = await dispatch(createAccount(formData));
      console.log(response);
      if (response.payload && response.payload.success) {
        navigate('/');
      } else {
        console.log(error);
        toast.error('Error in creating account. Please try again!');
      }
    } catch (error) {
        console.log(error)
      toast.error('Error in creating account. Please try again!');
    }
    
    setSignupData({
      username: "",
      email: "",
      password: "",
      avatar: ""
    });
    setPreviewImage("");
  }

  return (
    <HomeLayouts>
      <div className="flex h-screen">
        {/* Image Section */}
        <div className="hidden md:flex md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('')" }}></div>

        {/* Signup Card Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-800 p-6">
          <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 max-w-sm mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Create Your Account</h1>

            <form noValidate onSubmit={createNewAccount} className="space-y-4">
              <div className="flex flex-col items-center mb-4">
                <label htmlFor="image_upload" className="cursor-pointer">
                  {previewImage ? (
                    <img src={previewImage} alt="Profile Preview" className="w-20 h-20 rounded-full border-2 border-teal-500 object-cover" />
                  ) : (
                    <BsPersonCircle className="w-20 h-20 text-teal-500" />
                  )}
                </label>
                <input
                
                  type="file"
                  id="image_upload"
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.svg"
                  onChange={getImage}
                />
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3"
                  placeholder="Enter your name"
                  onChange={handleUserInput}
                  value={signupData.username}
                  autoComplete='name'
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3"
                  placeholder="Enter your email"
                  onChange={handleUserInput}
                  value={signupData.email}
                  autoComplete='email'
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3"
                  placeholder="Enter your password"
                  onChange={handleUserInput}
                  value={signupData.password}
                  autoComplete='new-password'
                />
              </div>

              <button type="submit" className="mt-6 bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition-colors duration-300 w-full">
                Create account
              </button>
            </form>

            <p className="mt-4 text-center text-gray-600">
              Already have an account? <Link to="/login" className="text-teal-500 hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </HomeLayouts>
  );
}

export default Signup;
