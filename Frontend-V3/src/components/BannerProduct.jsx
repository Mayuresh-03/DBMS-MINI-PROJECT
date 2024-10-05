import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import image1 from '../assets/banner/img1.webp';
import image2 from '../assets/banner/img2.webp';
import image3 from '../assets/banner/img3.jpg';
import image4 from '../assets/banner/img4.jpg';
import image5 from '../assets/banner/img5.webp';

const BannerProduct = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const desktopImages = [image1, image2, image3, image4, image5];

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage === desktopImages.length - 1 ? 0 : prevImage + 1));
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? desktopImages.length - 1 : prevImage - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <div className="w-full mx-0 px-0 -mt-1"> {/* Removed padding and added negative margin */}
            <div className="h-[10vw] md:h-[40vw] lg:h-[23vw] w-full relative overflow-hidden">
                
                {/* Controls for Previous and Next Image */}
                <div className="absolute z-10 h-full w-full md:flex items-center justify-between hidden">
                    <button 
                        onClick={prevImage} 
                        className="bg-white shadow-md rounded-full p-2 m-2 text-xl text-gray-600 hover:bg-gray-200 transition duration-300">
                        <FaAngleLeft />
                    </button>
                    <button 
                        onClick={nextImage} 
                        className="bg-white shadow-md rounded-full p-2 m-2 text-xl text-gray-600 hover:bg-gray-200 transition duration-300">
                        <FaAngleRight />
                    </button>
                </div>

                {/* Desktop and Tablet Version */}
                <div className="flex h-full w-full overflow-hidden">
                    {
                        desktopImages.map((imageURl, index) => (
                            <div 
                                className="w-full h-full min-w-full transition-all duration-700 ease-in-out" 
                                key={imageURl} 
                                style={{ transform: `translateX(-${currentImage * 100}%)` }}
                            >
                                <img src={imageURl} className="w-full h-full object-cover" alt={`Banner ${index + 1}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BannerProduct;

