import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cover from '../../assets/gallery-bg.jpg'
import one from '../../assets/product-gallery/one.png'
import two from '../../assets/product-gallery/two.png'
import three from '../../assets/product-gallery/three.png'
import four from '../../assets/product-gallery/four.png'
import five from '../../assets/product-gallery/five.png'
import six from '../../assets/product-gallery/six.png'
import seven from '../../assets/product-gallery/seven.png'
import eight from '../../assets/product-gallery/eight.png'
import nine from '../../assets/product-gallery/nine.png'
import ten from '../../assets/product-gallery/ten.png'
import eleven from '../../assets/product-gallery/eleven.png'
import twelve from '../../assets/product-gallery/twelve.png'
import thirteen from '../../assets/product-gallery/thirteen.png'
import fourteen from '../../assets/product-gallery/fourteen.png'
import fifteen from '../../assets/product-gallery/fifteen.png'
import sixteen from '../../assets/product-gallery/sixteen.png'
import seventeen from '../../assets/product-gallery/seventeen.png'
import eighteen from '../../assets/product-gallery/eighteen.png'

const Gallery = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (

        <div className="w-10/12 mx-auto relative">
            <div className="p-6 lg:p-20 text-center hero-overlay" style={{ backgroundImage: `url(${cover})` }}>
                <h1 className="text-4xl text-gray-800">Check Out Gallery</h1>
                <p className="text-lg font-light mt-2 mb-10 ">Your photos are automatically organized and searchable so you can easily find the photo you are looking for.</p>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="fade-up"><img src={one} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="fade-down"><img src={two} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="fade-right"><img src={three} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="fade-left"><img src={four} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="fade-up-right"><img src={five} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="fade-up-left"><img src={six} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="fade-down-right"><img src={seven} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="fade-down-left"><img src={eight} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="flip-left"><img src={nine} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="flip-right"><img src={ten} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="flip-up"><img src={eleven} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="flip-down"><img src={twelve} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="zoom-in"><img src={thirteen} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="zoom-in-up"><img src={fourteen} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="zoom-in-down"><img src={fifteen} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="zoom-in-left"><img src={sixteen} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="zoom-in-right"><img src={seventeen} alt="" className="h-48 w-full object-contain" /></span>
                    <span className="bg-opacity-90 backdrop-filter rounded-md backdrop-blur-3xl hover:shadow-xl hover:backdrop-blur-3xl p-4" data-aos="zoom-out"><img src={eighteen} alt="" className="h-48 w-full object-contain" /></span>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
