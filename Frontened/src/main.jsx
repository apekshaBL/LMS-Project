import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
     <App />
     <Toaster/>
      {/* From react-hot-toast we get toaster element only we have to add it so that it is enable to all files*/}
   </BrowserRouter>
  
  
)
