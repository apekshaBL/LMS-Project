import { useNavigate } from "react-router-dom";

function CourseCard({ data }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/course/description/${data?.id}`)} 
      className="w-full sm:w-80 md:w-80 h-96 bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
    >
      <img 
        className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110" 
        src={data?.thumbnail?.secure_url} 
        alt="Course Thumbnail" 
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-teal-400 truncate">{data?.title || "Course Title"}</h2>
        <p className="text-gray-300 text-sm line-clamp-3">{data?.description || "Course description goes here. This should be concise and provide a brief overview of the course content."}</p>
        <p className="text-gray-200 text-sm"><span className="font-semibold text-teal-400">Category:</span> {data?.category || "N/A"}</p>
        <p className="text-gray-200 text-sm"><span className="font-semibold text-teal-400">Total Lectures:</span> {data?.numbersofLectures || "0"}</p>
        <p className="text-gray-200 text-sm"><span className="font-semibold text-teal-400">Instructor:</span> {data?.createdBy || "Instructor Name"}</p>
      </div>
    </div>
  );
}

export default CourseCard;
