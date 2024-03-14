import React from 'react'
import HomeCarousel from './HomeCarousel'
import Header from './Header'
import background from '../images/blob-haikei-removebg-preview.png'
import img from '../images/img1 home (2).jpeg'
import circle from '../images/Ellipse 17.png'

const Home = () => {
  return (
    <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32'>
      <Header />

      <div className='mt-32 flex sm:hidden'>

        <div className='w-full h-[100px] rounded-2xl' style={{ background: 'linear-gradient(160.53deg, #CFD4D6 -12.76%, rgba(207, 212, 214, 0.37) 62.38%)', boxShadow: '0px 4px 4px 0px #00000040' }}>

          <div className='absolute m-4 flex flex-col gap-y-3'>
            <h1 className='text-lg'>Scan What you are Eating !!</h1>

            <button className='bg-[#B7A6F2] px-3 py-1 rounded-full font-medium  w-fit' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
              Scan Now
            </button>
          </div>

          <div className='absolute z-50 right-0'>

            <img src={circle} alt="" />

          </div>

        </div>

      </div>

      <div class="flex flex-col items-center justify-center md:flex-row p-4 my-10">
        {/* <!-- Left Side (Image) --> */}
        <div class="md:w-1/2 flex justify-center md:justify-start">
          <img src={img} alt="Fitlight" class="w-full md:w-[75%] h-auto" />
        </div>

        {/* <!-- Right Side (Heading and Paragraph) --> */}
        <div class="md:w-1/2 lg:ml-4 mt-4 md:mt-0">
          <h1 class="text-3xl md:text-[2rem] lg:text-4xl font-semibold mb-16 text-gray-800 sm:text-white tracking-wider ">Elevate Your

            <span className='sm:text-[#31255e] text-gray-600 mr-2'>

              <img src={background} alt="" className='absolute z-[-1] right-20 hidden md:flex' /> Wellness

            </span>

            with Fitlight</h1>

          <p class="text-[17px] lg:text-[22px] sm:text-[#31255e] text-gray-600 font-medium tracking-wide md:leading-6 lg:leading-8">Elevate your well-being with Fitlight: Scan product ingredients, receive harm assessments, and access personalized diet and health mentoring.</p>
        </div>
      </div>

      <HomeCarousel />
    </div>
  )
}

export default Home