import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Define a map of colors for different categories
const categoryColors = () => {
   
};



const SideBar = ({ items, isVisible, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(items.slice(0, 11)); // Limit to 11 logos
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/category/?category=${category}`);
        onClose(); // Close the sidebar after navigation
    };

    return (
        <>
            {isVisible && (
                <>
                    {/* Background Blur and Overlay */}
                    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10 rounded-br-xl"/>
                    <div className="fixed top-16 left-0 w-[300px] mt-2 h-full bg-black shadow-lg transition-all duration-300 z-20 border-black">
                    <div className="p-4 bg-cyan-500 text-black font-bold text-center relative">
                    <h1>CATEGORIES</h1>
                    <button onClick={onClose} className="absolute top-2 right-2 text-white">X</button>
                    </div>

                        <div className="p-4 grid grid-cols-2 gap-4 justify-items-center">
                            {data.map((product, index) => (
                                <div
                                    key={product.id}
                                    className={`flex flex-col items-center cursor-pointer ${
                                        index === 10 ? "col-span-2" : ""
                                    }`} // Center the last item (index 10)
                                    onClick={() => handleCategoryClick(product.category)}
                                >
                                    <div
                                        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-xl ${
                                            categoryColors[product.category] || "bg-white"
                                        }`} // Apply category-specific background color
                                    >
                                        <img src={product.productImage} alt={product.category} className="w-10 h-10 object-cover" />
                                    </div>
                                    <p className="text-center text-xs mt-1 text-white">{product.category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default SideBar;
