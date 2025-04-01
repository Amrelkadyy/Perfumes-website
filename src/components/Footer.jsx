import React from 'react';
import { assets } from '../assets/assets';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'; // Import icons
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img className='mb-5 w-48' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, natus.
          </p>
        </div>

        <div>
          <p className='text-2xl font-medium mb-4'>PAGES</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><a href="/" className="text-lg hover:text-gray-800">Home</a></li>
            <li><a href="/collection" className="text-lg hover:text-gray-800">Collection</a></li>
            <li><a href="/about" className="text-lg hover:text-gray-800">About</a></li>
            <li><a href="/contact" className="text-lg hover:text-gray-800">Contact</a></li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <p className='text-2xl font-medium mb-4'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-4'>
            <li>
              <a
                href="https://www.instagram.com/majestic.egy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex items-center gap-2 hover:text-gray-800"
              >
                <FaInstagram />
                majestic.egy
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/majestic.egy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex items-center gap-2 hover:text-gray-800"
              >
                <FaFacebookF />
                majestic.egy
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@majestic_egy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex items-center gap-2 hover:text-gray-800"
              >
                <FaTiktok />
                majestic_egy
              </a>
            </li>
            <li>
              <a
                href="mailto:majestic.egypt1@gmail.com"
                className="text-lg flex items-center gap-2 hover:text-gray-800"
              >
                <AiOutlineMail />
                majestic.egypt1@gmail.com
              </a>
            </li>
          </ul>
         </div>
        </div>
      <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ majestic.com - All Right Reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
