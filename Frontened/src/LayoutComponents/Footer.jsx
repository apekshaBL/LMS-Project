import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
                <section className="text-center sm:text-left text-lg mb-4 sm:mb-0">
                    &copy; {year} | All Rights Reserved
                </section>
                <section className="flex items-center justify-center gap-6 text-2xl">
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300"><BsFacebook /></a>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300"><BsInstagram /></a>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300"><BsLinkedin /></a>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300"><BsTwitter /></a>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
