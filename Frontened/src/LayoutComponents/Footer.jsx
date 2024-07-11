 import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin} from 'react-icons/bs'
function Footer(){
    const currentDate=new Date();
    const year=currentDate.getFullYear();
    return(
        <>
        <footer className="relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-zinc-600 py-5 sm:px-20" >
            <section className='text-lg'>
               Copyright {year} | All righta are reserverd
            </section>
            <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                <a className='hover:text-gray-800  transition-all ease-in-out duration-300'><BsFacebook/></a>
                <a className='hover:text-gray-800  transition-all ease-in-out duration-300'><BsInstagram/></a>
                <a className='hover:text-gray-800  transition-all ease-in-out duration-300'><BsLinkedin/></a>
                <a className='hover:text-gray-800  transition-all ease-in-out duration-300'><BsTwitter/></a>
            </section>
        </footer>
        </>
    )

}
export default Footer;

 