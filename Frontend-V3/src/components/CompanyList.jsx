import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    title: 'Headphone',
    items: [
      { name: 'Cosmic Byte', image: './CompanyListImage/1.png' },
      { name: 'ZEBRONICS', image: './CompanyListImage/2.png' },
      { name: 'boAt', image: './CompanyListImage/3.png' },
      { name: 'Bose', image: './CompanyListImage/4.jpg' },
    ],
    bgGradient: 'bg-gradient-to-r from-blue-400 to-blue-600', // Gradient for Headphones
  },
  {
    title: 'Speaker',
    items: [
      { name: 'JBL', image: './CompanyListImage/5.png' },
      { name: 'SONY', image: './CompanyListImage/6.png' },
      { name: 'Zebronics', image: './CompanyListImage/2.png' },
      { name: 'boAt', image: './CompanyListImage/3.png' },
    ],
    bgGradient: 'bg-gradient-to-r from-green-400 to-green-600', // Gradient for Speakers
  },
  {
    title: 'Phone',
    items: [
      { name: 'Samsung', image: './CompanyListImage/7.jpg' },
      { name: 'Apple', image: './CompanyListImage/8.jpg' },
      { name: 'Xiaomi', image: './CompanyListImage/9.png' },
      { name: 'OPPO', image: './CompanyListImage/10.png' },
    ],
    bgGradient: 'bg-gradient-to-r from-purple-400 to-purple-600', // Gradient for Smart Phones
  },
  {
    title: 'Watch',
    items: [
      { name: 'Noise', image: './CompanyListImage/11.jpg' },
      { name: 'Fastrack', image: './CompanyListImage/12.jpg' },
      { name: 'Fire Bolt', image: './CompanyListImage/13.png' },
      { name: 'Titan', image: './CompanyListImage/14.jpg' },
    ],
    bgGradient: 'bg-gradient-to-r from-pink-400 to-pink-600', // Gradient for Watch
  }
];

const CompanyList = () => {
  const navigate = useNavigate();

  const handleCompanyClick = (category, company) => {
    navigate(`/category4?category=${category}&company=${company}`);
  };

  return (
    <div className="grid grid-cols-4 gap-8 pl-5 pr-5">
      {categories.map((category, index) => (
        <div key={index} className={`p-6 rounded-lg shadow-lg text-white ${category.bgGradient}`}>
          <h2 className="text-center text-xl font-bold mb-4">{category.title}</h2>
          <div className="grid grid-cols-2 gap-4">
            {category.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleCompanyClick(category.title, item.name)}
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center transform transition duration-500 hover:scale-105">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <p className="mt-2 text-center text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;
