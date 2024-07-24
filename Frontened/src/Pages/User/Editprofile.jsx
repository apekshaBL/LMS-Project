import HomeLayouts from "@/Layouts/HomeLayouts";
import { getUserData, updateProfile } from "@/Redux/Slices/AuthSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    previewImage: "",
    username: "",
    avatar: undefined,
    userId: useSelector((state) => state?.auth?.data?._id),
  });

  function handleImageUpload(e) {
    e.preventDefault();
    const uploadedImage = e.target.files[0];
    if (uploadedImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setData({
          ...data,
          previewImage: this.result,
          avatar: uploadedImage,
        });
      });
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!data.username || !data.avatar) {
      toast.error("All fields are mandatory");
      return;
    }
    if (data.username.length < 5) {
      toast.error("Username must be at least 5 characters long");
      return;
    }
    const formData = new FormData();
    formData.append("fullname", data.username);
    formData.append("avatar", data.avatar);

    await dispatch(updateProfile({id:data.userId, data:formData}));
    await dispatch(getUserData());

    navigate("/profile");
  }

  return (
    <HomeLayouts>
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <form
          onSubmit={onFormSubmit}
          className="flex flex-col justify-center gap-5 rounded-lg p-6 bg-gray-900 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-semibold text-teal-400">Edit Profile</h1>
          <label htmlFor="image_uploads" className="cursor-pointer">
            {data.previewImage ? (
              <img className="w-28 h-28 rounded-full m-auto" src={data.previewImage} alt="Preview" />
            ) : (
              <BsPersonCircle className="w-28 h-28 rounded-full m-auto" />
            )}
            <input
              onChange={handleImageUpload}
              required
              className="hidden"
              type="file"
              id="image_uploads"
              name="image_uploads"
              accept=".jpg,.jpeg,.mp4,.svg,.png"
            />
          </label>
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-lg font-semibold text-teal-400">Full Name</label>
            <input
              required
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              className="bg-transparent px-2 py-1 border border-gray-600 text-gray-300"
              value={data.username}
              onChange={handleInputChange}
            />
          </div>
          <Button asChild type="submit" className="bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300">
            <Link to="/profile">Update Profile</Link>
          </Button>
          <Button asChild className="bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300">
            <Link to="/profile">Go back to profile</Link>
          </Button>
        </form>
      </div>
    </HomeLayouts>
  );
}

export default EditProfile;
