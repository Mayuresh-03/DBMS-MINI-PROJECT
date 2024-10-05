import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaShoppingCart } from 'react-icons/fa';
import categoryImg from '../assets/Images/category.jpg';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {

    const navigate = useNavigate();

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-900 shadow-lg fixed top-0 w-full z-20 h-18 text-white">
        {/* Logo Container */}
        <div className="logo_container">
                <a href="#" className="text-white text-3xl font-bold font-mono tracking-wide " onClick={() => navigate('./home')}>
                    MORS
                </a>
        </div>

        {/* Search Bar */}
        <SearchBar /> {/* Use the SearchBar component here */}

        {/* Action Bar */}
        <div className="flex items-center space-x-10 text-white">
                {/* Categories */}
                <div className="flex flex-col items-center hover:text-gray-300 transition duration-300 cursor-pointer">
                    <img 
                        src={categoryImg} 
                        alt="Category Icon" 
                        className="h-12 w-12 rounded-full object-cover shadow-md border-2 border-white block" // Ensuring no gap
                        onClick={toggleSidebar} 
                    />
                </div>

            {/* Profile Dropdown */}
            <div className="relative group">
                    <div className="flex flex-col items-center hover:text-gray-300 transition duration-300 cursor-pointer">
                        <CgProfile className="h-12 w-12" onClick={() => navigate('/profile')}/>
                </div>
            </div>


            {/* Cart */}
            <div className="relative flex flex-col items-center hover:text-gray-300 transition duration-300 cursor-pointer">
                    <FaShoppingCart className="h-12 w-12" onClick={() => navigate('cart')}/>
            </div>
        </div>
        </header>
    );
};

export default Header;
