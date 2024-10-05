import { useNavigate, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import TextComponent from '../helpers/TextComponent';
import PercentageDecrease from '../helpers/PercentageDecrease';

const CategoryPage3 = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const company = searchParams.get('company');

    const [tempSelectedBrands, setTempSelectedBrands] = useState([]);
    const [tempSelectedColors, setTempSelectedColors] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 0]);
    const [minMaxPrice, setMinMaxPrice] = useState([0, 0]);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleBrandChange = (brand) => {
        setTempSelectedBrands((prev) =>
            prev.includes(brand)
                ? prev.filter((item) => item !== brand)
                : [...prev, brand]
        );
    };

    const handleColorChange = (color) => {
        setTempSelectedColors((prev) =>
            prev.includes(color)
                ? prev.filter((item) => item !== color)
                : [...prev, color]
        );
    };

    const handleNavigation = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handlePriceChange = (value) => {
        setPriceRange(value);
    };

    const handleAddToCart = async (product, event) => {
        const token = localStorage.getItem('token');
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
            const response = await axios.post('http://localhost:3000/cart',
                {
                    customer_id,
                    product_id: product.asin,
                    product_name: product.data?.product_title || "unknown",
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

    const removeAllFilters = () => {
        setTempSelectedBrands([]);
        setTempSelectedColors([]);
        setPriceRange(minMaxPrice);
        setFilteredData(data);
    };

    const cleanPrice = (priceString) => {
        if (!priceString) return 0; // Return 0 if priceString is null or undefined
        const cleanedString = priceString.replace(/[^0-9.-]+/g, "");
        return parseFloat(cleanedString);
    };
    

    const fetchData = async (fetchAll = false) => {
        setLoading(true);
        try {
            const url = fetchAll
                ? `http://localhost:3000/product/${category}?all=true`
                : `http://localhost:3000/product/${category}`;

            const response = await axios.get(url);

            if (response.headers['content-type'].includes('application/json')) {
                if (Array.isArray(response.data)) {
                    const filteredProducts = response.data.filter(product => {
                        return product.data.product_title.includes(company);
                    });

                    setData(filteredProducts);
                    setFilteredData(filteredProducts);

                    const uniqueBrands = new Set(filteredProducts
                        .map(product => product.data.product_title)
                        .filter(title => title !== undefined)
                        .map(title => title.split(' ')[0])
                    );
                    const uniqueColors = new Set(filteredProducts
                        .map(product => product.product_information.Colour)
                        .filter(color => color !== undefined)
                    );
                    setBrands([...uniqueBrands]);
                    setColors([...uniqueColors]);

                    const prices = filteredProducts
                        .map(product => product.data.product_price)
                        .filter(price => price !== undefined && !isNaN(cleanPrice(price)))
                        .map(price => cleanPrice(price));

                    if (prices.length > 0) {
                        const minPrice = Math.min(...prices);
                        const maxPrice = Math.max(...prices);
                        setMinMaxPrice([minPrice, maxPrice]);
                        setPriceRange([minPrice, maxPrice]);
                    } else {
                        setMinMaxPrice([0, 200]);
                        setPriceRange([0, 200]);
                    }
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
        fetchData(true);
    }, [category, company]);

    const applyFilters = () => {
        const filtered = data.filter(product => {
            const matchesBrand = tempSelectedBrands.length === 0 || tempSelectedBrands.includes(product.data.product_title.split(' ')[0]);
            const matchesColor = tempSelectedColors.length === 0 || tempSelectedColors.includes(product.product_information.Colour);
            return matchesBrand && matchesColor;
        });
        setFilteredData(filtered);
    };

    function renderStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <>
                {Array(fullStars).fill().map((_, i) => <span key={i} className="text-yellow-500">★</span>)}
                {halfStar === 1 && <span className="text-yellow-500">★</span>}
                {Array(emptyStars).fill().map((_, i) => <span key={i} className="text-gray-300">★</span>)}
            </>
        );
    }

    return (
        <div className="flex bg-gradient-to-r from-amber-300 via-green-400 to-emerald-300 mt-4">
            <div className="w-72 h-screen bg-white shadow-lg p-5 flex flex-col justify-between sticky top-0 pt-10">
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-semibold text-gray-800">Filters</h3>
                    </div>
                    <div className="filter-options">
                        {/* <h4 className="text-lg font-semibold mb-4 text-gray-700">Brands</h4>
                        <div className="flex flex-col space-y-2">
                            {brands.map((brand) => (
                                <label key={brand} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={tempSelectedBrands.includes(brand)}
                                        onChange={() => handleBrandChange(brand)}
                                    />{' '}
                                    {brand}
                                </label>
                            ))}
                        </div> */}
                        <h4 className="text-lg font-semibold mb-4 mt-6 text-gray-700">Price Range</h4>
                        <div className="flex flex-col">
                            <Slider
                                range
                                min={minMaxPrice[0]}
                                max={minMaxPrice[1]}
                                value={priceRange}
                                onChange={handlePriceChange}
                                className="mt-2"
                            />
                            <div className="mt-2 text-sm text-gray-600">
                                Selected range: ₹{priceRange[0]} - ₹{priceRange[1]}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        onClick={applyFilters}
                        className="w-full bg-blue-600 text-white py-2 rounded mb-2 hover:bg-blue-700 transition duration-200">
                        Apply Filters
                    </button>
                    <button
                        onClick={removeAllFilters}
                        className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700 transition duration-200">
                        Remove All Filters
                    </button>
                </div>
            </div>
            <div className="flex-1 p-5 mt-14">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg flex-shrink-0 min-w-[350px] max-w-[350px] overflow-hidden"
                      >
                        {/* Image Placeholder */}
                        <div className="w-full h-64 bg-slate-200 animate-pulse rounded-t-lg"></div>
              
                        {/* Content Placeholder */}
                        <div className="p-4 space-y-3">
                          {/* Title Placeholder */}
                          <div className="h-5 bg-slate-200 animate-pulse rounded-md w-3/4"></div>
              
                          {/* Category Placeholder */}
                          <div className="h-4 bg-slate-200 animate-pulse rounded-md w-1/2"></div>
              
                          {/* Price Placeholder */}
                          <div className="flex items-center justify-between">
                            <div className="h-5 bg-slate-200 animate-pulse rounded-md w-1/3"></div>
                            <div className="h-4 bg-slate-200 animate-pulse rounded-md w-1/4"></div>
                          </div>
              
                          {/* Button Placeholder */}
                          <div className="h-10 bg-slate-200 animate-pulse rounded-md w-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredData.map((product) => (
                            <div
                                key={product.id}
                                className='bg-white rounded-lg shadow-lg flex-shrink-0 min-w-[350px] max-w-[350px]'
                                onClick={() => handleNavigation(product.asin)}>
                                <div className='w-full min-w-[350px] h-64 rounded-t-lg overflow-hidden relative group'>
                                    <img
                                        src={product.imgURL}
                                        alt={product?.data?.product_title}
                                        className='object-cover h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-105'/>
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
                                    <div className="flex items-center mb-2">
                                        <div className="flex relative">
                                            {renderStars(product?.data?.product_star_rating)}
                                        </div>
                                        <p className="text-yellow-500 ml-2">
                                            {product?.data?.product_star_rating
                                                ? `(${product.data.product_star_rating})`
                                                : 'No ratings available'}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {product.data.sales_volume
                                            ? `${product.data.sales_volume}`
                                            : ''}
                                    </p>
                                    <button onClick={(event) => handleAddToCart(product, event)} className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-2 rounded-md transition-colors'>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage3;
