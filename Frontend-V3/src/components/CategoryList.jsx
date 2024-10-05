import { useState } from "react";

const CategoryList = ({ items }) => {
  const [categoryProduct, setCategoryProduct] = useState(items);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(13).fill(null);

  return (
    <body class="bg-gray-100 p-8">
  <div class="grid grid-cols-4 gap-8">
    
    {/* <!-- Box 1 --> */}
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-center text-xl font-bold mb-4">Headphones</h2>
      <div class="grid grid-cols-2 gap-4">
        {/* <!-- Circular Logo 1 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="1.png" alt="Cosmic Byte" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">Cosmic Byte</p>
        </div>
        {/* <!-- Circular Logo 2 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="2.png" alt="Zebronics" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">Zebronics</p>
        </div>
        {/* <!-- Circular Logo 3 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="3.png" alt="Boat" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">BOAT</p>
        </div>
        {/* <!-- Circular Logo 4 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="4.jpg" alt="Bose" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">BOSE</p>
        </div>
      </div>
    </div>

    {/* <!-- Box 2 --> */}
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-center text-xl font-bold mb-4">Speakers</h2>
      <div class="grid grid-cols-2 gap-4">
        {/* <!-- Circular Logo 1 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="5.png" alt="JBL" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">JBL</p>
        </div>
        {/* <!-- Circular Logo 2 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="6.png" alt="SONY" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">SONY</p>
        </div>
        {/* <!-- Circular Logo 3 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="2.png" alt="Zebronics" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">Zebronics</p>
        </div>
        {/* <!-- Circular Logo 4 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="3.png" alt="Boat" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">BOAT</p>
        </div>
      </div>
    </div>

    {/* <!-- Box 3 --> */}
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-center text-xl font-bold mb-4">Smart Phones</h2>
      <div class="grid grid-cols-2 gap-4">
        {/* <!-- Circular Logo 1 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="7.jpg" alt="SAMSUNG" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">SAMSUNG</p>
        </div>
        {/* <!-- Circular Logo 2 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="8.jpg" alt="Apple" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">Apple</p>
        </div>
        {/* <!-- Circular Logo 3 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="9.png" alt="XAIOMI" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">XAIOMI</p>
        </div>
        {/* <!-- Circular Logo 4 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="10.png" alt="OPPO" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">OPPO</p>
        </div>
      </div>
    </div>

    {/* <!-- Box 4 --> */}
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-center text-xl font-bold mb-4">Watch</h2>
      <div class="grid grid-cols-2 gap-4">
        {/* <!-- Circular Logo 1 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="11.jpg" alt="NOISE" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">NOISE</p>
        </div>
        {/* <!-- Circular Logo 2 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="12.jpg" alt="Rolex" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">Fastrack</p>
        </div>
        {/* <!-- Circular Logo 3 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="13.png" alt="Fire Bolt" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">Fire Bolt</p>
        </div>
        {/* <!-- Circular Logo 4 --> */}
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center">
            <img src="14.jpg" alt="Titan" class="w-full h-full rounded-full object-cover"/>
          </div>
          <p class="mt-2 text-center text-sm font-medium">Titan</p>
        </div>
      </div>
    </div>

  </div>
  </body>
  );
};

export default CategoryList;