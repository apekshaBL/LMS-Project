import { Link } from 'react-router-dom';
import HomeLayouts from '@/Layouts/HomeLayouts';

function HomePage() {
  return (
    <HomeLayouts>
      <div className="container mx-auto p-6">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-20 bg-gray-800 text-white">
          <div className="md:w-1/2 p-6">
            <img src="https://via.placeholder.com/400" alt="Course Image" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="md:w-1/2 p-6 text-center md:text-left">
            <h1 className="text-5xl font-bold">Elevate Your Skills with Us</h1>
            <p className="mt-4 text-xl">Discover a range of expertly designed courses tailored to your needs.</p>
            <button className="mt-6 bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition-colors duration-300">Explore Courses</button>
          </div>
        </section>

        {/* Scroll Down Section */}
        <section className="relative mt-16 py-16 bg-cover bg-center text-white" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600')" }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-semibold">Why Choose Us?</h2>
            <p className="mt-4 text-lg">We offer unparalleled learning experiences and resources.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <div className="max-w-xs p-6 bg-white bg-opacity-90 shadow-lg rounded-lg">
                <div className="text-teal-500 w-16 h-16 mx-auto">
                  <i className="fas fa-chalkboard-teacher fa-3x"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-4">Expert Tutors</h3>
                <p className="mt-2 text-gray-700">Learn from industry leaders who are dedicated to your success.</p>
              </div>
              <div className="max-w-xs p-6 bg-white bg-opacity-90 shadow-lg rounded-lg">
                <div className="text-teal-500 w-16 h-16 mx-auto">
                  <i className="fas fa-clock fa-3x"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-4">Flexible Scheduling</h3>
                <p className="mt-2 text-gray-700">Enjoy the freedom to learn at your own pace.</p>
              </div>
              <div className="max-w-xs p-6 bg-white bg-opacity-90 shadow-lg rounded-lg">
                <div className="text-teal-500 w-16 h-16 mx-auto">
                  <i className="fas fa-book-open fa-3x"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-4">Comprehensive Content</h3>
                <p className="mt-2 text-gray-700">Access extensive and interactive resources.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="mt-16 text-center py-8 bg-gray-900 text-white">
          <h2 className="text-3xl font-semibold">Start Your Learning Journey Today!</h2>
          <p className="mt-4 text-lg">Join our community and make the most of our offerings.</p>
          <Link to="/signup">
          <button className="mt-6 bg-teal-500 py-3 px-8 rounded-full hover:bg-teal-600 transition-colors duration-300">Get Started</button>
          </Link>

        </footer>
      </div>
    </HomeLayouts>
  );
}

export default HomePage;
