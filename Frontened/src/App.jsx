import { Route,Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
import Notfound from "./Pages/Notfound.jsx"




function App() {
  return (
   <>
   
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="*" element={<Notfound/>}/>

     </Routes>
    
   </>
  )
}

export default App