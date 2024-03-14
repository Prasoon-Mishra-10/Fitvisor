import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/Image carousel 1.jpg'
import img2 from '../images/image carousel 2.jpg'
import img3 from '../images/image carousel 3.jpg'
import img4 from '../images/image carousel 4.jpg'
import img5 from '../images/image carousel 5.jpg'
import { BiArrowBack } from 'react-icons/bi'
const HomeCarousel = () => {
    return (

        <>

            {/* desktop */}
            <div className='hidden sm:flex mt-8 pb-24'>
                <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    emulateTouch={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={500}
                    showStatus={false}

                    renderArrowPrev={(clickHandler, hasPrev) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[160px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="text-4xl text-[#31255e] font-bold" />
                        </div>
                    )}

                    renderArrowNext={(clickHandler, hasNext) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[100px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="rotate-180 text-4xl text-[#31255e] font-bold" />
                        </div>
                    )}
                >
                    <div>
                        <img src={img1} alt='' className='rounded-lg cursor-pointer' />

                        <div className='w-full h-full absolute flex items-center justify-end top-0'>
                            <p className='sm:mr-6 lg:mr-28 text-[1.3rem] lg:text-[1.6rem] sm:leading-10 lg:leading-[3rem] w-full sm:w-2/3 lg:w-1/2 text-[#31255e]'><span className='text-[3rem] font-bold'>Fitlight </span> illuminates your path to holistic wellness: Discover ingredients, assess their impact, and unite with gyms. Empower your journey to a healthier, more informed lifestyle with Fitlight.</p>
                        </div>
                    </div>
                    <div>
                        <img src={img2} alt='' className='rounded-lg cursor-pointer' />

                        <div className='w-full h-full absolute flex items-center justify-end top-0'>
                            <p className='sm:mr-6 lg:mr-16 text-[1.3rem] lg:text-[1.6rem] sm:leading-10 lg:leading-[3rem] w-full sm:w-2/3 lg:w-1/2 text-gray-200'><span className='text-[3rem] font-bold'>Unveil </span> ingredients, gain health mastery, and unite with gyms. Elevate your wellness journey with knowledge, guidance, and community.</p>
                        </div>
                    </div>
                    <div>
                        <img src={img3} alt='' className='rounded-lg cursor-pointer' />

                        <div className='w-full h-full absolute flex items-center justify-end top-0'>
                            <p className='mr-16 mt-20 text-[1.3rem] lg:text-[1.6rem] sm:leading-10 lg:leading-[3rem] w-full sm:w-3/4 lg:w-1/2 text-[#31255e]'><span className='text-[3rem] font-bold'>Nourish </span> your body, mind, and soul with Fitlight: Scan ingredients, gain health insights, and connect with gyms for a holistic journey to wellness. </p>
                        </div>
                    </div>
                    <div>
                        <img src={img4} alt='' className='rounded-lg cursor-pointer h-[30.2rem] object-cover w-full' />

                        <div className='w-full h-full absolute flex items-center justify-center top-0'>
                            <p className=' text-[1.3rem] lg:text-[1.6rem] sm:leading-10 lg:leading-[3rem] w-full sm:w-3/4 lg:w-2/3 text-gray-200'><span className='text-[3rem] font-bold'>Fitlight </span> Where knowledge meets well-being. Decode ingredients, embrace mentorship, and connect with gyms. Empower your journey to a healthier, informed, and active lifestyle.</p>
                        </div>
                    </div>
                    <div>
                        <img src={img5} alt='' className='rounded-lg cursor-pointer h-[30.2rem] object-cover w-full' />

                        <div className='w-full h-full absolute flex items-end justify-center top-0'>
                            <p className='text-[1.3rem] lg:text-[1.6rem] sm:leading-10 lg:leading-[3rem] w-full sm:w-3/4 lg:w-2/3 md:mb-12 lg:mb-8 text-[#31255e]'><span className='text-[3rem] font-bold'>Fitlight </span> guides you on a wellness voyage: Ingredients unveiled, health wisdom shared, and gyms linked—chart a course to a vibrant, empowered life.</p>
                        </div>
                    </div>
                </Carousel>
            </div>

            {/* mobile */}
            <div className='sm:hidden flex my-8'>
                <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    emulateTouch={true}
                    // autoPlay={true}
                    interval={3000}
                    transitionTime={500}
                    showStatus={false}

                    renderArrowPrev={(clickHandler, hasPrev) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[160px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="text-4xl text-[#31255e] font-bold" />
                        </div>
                    )}

                    renderArrowNext={(clickHandler, hasNext) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[100px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="rotate-180 text-4xl text-[#31255e] font-bold" />
                        </div>
                    )}
                >
                    <div>
                        <img src={img1} alt='' className='rounded-lg cursor-pointer h-[15rem]' />

                        <div className='w-full h-full absolute flex items-center justify-end top-0'>
                            <p className='text-[1rem] w-2/3 mr-2 text-[#31255e]'><span className='text-[1rem] font-bold'>Fitlight </span> illuminates your path to holistic wellness: Discover ingredients, assess their impact, and unite with gyms. </p>
                        </div>
                    </div>
                    <div>
                        <img src={img2} alt='' className='rounded-lg cursor-pointer h-[15rem]' />

                        <div className='w-full h-full absolute flex items-center justify-end top-0'>
                            <p className='mr-1 text-[1rem] w-2/3 text-gray-200'><span className='text-[1rem] font-bold'>Unveil </span> ingredients, gain health, and unite with gyms. Elevate your wellness journey .</p>
                        </div>
                    </div>
                    <div>
                        <img src={img3} alt='' className='rounded-lg cursor-pointer h-[15rem]' />

                        <div className='w-full h-full absolute flex items-center justify-end top-0'>
                            <p className='mt-12 text-[0.8rem] w-3/4 text-[#31255e]'><span className='text-[1rem] font-bold'>Nourish </span> your body, mind, and soul with Fitlight: Scan ingredients, gain health insights, and connect with gyms for a holistic. </p>
                        </div>
                    </div>
                    <div>
                        <img src={img4} alt='' className='rounded-lg cursor-pointer h-[15rem] object-cover w-full' />

                        <div className='w-full h-full absolute flex items-center justify-center top-0'>
                            <p className=' text-[0.8rem] w-[90%] text-gray-200'><span className='text-[1.2rem] font-bold'>Fitlight </span> Where knowledge meets well-being. Empower your journey to a healthier, informed, and active lifestyle.</p>
                        </div>
                    </div>
                    <div>
                        <img src={img5} alt='' className='rounded-lg cursor-pointer object-cover w-full h-[15rem]' />

                        <div className='w-full h-full absolute flex items-end justify-center top-0'>
                            <p className='text-[0.8rem] text-[#31255e] w-[90%] mb-6'><span className='text-[1rem] font-bold'>Fitlight </span> guides you on a wellness voyage: Ingredients unveiled, health wisdom shared, and gyms, empowered life.</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default HomeCarousel