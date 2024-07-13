import { Link } from 'react-router-dom';
import HomeLayouts from '@/Layouts/HomeLayouts';

function HomePage() {
  return (
    <HomeLayouts>
      <div className="container mx-auto p-6">
        {/* Hero Section */}
        <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-800 text-white relative">
          {/* Left Side (Image) */}
          <div className="w-full md:w-1/2 p-6 flex justify-center">
            <img 
              src="https://via.placeholder.com/400" 
              alt="Course Image" 
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
          {/* Right Side (Text) */}
          <div className="w-full md:w-1/2 p-6 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 text-teal-400">Elevate Your Skills with Us</h1>
            <p className="text-xl mb-6 text-gray-300">
              Explore expertly crafted courses designed to meet your needs and help you advance your career.
            </p>
            <Link to="/courses">
              <button className="bg-teal-600 text-white py-3 px-8 rounded-full hover:bg-teal-700 transition-colors duration-300">
                Explore Courses
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-900 text-white">
          <h2 className="text-4xl font-semibold text-teal-500 text-center">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-300 text-center">
            Discover the benefits of learning with us and see why we're the right choice for your educational journey.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="max-w-xs p-6 bg-gray-800 shadow-lg rounded-lg">
              <div className="text-teal-500 w-16 h-16 mx-auto">
                <i className="fas fa-chalkboard-teacher fa-3x"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mt-4">Expert Tutors</h3>
              <p className="mt-2 text-gray-400">
                Learn from top professionals who are committed to your success.
              </p>
            </div>
            <div className="max-w-xs p-6 bg-gray-800 shadow-lg rounded-lg">
              <div className="text-teal-500 w-16 h-16 mx-auto">
                <i className="fas fa-clock fa-3x"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mt-4">Flexible Scheduling</h3>
              <p className="mt-2 text-gray-400">
                Enjoy the flexibility to learn at your own pace with our adjustable schedules.
              </p>
            </div>
            <div className="max-w-xs p-6 bg-gray-800 shadow-lg rounded-lg">
              <div className="text-teal-500 w-16 h-16 mx-auto">
                <i className="fas fa-book-open fa-3x"></i>
              </div>
              <h3 className="text-2xl font-semibold text-white mt-4">Comprehensive Content</h3>
              <p className="mt-2 text-gray-400">
                Access a wide range of interactive resources and materials.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <footer className="py-16 bg-teal-500 text-white text-center">
          <h2 className="text-3xl font-semibold">
            Start Your Learning Journey Today!
          </h2>
          <p className="mt-4 text-lg">
            Join our community and unlock your potential with our exclusive courses and resources.
          </p>
          <Link to="/signup">
            <button className="mt-6 bg-teal-700 text-white py-3 px-8 rounded-full hover:bg-teal-800 transition-colors duration-300">
              Get Started
            </button>
          </Link>
        </footer>
      </div>
    </HomeLayouts>
  );
}

export default HomePage;
