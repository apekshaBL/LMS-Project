import HomeLayouts from "@/Layouts/HomeLayouts";
import { Link } from 'react-router-dom';



function HomePage() {
    return (
        <HomeLayouts>
            {/* Hero Section */}
            <div className="relative pt-20 pb-20 text-white flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 w-full space-y-6 text-center">
                    <h1 className="text-6xl font-bold">Discover the Best Online Courses</h1>
                    <p className="text-2xl mt-4">Enhance your skills with expert-led courses.</p>
                    <Link to='/signup'>
                    <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 transition duration-300">Join Now</button>
                    </Link>
                   
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 bg-gray-300 text-black">
                <h2 className="text-3xl font-semibold text-center">Why Choose Us?</h2>
                <div className="flex justify-around mt-8">
                    <div className="w-1/4 p-6 text-center bg-white shadow-md rounded-lg">
                        <h3 className="text-xl font-bold">Expert Instructors</h3>
                        <p>Learn from industry leaders with years of experience.</p>
                    </div>
                    <div className="w-1/4 p-6 text-center bg-white shadow-md rounded-lg">
                        <h3 className="text-xl font-bold">Flexible Learning</h3>
                        <p>Study at your own pace with our flexible course schedules.</p>
                    </div>
                    <div className="w-1/4 p-6 text-center bg-white shadow-md rounded-lg">
                        <h3 className="text-xl font-bold">Affordable Prices</h3>
                        <p>Access high-quality education without breaking the bank.</p>
                    </div>
                </div>
            </div>

            {/* Popular Courses Section */}
            <div className="py-16 bg-white text-black">
                <h2 className="text-3xl font-semibold text-center">Popular Courses</h2>
                <div className="flex justify-around mt-8">
                    <div className="w-1/4 p-6 text-center bg-gray-100 shadow-md rounded-lg">
                        <h3 className="text-xl font-bold">Full Stack Web Development</h3>
                        <p>Master Web Development: Build Real-World Projects from Scratch!.</p>
                        <Link to="/courses/1" className="text-blue-500 hover:underline">Learn More</Link>
                    </div>
                    <div className="w-1/4 p-6 text-center bg-gray-100 shadow-md rounded-lg">
                        <h3 className="text-xl font-bold">Full Stack Java Developer</h3>
                        <p>Transform Your Career: In-Depth Java Development Training.</p>
                        <Link to="/courses/2" className="text-blue-500 hover:underline">Learn More</Link>
                    </div>
                    <div className="w-1/4 p-6 text-center bg-gray-100 shadow-md rounded-lg">
                        <h3 className="text-xl font-bold">Artificial Intelligence and machine Learning</h3>
                        <p>Unlock the Power of AI: Learn Machine Learning from Industry Leaders!</p>
                        <Link to="/courses/3" className="text-blue-500 hover:underline">Learn More</Link>
                    </div>
                </div>
            </div>

          {/* Testimonials Section */}
<div className="py-7 bg-gray-100 text-black">
  <h2 className="text-3xl font-semibold text-center">What Our Students Say</h2>
  <div className="flex flex-wrap justify-around mt-8">
    <div className="w-full sm:w-1/3 p-6 text-center bg-white shadow-md rounded-lg">
      <p>"The course was incredibly well-structured and the instructors were top-notch!"</p>
      <span className="block mt-4 font-bold">
        <div className="flex justify-evenly">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-90">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://tse4.mm.bing.net/th?id=OIP.lGs8_kicfoRys5XSv-j0GQHaE7&pid=Api&P=0&h=180"
              alt="Avatar"
            />
          </div>
        </div>
        <h1>-Satyam Shivam</h1>
        </div>
       
      </span>
    </div>
    <div className="w-full sm:w-1/3 p-6 text-center bg-white shadow-md rounded-lg">
      <p>"Exceptional value for money—high-quality education without breaking the bank."</p>
      <span className="block mt-4 font-bold">
        <div className="flex justify-evenly">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-90">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://tse2.mm.bing.net/th?id=OIP.fWT00kLoWGxXTyRft8VhMwHaE7&pid=Api&P=0&h=180"
              alt="Avatar"
            />
          </div>
        </div>
        <h1>-Tanu Arora</h1>
        </div>
       
      </span>
    </div>
    <div className="w-full sm:w-1/3 p-6 text-center bg-white shadow-md rounded-lg">
      <p>"Excellent balance between theory and practical application made the course highly effective."</p>
      <span className="block mt-4 font-bold">
        <div className="flex justify-evenly">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-90">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://tse1.mm.bing.net/th?id=OIP.Ylhtem14WGHy5v7UiTuHoAHaGH&pid=Api&P=0&h=180"
              alt="Avatar"
            />
          </div>
        </div>
        <h1>-Shraddha Araya</h1>
        </div>
       
      </span>
    </div>
   {/* Testimonials Section */}
<div className="py-7 bg-gray-100 text-black">
  <div className="flex flex-wrap justify-around mt-8">
    <div className="w-full sm:w-1/3 p-6 text-center bg-white shadow-md rounded-lg">
      <p>"This platform has transformed the way I learn. Highly recommended!"</p>
      <span className="block mt-4 font-bold">
        <div className="flex justify-evenly">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-90">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://tse3.mm.bing.net/th?id=OIP.mPn9nhQjKJg8R8-vXyY4YAHaI2&pid=Api&P=0&h=180"
              alt="Avatar"
            />
          </div>
        </div>
        <h1>-Pranod Shelar</h1>
        </div>
        
      </span>
    </div>
    <div className="w-full sm:w-1/3 p-6 text-center bg-white shadow-md rounded-lg">
      <p>"The instructors are very knowledgeable and the courses are very comprehensive."</p>
      <span className="block mt-4 font-bold">
        <div className="flex justify-evenly">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-90">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://tse4.mm.bing.net/th?id=OIP.YCOB-jHfPvCWBvu1---VkgHaE8&pid=Api&P=0&h=180"
              alt="Avatar"
            />
          </div>
        </div>
        <h1>-Manoj Tripathi</h1>
        </div>
      
      </span>
    </div>
    <div className="w-full sm:w-1/3 p-6 text-center bg-white shadow-md rounded-lg">
      <p>"The projects and assignments were relevant and provided real-world experience"</p>
      <span className="block mt-4 font-bold">
        <div className=" flex justify-evenly">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-90">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://tse1.mm.bing.net/th?id=OIP.yir0s_y4ZBciy9TQFvkPRgHaE8&pid=Api&P=0&h=180"
              alt="Avatar"
            />
          </div>
           
           
        </div>
        <h1>-Pranali Rathode</h1>
        </div>
       
      </span>
    </div>
    {/* Testimonials Section */}
<div className="py-7 bg-gray-100 text-black">

  <div className="flex flex-wrap justify-around mt-8">
    <div className="w-full sm:w-1/3 p-6 text-center bg-white shadow-md rounded-lg">
      <p>"Fantastic support and mentorship throughout the course made the learning process smooth and enjoyable."</p>
      <span className="block mt-4 font-bold">
        <div className="flex justify-evenly">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-90">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://tse3.mm.bing.net/th?id=OIP.z_fteR9BXh4O1GBL72A1GgHaHZ&pid=Api&P=0&h=180"
              alt="Avatar"
            />
          </div>
        </div>
            <h1>-Sakshi Tyagi</h1>
        </div>
        
      </span>
    </div>
    <div className="w-full sm:w-1/3 p-6 text-center bg-white shadow-md rounded-lg">
      <p>"Impressed by the quality of the course material and the dedication of the instructors."</p>
      <span className="block mt-4 font-bold">
        <div className="flex justify-evenly">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-90">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://tse2.mm.bing.net/th?id=OIP.zL2S0eWK21yF0PhqzOcWwQHaK3&pid=Api&P=0&h=180"
              alt="Avatar"
            />
          </div>
        </div>
        <h1>-Pratik Manhor</h1>
        </div>
       
      </span>
    </div>
    <div className="w-full sm:w-1/3 p-6 text-center bg-white shadow-md rounded-lg">
      <p>"An exceptional learning experience with hands-on projects that made learning practical and engaging."</p>
      <span className="block mt-4 font-bold">
        <div className="flex justify-evenly">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-90">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://tse1.mm.bing.net/th?id=OIP.sTK_T0a2vcOqVrQzMN61hQHaFb&pid=Api&P=0&h=180"
              alt="Avatar"
            />
          </div>
        </div>
         <h1>-Rahul Mishra</h1>
        </div>
       
      </span>
    </div>
{/* Testimonials Section */}
  </div>
</div>

  </div>
</div>

  </div>
</div>
        </HomeLayouts>
    );
}

export default HomePage;
