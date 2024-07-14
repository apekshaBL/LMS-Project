import CourseCard from "@/LayoutComponents/CourseCard";
import HomeLayouts from "@/Layouts/HomeLayouts";
import { getAllCourses } from "@/Redux/Slices/CourseSlice";
import { useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";

function CourseList(){
    const dispatch=useDispatch();
    const {courseData}=useSelector((state)=>state.course);

    async function loadCourses(){
        await dispatch(getAllCourses());
    }

    useEffect(()=>{ 
        loadCourses();
    },[]);

    return(
        <HomeLayouts>
        <div className="container mx-auto p-6 ">
          <h1 className="text-4xl font-bold mt-14  mb-8 text-teal-400 text-center">Explore the Courses made by <span>Industry Experts</span></h1>
          <div className="mb-10 flex flex-wrap justify-center gap-14">
            {
                courseData?.map((element)=>{
                    return <CourseCard key={element._id} data={element}/>
                })
            }

          </div>
        </div>
      </HomeLayouts>
  
    )
}
export default CourseList;