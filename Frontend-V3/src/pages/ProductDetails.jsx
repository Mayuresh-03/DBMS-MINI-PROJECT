// import { useEffect, useState } from "react";
// import { FaStar, FaStarHalf } from "react-icons/fa";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const [productData, setProductData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { asin } = useParams();

//   // Fetch product details based on asin
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:3000/product/asin/${asin}`);
//       if (response.headers['content-type'].includes('application/json')) {
//         const product = response.data[0]; // Access the first item of the array
//         setProductData(product); // Set the product data
//       } else {
//         console.error("Unexpected content type:", response.headers['content-type']);
//         setProductData(null); // Handle unexpected content type
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setProductData(null); // Handle error
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [asin]);

//   if (loading) {
//     return <div>Data is loading...</div>;
//   }

//   if (!productData) {
//     return <div>No product data available</div>;
//   }

//   const { product_title, product_price, product_original_price, about_product } = productData.data;
//   const productInfo = productData.product_information;

//   const handleAddToCart = async (product,event) => {
//     const token = localStorage.getItem('token'); // Retrieve token from local storage
//     console.log({token})
//     event.stopPropagation();
//     if (!token) {
//       alert("Please log in to add items to your cart.");
//       return;
//     }

//     try {
//         const customer_id = localStorage.getItem('customer_id');

//         if (!customer_id) {
//             alert("Customer ID is missing. Please log in again.");
//             return;
//         }
//         console.log("3")
//        const response = await axios.post('http://localhost:3000/cart', 
//         {
//           customer_id,
//           product_id: product.asin,
//           product_name: product.data?.product_title || "unkonown" ,
//           quantity: 1,
//           cost: product.data.product_price || 0,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.status === 200) {
//         alert("Product added to cart successfully!");
//       }
//     } catch (error) {
//       console.error("Error adding product to cart:", error);
//       alert("Failed to add product to cart.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 flex">
//       <div className="lg:w-1/2 flex flex-col gap-4 sticky top-0">
//         <div className="flex items-start">
//           {productData.imgURL && (
//             <img
//               src={productData.imgURL}
//               className="w-full max-w-md rounded-lg"
//               alt="Product"
//             />
//           )}
//         </div>
//       </div>

//       <div className="lg:w-1/2 flex-1 p-4">
//         <div className="flex flex-col gap-1">
//           <p className="bg-red-200 text-red-600 px-2 rounded-full inline-block w-fit">
//             {productData.category_name}
//           </p>
//           <h2 className="text-2xl lg:text-4xl font-medium">{product_title}</h2>
//           <div className="text-red-600 flex items-center gap-1">
//             <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
//           </div>

//           <div className="flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1">
//             <p className="text-red-600">₹{product_price}</p>
//             <p className="text-slate-400 line-through">{product_original_price}</p>
//           </div>

//           <div className="flex items-center gap-3 my-2">
//             <button className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white">Buy</button>
//             <button className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white" onClick={(event)=>handleAddToCart(productData,event)}>Add To Cart</button>
//           </div>

//           <div>
//             <p className="text-slate-600 font-medium my-1">Description:</p>
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <p className="mt-2 text-gray-700">{about_product}</p>
//             </div>
//           </div>

//           <div className="mt-4">
//             <p className="text-slate-600 font-medium my-1">Product Information:</p>
//             <table className="min-w-full bg-white border border-gray-200">
//               <tbody>
//                 {Object.entries(productInfo).map(([key, value]) => (
//                   <tr key={key}>
//                     <td className="px-4 py-2 font-medium text-gray-700">{key}</td>
//                     <td className="px-4 py-2 text-gray-700">{value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { asin } = useParams();

  // Fetch product details based on asin
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/product/asin/${asin}`);
      if (response.headers['content-type'].includes('application/json')) {
        const product = response.data[0]; // Access the first item of the array
        setProductData(product); // Set the product data
      } else {
        console.error("Unexpected content type:", response.headers['content-type']);
        setProductData(null); // Handle unexpected content type
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setProductData(null); // Handle error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [asin]);

  if (loading) {
    return <div>Data is loading...</div>;
  }

  if (!productData) {
    return <div>No product data available</div>;
  }

  const { product_title, product_price, product_original_price } = productData.data;
  const productInfo = productData.product_information;

  // Static description with sentences
  const about_product = `
    All-Day Battery – Up to 18 hours of battery life.
    Powerful Performance – M1 chip with 8-core CPU delivers 3.5x faster performance.
    Fast Memory – 8GB unified memory for smooth multitasking.
    Stunning Display – 13.3-inch Retina display with sharp text and vibrant colors.
    Why Mac – Easy to use, powerful, and ready to go out of the box.
  `;

  // Function to format description with line breaks after full stops
  const formatDescription = (text) => {
    return text.split('.').filter(Boolean).map((sentence, index) => (
      <span key={index}>
        {sentence.trim()}.<br />
      </span>
    ));
  };

  const handleAddToCart = async (product,event) => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    console.log({token})
    event.stopPropagation();
    if (!token) {
      alert("Please log in to add items to your cart.");
      return;
    }

    try {
        const customer_id = localStorage.getItem('customer_id');

        if (!customer_id) {
            alert("Customer ID is missing. Please log in again.");
            return;
        }
        console.log("3")
       const response = await axios.post('http://localhost:3000/cart', 
        {
          customer_id,
          product_id: product.asin,
          product_name: product.data?.product_title || "unkonown" ,
          quantity: 1,
          cost: product.data.product_price || 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        alert("Product added to cart successfully!");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row mt-11">
      {/* Left Image Section */}
      <div className="lg:w-1/2 flex flex-col gap-4">
        <div className="flex items-center justify-center">
          {productData.imgURL && (
            <img
              src={productData.imgURL}
              className="w-full h-[600px] object-cover rounded-lg"
              alt="Product"
            />
          )}
        </div>
      </div>

      {/* Right Product Info Section */}
      <div className="lg:w-1/2 flex-1 p-4 mt-">
        <div className="flex flex-col gap-1">
          <p className="bg-blue-200 text-blue-600 px-2 rounded-full inline-block w-fit">
            {productData.category_name}
          </p>
          <h2 className="text-2xl lg:text-4xl font-medium">{product_title}</h2>
          <div className="text-blue-600 flex items-center gap-1">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
          </div>

          <div className="flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1">
            <p className="text-blue-600">₹{product_price}</p>
            <p className="text-slate-400 line-through">{product_original_price}</p>
          </div>

          <div className="flex items-center gap-3 my-2">
            <button className="border-2 border-blue-600 rounded px-3 py-1 min-w-[120px] text-blue-600 font-medium hover:bg-blue-600 hover:text-white" onClick={(event)=>handleAddToCart(productData,event)}>Buy</button>
            <button className="border-2 border-blue-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-blue-600 hover:text-blue-600 hover:bg-white" onClick={(event)=>handleAddToCart(productData,event)}>Add To Cart</button>
          </div>

          {/* Shortened Description */}
          <div>
            <p className="text-slate-600 font-medium my-1">Description:</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="mt-2 text-gray-700">{formatDescription(about_product)}</p>
            </div>
          </div>

          {/* Product Information Table */}
          <div className="mt-4">
            <p className="text-slate-600 font-medium my-1">Product Information:</p>
            <table className="min-w-full bg-white border border-gray-200">
              <tbody>
                {Object.entries(productInfo).map(([key, value]) => (
                  <tr key={key}>
                    <td className="px-4 py-2 font-medium text-gray-700 border">{key}</td>
                    <td className="px-4 py-2 text-gray-700 border">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
