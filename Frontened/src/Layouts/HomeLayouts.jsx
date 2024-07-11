import { FiMenu } from 'react-icons/fi'
import { Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet"
import { Link } from 'react-router-dom';
import Footer from '@/LayoutComponents/Footer';

function HomeLayouts({children}){
    return(
        <>
        <Sheet>
  <SheetTrigger><FiMenu  size={"32px"} className='font-bold text-white m-4'/></SheetTrigger>
  <SheetContent side="left" className="bg-white">
    <SheetHeader>
      <SheetTitle>Laksha Akademy</SheetTitle>
      <SheetDescription className="text-black">
        <div className='text-black text-lg'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">All Course</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
        </div>
        
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
        </Sheet>
        {children}
    <Footer/>
        </>
    )
}
export default HomeLayouts;