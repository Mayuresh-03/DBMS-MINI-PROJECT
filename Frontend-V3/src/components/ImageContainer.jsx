import React from 'react';
import image1 from '../assets/container/1.jpg';
import image2 from '../assets/container/2.jpg';
import image3 from '../assets/container/3.jpg';
import image4 from '../assets/container/4.jpg';
import image5 from '../assets/container/5.jpg';
import image6 from '../assets/container/6.jpg';
import { useNavigate } from 'react-router-dom';

const imagesData = [
  { src: image1, category: 'Watch', maxPrice: 1499 }, // Example max price and category for image1
  { src: image2, category: 'Headphone', maxPrice: 1199 },
  { src: image3, category: 'Shoes', maxPrice: 699 },
  { src: image4, category: 'Phone', maxPrice: 29999 },
  { src: image5, category: 'Laptop', maxPrice: 59990 },
  { src: image6, category: 'Mouse', maxPrice: 199 },
];

const ImageContainer = () => {
  const navigate = useNavigate();

  const handleImageClick = (category, maxPrice) => {
    // Redirect to the category page with the category and max price as query parameters
    navigate(`/category2?category=${category}&maxPrice=${maxPrice}`);
  };

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {imagesData.map((imageData, index) => (
        <div 
          key={index} 
          className="border rounded cursor-pointer" 
          onClick={() => handleImageClick(imageData.category, imageData.maxPrice)} // Handle click
        >
          <img 
            src={imageData.src} 
            alt={`Image ${index + 1}`} 
            className="w-full h-auto" 
          />
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;
