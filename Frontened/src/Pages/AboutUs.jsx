import HomeLayouts from '@/Layouts/HomeLayouts';
import { useState } from 'react';


function AboutUs() {

    const[currentSlide,setCurrentSlide]=useState(0);

    const slides=[
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
        "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"    
    ];
    const handlePrev=()=>{
        setCurrentSlide((prev)=>(prev === 0 ? slides.length -1:prev-1));
    };
    const handleNext=()=>{
        setCurrentSlide((prev)=>(prev==slides.length-1 ? 0 :prev+1));
    }
  return (
    <HomeLayouts>
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-grow flex flex-col md:flex-row items-center justify-center p-10 bg-gray-800 text-white">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left p-6">
            <h1 className="text-4xl font-bold mb-4">Affordable and Quality Education!</h1>
            <p className="text-lg leading-relaxed">
              PW Skills is committed to providing affordable and high-quality education to learners from all walks of life. By leveraging the 
              latest in educational technology and partnering with industry experts, we deliver comprehensive and up-to-date courses that cater to the evolving demands 
              of the job market. Our flexible learning options ensure that you can study at your own pace, making it easier to balance education with other commitments. At PW Skills, 
              we believe that financial constraints should not be a barrier to acquiring valuable knowledge and skills, which is why we offer our courses at competitive prices without 
              compromising on the quality of education. Join us to embark on a transformative learning journey that opens doors to new opportunities and career growth.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 p-6">
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image URL
              alt="Education"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Carousel Section */}
      <div className="relative mt-16 overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img src={slide} className="w-full h-auto" alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={handlePrev}
              className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600"
            >
              ❯
            </button>
          </div>
        </div>
    </HomeLayouts>
  );
}

export default AboutUs;
