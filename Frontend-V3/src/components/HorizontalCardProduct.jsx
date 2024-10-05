import React, { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import axios from 'axios';
import TextComponent from '../helpers/TextComponent'
import { useNavigate } from 'react-router-dom';
import PercentageDecrease from '../helpers/PercentageDecrease';

const HorizontalCardProduct = ({ category, heading }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadingList = new Array(4).fill(null);
    const scrollElement = useRef();
    const navigate = useNavigate();

    // Fetch products based on category
    // const fetchData = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await axios.get(`http://localhost:3000/product/${category}`);
    //         if (response.headers['content-type'].includes('application/json')) {
    //             if (Array.isArray(response.data)) {
    //                 setData(response.data);
    //             } else {
    //                 console.error("Unexpected data format:", response.data);
    //                 setData([]);
    //             }
    //         } else {
    //             console.error("Unexpected content type:", response.headers['content-type']);
    //             setData([]);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         setData([]);
    //     } finally {
    //         setLoading(false);
    //     }
    //     console.log(data)
    // };

    // useEffect(() => {
    //     fetchData();
    // }, [category]);

    const fetchData = async (fetchAll = false) => {
        setLoading(true);
        try {
            const url = fetchAll 
                ? `http://localhost:3000/product/${category}?all=true` 
                : `http://localhost:3000/product/${category}`;
            const response = await axios.get(url);
            if (response.headers['content-type'].includes('application/json')) {
                if (Array.isArray(response.data)) {
                    setData(response.data);
                } else {
                    console.error("Unexpected data format:", response.data);
                    setData([]);
                }
            } else {
                console.error("Unexpected content type:", response.headers['content-type']);
                setData([]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]);
        } finally {
            setLoading(false);
        }
        
    };
    
    useEffect(() => {
        fetchData();
    }, [category]);


    console.log(data)

    // Scroll functions
    const scrollRight = () => {
        const widthToScroll = scrollElement.current.clientWidth;
        scrollElement.current.scrollLeft += widthToScroll;
    };

    const handleAddToCart = async (product,event) => {
        console.log("1")
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
          console.log("4")
          if (response.status === 200) {
            alert("Product added to cart successfully!");
          }
        } catch (error) {
          console.error("Error adding product to cart:", error);
          alert("Failed to add product to cart.");
        }
      };


    const scrollLeft = () => {
        const widthToScroll = scrollElement.current.clientWidth;
        scrollElement.current.scrollLeft -= widthToScroll;
    };

    // const TextComponent = ({text = ''}) => {
    //     const truncatedText = (text.split(','))[0];
    //     return truncatedText;
    // }

    const handleNavigation = (productId) => {
        navigate(`/product/${productId}`)
    };

    const cleanPrice = (priceString) => {
        // Remove any non-numeric characters except for the decimal point
        const cleanedString = priceString.replace(/[^0-9.-]+/g, "");
        const intoNum = Number(cleanedString)
        return parseFloat(intoNum);
    };

    return (
        <div className='container mx-auto px-4 my-6 relative'>
            <h2 className='text-2xl font-bold text-gray-800 py-4'>{heading}</h2>

            <div className='relative'>
                {/* Left scroll button */}
                <button
                    className='absolute top-1/2 left-[-5px] transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 shadow-lg rounded-full p-3 text-lg z-10'
                    onClick={scrollLeft}>
                    <FaAngleLeft />
                </button>

                {/* Right scroll button */}
                <button
                    className='absolute top-1/2 right-[-5px] transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 shadow-lg rounded-full p-3 text-lg z-10'
                    onClick={scrollRight}
                >
                    <FaAngleRight />
                </button>

                {/* Product List */}
                <div
                    className='flex items-center gap-6 overflow-x-auto scrollbar-none transition-all'
                    ref={scrollElement}
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {loading ? (
                        loadingList.map((_, index) => (
                            <div key={index} className='bg-white rounded-lg shadow-lg flex-shrink-0 min-w-[350px] max-w-[350px] overflow-hidden'>
                                {/* Image Placeholder */}
                                <div className='w-full h-25 bg-slate-200 animate-pulse rounded-t-lg'></div>
                        
                                {/* Content Placeholder */}
                                <div className='p-4 space-y-3'>
                                    {/* Title Placeholder */}
                                    <div className='h-5 bg-slate-200 animate-pulse rounded-md w-3/4'></div>
                        
                                    {/* Category Placeholder */}
                                    <div className='h-4 bg-slate-200 animate-pulse rounded-md w-1/2'></div>
                        
                                    {/* Price Placeholder */}
                                    <div className='flex items-center justify-between'>
                                        <div className='h-5 bg-slate-200 animate-pulse rounded-md w-1/3'></div>
                                        <div className='h-4 bg-slate-200 animate-pulse rounded-md w-1/4'></div>
                                    </div>
                        
                                    {/* Button Placeholder */}
                                    <div className='h-10 bg-slate-200 animate-pulse rounded-md w-full'></div>
                                </div>
                            </div>
                        ))
                        
                        
                    ) : (
                        Array.isArray(data) && data.map((product) => (
                            <div
                                key={product.id}
                                className='bg-white rounded-lg shadow-lg flex-shrink-0 min-w-[350px] max-w-[350px]'

                                onClick={() => handleNavigation(product.asin)}
                            >
                                <div className='w-full h-48 rounded-t-lg overflow-hidden relative group'>
                                    <img
                                        src={product.imgURL}
                                        alt={product?.data?.product_title}
                                        className='object-cover h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-105'
                                    />
                                    <span className='absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded'>
                                        <PercentageDecrease originalValue={cleanPrice(product.data.product_original_price)} newValue={cleanPrice(product.data.product_price)}/><span>% off</span>
                                    </span>
                                </div>
                                <div className='p-3'>
                                <h2 className='font-semibold text-base text-gray-900 line-clamp-1 mb-1'>
                                    {product?.data?.product_title ? (
                                        <TextComponent text={product.data.product_title} />
                                    ) : (
                                        'No title available'
                                    )}
                                </h2>
                                    <p className='text-sm text-gray-500 mb-4'>
                                        {product?.category_name || 'Unknown category'}
                                    </p>

                                    <div className='flex items-center justify-between mb-2'>
                                        <p className='text-red-600 font-bold text-lg'>
                                            {product?.data?.product_price ? `₹${product.data.product_price}` : 'N/A'}
                                        </p>
                                        <p className='text-gray-400 line-through'>
                                            {product?.data?.product_original_price
                                                ? `${product.data.product_original_price}`
                                                : 'N/A'}
                                        </p>
                                    </div>

                                    <button onClick={(event)=>handleAddToCart(product,event)} className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-2 rounded-md transition-colors'>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default HorizontalCardProduct;