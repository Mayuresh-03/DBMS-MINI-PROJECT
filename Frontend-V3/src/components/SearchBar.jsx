import React, { useState, useEffect } from 'react';
import { CgSearch } from 'react-icons/cg';

const placeholders = ["Search books", "Search mobiles", "Search laptops", "Search accessories"];

const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const [fadeClass, setFadeClass] = useState('translate-y-0 opacity-100');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('translate-y-[-100%] opacity-0');
      setTimeout(() => {
        setPlaceholder(prev => {
          const currentIndex = placeholders.indexOf(prev);
          const nextIndex = (currentIndex + 1) % placeholders.length;
          return placeholders[nextIndex];
        });
        setFadeClass('translate-y-[100%] opacity-0');
        setTimeout(() => {
          setFadeClass('translate-y-0 opacity-100');
        }, 100); // Small delay to ensure the new placeholder is in position before fading in
      }, 500); // Match this duration with the CSS transition duration
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex items-center bg-gray-200 hover:bg-gray-300 transition-all duration-300 rounded-full px-4 py-2 w-full max-w-lg shadow-sm">
      <CgSearch />
      <input 
        className={`bg-transparent focus:outline-none ml-3 w-full placeholder-gray-500 transition-all duration-500 ${fadeClass}`} 
        type="text" 
        placeholder={placeholder} 
      />
    </div>
  );
};

export default SearchBar;
