
import { Carousel } from 'react-responsive-carousel';
import Fade, { Slide } from "react-awesome-reveal";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slider1 from '../../assets/home-banner/slider-1.png'
import slider2 from '../../assets/home-banner/slider-2.png'
import slider3 from '../../assets/home-banner/slider-3.png'
import bannerBg from '../../assets/home-banner/banner-bg.png'
import bannerBg2 from '../../assets/home-banner/banner-bg-2.png'
import bannerBg3 from '../../assets/home-banner/banner-bg-3.png'
import { useState } from 'react';

const HomeBanner = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const handleBeforeSlide = (currentSlide, nextSlide) => {
        setActiveSlide(nextSlide);
    };
    return (
        <div>
            <div className="text-3xl">
                <Carousel className='min-h-screen' showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    selectedItem={activeSlide}
                    beforeSlide={handleBeforeSlide}>
                    <div className='lg:flex justify-between items-center bg-amber-50 p-10 rounded-xl' style={{ backgroundImage: `url(${bannerBg})` }}>
                        <div className='lg:w-1/2'>
                            <Slide>
                                <h2>Teddy Bear Story!!!</h2>
                            </Slide>
                            <Fade delay={1e3} cascade damping={1e-1}>
                                <p className='text-base my-4 text-zinc-400'>Morris Michtom, a Brooklyn candy shop owner, saw the cartoon and had an idea. He and his wife Rose also made stuffed animals, and Michtom decided to create a stuffed toy bear and dedicate it to the president who refused to shoot a bear. He called it Teddys Bear</p>
                            </Fade>
                            <Slide direction='up'><button className='btn btn-outline border-2 mt-4'>Read More</button></Slide>
                        </div>
                        <div className='lg:w-1/2 mt-10'>
                            <Slide direction="right">
                                <img src={slider2} alt="" />
                            </Slide>
                        </div>
                    </div>
                    <div className='lg:flex justify-between items-center p-10 bg-amber-50 rounded-xl' style={{ backgroundImage: `url(${bannerBg2})` }}>
                        <div className='lg:w-1/2'>
                            <Slide>
                                <h2>How the Tortoise Got his Crooked Shell</h2>
                            </Slide>
                            <Fade delay={1e3} cascade damping={1e-1}>
                                <p className='text-base my-4 text-zinc-400'>A long time ago, a terrible famine hit an ancient animal kingdom. It had not rained for two whole years and all of the crops were dying. The animals hoped and prayed for an end to the terrible drought, but the sky was no longer able to gather enough clouds, and the rains did not come.</p>
                            </Fade>
                            <Slide direction='up'><button className='btn btn-outline border-2'>Read More</button></Slide>
                        </div>
                        <div className='lg:w-1/2 mt-10'>
                            <Slide direction="right">
                                <img src={slider1} alt="" className='lg:h-[500px]' />
                            </Slide>
                        </div>
                    </div>
                    <div className='lg:flex justify-between items-center p-10 bg-amber-50 rounded-xl' style={{ backgroundImage: `url(${bannerBg3})` }}>
                        <div className='lg:w-1/2'>
                            <Slide>
                                <h2>Rudolph the Red-Nosed Reindeer</h2>
                            </Slide>
                            <Fade delay={1e3} cascade damping={1e-1}>
                                <p className='text-base my-4 text-zinc-400'>The closer we come to Christmas, the more people start to whistle this song when they meet me. My name is Rudolf, so jokes about Rudolph are unavoidable! Especially when I have a cold and my nose is red. I like Rudolph, though, so it is not a problem.
                                    Besides providing a summary of the story of Rudolph the Red-nosed Reindeer, I will also tell you about his history and answer any Rudolph-related questions you might have.</p>
                            </Fade>
                            <Slide direction='up'><button className='btn btn-outline border-2'>Read More</button></Slide>
                        </div>
                        <div className='lg:w-1/2 mt-10'>
                            <Slide direction="right">
                                <img src={slider3} alt="" className='lg:h-[500px]' />
                            </Slide>
                        </div>
                    </div>
                </Carousel>
            </div >
            {/* <Fade>
                <Carousel className='min-h-screen' showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    selectedItem={activeSlide}
                    beforeSlide={handleBeforeSlide}>
                    <Fade>
                        <div>
                            <img src="carousel-image-1.jpg" alt="Slide 1" />
                            <p className="legend">Slide 1</p>
                        </div>
                    </Fade>
                    <Fade>
                        <div>
                            <img src="carousel-image-2.jpg" alt="Slide 2" />
                            <p className="legend">Slide 2</p>
                        </div>
                    </Fade>
                    <Fade>
                        <div>
                            <img src="carousel-image-3.jpg" alt="Slide 3" />
                            <p className="legend">Slide 3</p>
                        </div>
                    </Fade>
                    <div className='flex justify-between items-center'>
                        <div className='w-1/2'>
                            <Fade>
                                <h1>Hello</h1>
                            </Fade>
                        </div>
                        <div className='w-1/2'>
                            <Fade>
                                <img src={banner} alt="" />
                            </Fade>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='w-1/2'>
                            <Fade>
                                <h1>Hello</h1>
                            </Fade>
                        </div>
                        <div className='w-1/2'>
                            <Fade>
                                <img src={banner} alt="" />
                            </Fade>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='w-1/2'>
                            <Fade>
                                <h1>Hello</h1>
                            </Fade>
                        </div>
                        <div className='w-1/2'>
                            <Fade>
                                <img src={banner} alt="" />
                            </Fade>
                        </div>
                    </div>
                </Carousel>
            </Fade> */}
        </div>
    );
};

export default HomeBanner;