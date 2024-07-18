import { Route,Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
import Notfound from "./Pages/Notfound.jsx"
import Signup from "./Pages/Signup.jsx"
import Contact from "./Pages/ContactUs.jsx"
import Login from "./Pages/Login.jsx"
import CourseList from "./Pages/Course/CourseList.jsx"
import Denied from "./Pages/Denied.jsx"
import CourseDescription from "./Pages/Course/CourseDescription.jsx"
import RequireAuth from "./LayoutComponents/Auth/RequireAuth.jsx"
import CreateCourse from "./Pages/Course/CreateCourse.jsx"

function App() {
  return (
   <>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/AllCourses" element={<CourseList/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/denied" element={<Denied/>}/>
      <Route path="*" element={<Notfound/>}/>
      <Route path="/course/description" element={<CourseDescription/>}/>
      <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
       <Route path="/course/create" element={ <CreateCourse/> } />
      </Route>
     </Routes >
    
   </>
  )
}

export default App