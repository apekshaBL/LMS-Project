import HomeLayouts from "@/Layouts/HomeLayouts";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaChalkboardTeacher, FaBookOpen, FaClock } from "react-icons/fa";

  function CourseDescription() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { role, data } = useSelector((state) => state.auth);

  useEffect(() => {
    // Add any side effects or data fetching logic if needed
  }, []);

  return (
    <HomeLayouts>
      <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gray-900 text-white">
        <div className="w-full max-w-5xl p-6">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Course Image */}
              <div className="md:w-1/2">
                <img
                  src={state?.thumbnail}
                  alt="thumbnail"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              {/* Course Details */}
              <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold text-teal-500">
                    {state?.title || "Course Title"}
                  </h1>
                  <p className="text-lg text-gray-300">{state?.description || "No description available."}</p>
                  <div className="flex flex-col space-y-2 text-lg">
                    <p className="font-semibold">
                      <FaBookOpen className="inline text-teal-500 mr-2" />
                      <span className="text-teal-500">Total Lectures: </span>{state?.numbersOfLectures || "N/A"}
                    </p>
                    <p className="font-semibold">
                      <FaChalkboardTeacher className="inline text-teal-500 mr-2" />
                      <span className="text-teal-500">Instructor: </span>{state?.createdBy || "N/A"}
                    </p>
                    <p className="font-semibold">
                      <FaClock className="inline text-teal-500 mr-2" />
                      <span className="text-teal-500">Duration: </span>{state?.duration || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  {role === 'ADMIN' || data?.subscription?.status === 'ACTIVE' ? (
                    <Button
                      className="bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition-transform duration-300 transform hover:scale-105"
                      onClick={() => navigate("/checkout")}
                    >
                      Subscribe
                    </Button>
                  ) : (
                    <Button
                      className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-transform duration-300 transform hover:scale-105"
                      onClick={() => navigate("/subscribe")}
                    >
                      Subscribe
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayouts>
  );
}

export default CourseDescription;
