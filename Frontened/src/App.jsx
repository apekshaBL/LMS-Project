import { Route,Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
import Notfound from "./Pages/Notfound.jsx"
import Signup from "./Pages/Signup.jsx"
import Contact from "./Pages/ContactUs.jsx"
import Login from "./Pages/Login.jsx"





function App() {
  return (
   <>
   
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<Notfound/>}/>

     </Routes>
    
   </>
  )
}

export default App