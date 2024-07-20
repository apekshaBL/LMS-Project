import { Link } from "react-router-dom";
import HomeLayouts from "@/Layouts/HomeLayouts";
import { createNewCourse } from "@/Redux/Slices/CourseSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CreateCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    createdBy: "",
    category: "",
    thumbnail: null,
    previewImage: "",
  });

  function handleImageUpload(e) {
    e.preventDefault();
    const uploadedImage = e.target.files[0];
    if (uploadedImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setUserInput({
          ...userInput,
          previewImage: this.result,
          thumbnail: uploadedImage,
        });
      });
    }
  }

  function handleUserInput(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!userInput.title || !userInput.description || !userInput.createdBy || !userInput.thumbnail || !userInput.category) {
      toast.error("All fields are mandatory");
      return;
    }
    const response = await dispatch(createNewCourse(userInput));
    if (response?.payload?.success) {
      setUserInput({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: "",
        previewImage: "",
      });
      navigate("/courses");
    }
  }

  return (
    <HomeLayouts>
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
          <form
            onSubmit={onFormSubmit}
            className="flex flex-col justify-center gap-5 rounded-lg p-6 bg-gray-900 shadow-lg w-full max-w-3xl my-10 relative"
          >
            <Link to="/" className="absolute top-4 left-4 text-2xl text-teal-500 hover:text-teal-700">
              <AiOutlineArrowLeft />
            </Link>
            <h1 className="text-center font-bold text-3xl text-teal-400 mb-4">Create New Course</h1>
            <main className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              <div className="flex flex-col items-center">
                <label htmlFor="image_uploads" className="cursor-pointer w-full">
                  {userInput.previewImage ? (
                    <img className="w-full h-44 object-cover rounded-md border" src={userInput.previewImage} alt="Thumbnail" />
                  ) : (
                    <div className="w-full h-44 flex items-center justify-center border-dashed border-2 border-teal-500 rounded-md">
                      <h1 className="font-bold text-teal-400">Upload your course thumbnail!</h1>
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="image_uploads"
                  name="image_uploads"
                  accept=".jpeg,.webp,.png,.mp4,.jpg"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <div>
                  <label htmlFor="title" className="block text-teal-400 font-semibold">Course Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={userInput.title}
                    placeholder="Enter course title"
                    onChange={handleUserInput}
                    className="block w-full mt-1 p-2 border rounded-md text-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-teal-400 font-semibold">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Enter course description"
                    value={userInput.description}
                    onChange={handleUserInput}
                    className="block w-full mt-1 p-2 border rounded-md text-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="createdBy" className="block text-teal-400 font-semibold">Created By</label>
                  <input
                    type="text"
                    id="createdBy"
                    name="createdBy"
                    value={userInput.createdBy}
                    placeholder="Enter course instructor"
                    onChange={handleUserInput}
                    className="block w-full mt-1 p-2 border rounded-md text-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-teal-400 font-semibold">Category</label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Enter course category"
                    value={userInput.category}
                    onChange={handleUserInput}
                    className="block w-full mt-1 p-2 border rounded-md text-black"
                    required
                  />
                </div>
              </div>
            </main>
            <button
              type="submit"
              className="mt-6 bg-teal-600 text-white py-3 px-8 rounded-full hover:bg-teal-700 transition-colors duration-300"
            >
              Create Course
            </button>
          </form>
        </div>
      </div>
    </HomeLayouts>
  );
}

export default CreateCourse;
