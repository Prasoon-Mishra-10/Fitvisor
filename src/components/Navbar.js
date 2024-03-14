import React from 'react';
import { HiHome } from 'react-icons/hi2'
import { MdVerified } from 'react-icons/md'
import { TfiVideoClapper } from 'react-icons/tfi'
import { BiQrScan } from 'react-icons/bi'
import { FaUserPlus } from 'react-icons/fa'
import useCameraModal from '../helpers/useCameraModal';

const Navbar = () => {

  const cameraModal = useCameraModal()

  // When user clicks on scan button this function runs

  const handleCamera = () => {
    return cameraModal.onOpen()
  }
  return (

    <>

      {/* Desktop Navbar */}

      <nav className='sm:flex flex-col bg-[#8160fb] items-center gap-y-4 fixed h-max bottom-0 mt-auto z-50 top-0 left-0 w-full py-4 md:px-0 px-2 hidden' >

        <div className='flex w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 items-center justify-between px-8 md:px-16 h-[60px] sm:h-[60px] py-6 sm:bg-white/20 backdrop-blur-sm backdrop-filter text-3xl xl:text-xl rounded-full' style={{ background: 'linear-gradient(178.28deg, #B7A6F2 1.46%, #8160FB 195.63%)' }}>

          {/* home */}

          <a href='/' className={`relative flex flex-col items-center group hover:text-accent transition-all duration-300`} >

            <div className='absolute bottom-[50px] hidden xl:group-hover:flex'>

              <div className='bg-[#31255e] relative flex text-white items-center p-[6px] rounded-[3px]'>

                <div className='text-[14px] leading-none font-semibold capitalize'>home</div>

                <div className='border-solid border-l-[#31255e] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute bottom-[-10px] left-2 rotate-90'></div>

              </div>

            </div>

            <div className='text-[1.5rem] sm:text-[2.1rem] text-[#31255e]'>
              <HiHome />
            </div>

          </a>

          {/* nutrionist */}

          <a href='/nutrionist' className={`relative flex flex-col items-center group hover:text-accent transition-all duration-300`} >

            <div className='absolute bottom-[50px] hidden xl:group-hover:flex'>

              <div className='bg-[#31255e] relative flex text-white items-center p-[6px] rounded-[3px]'>

                <div className='text-[14px] leading-none font-semibold capitalize'>nutrionist</div>

                <div className='border-solid border-l-[#31255e] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute bottom-[-10px] left-2 rotate-90'></div>

              </div>

            </div>

            <div className='text-[1.5rem] sm:text-[2.1rem] text-[#31255e]'>
              <FaUserPlus />
            </div>

          </a>

          {/* Scan */}

          <div className={`cursor-pointer relative flex flex-col items-center group hover:text-accent transition-all duration-300`} >

            <div className='absolute bottom-[50px] hidden xl:group-hover:flex'>

              <div className='bg-[#31255e] relative flex text-white items-center p-[6px] rounded-[3px]'>

                <div className='text-[14px] leading-none font-semibold capitalize'>Scan</div>

                <div className='border-solid border-l-[#31255e] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute bottom-[-10px] left-2 rotate-90'></div>

              </div>

            </div>

            <div className='text-[#31255e]'>

              <BiQrScan onClick={handleCamera} className='text-[3rem]' />

            </div>


          </div>


          {/* fitlight */}

          <a href='/fitlight' className={`relative flex flex-col items-center group hover:text-accent transition-all duration-300`} >

            <div className='absolute bottom-[50px] hidden xl:group-hover:flex'>

              <div className='bg-[#31255e] relative flex text-white items-center p-[6px] rounded-[3px]'>

                <div className='text-[14px] leading-none font-semibold capitalize'>fitlight</div>

                <div className='border-solid border-l-[#31255e] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute bottom-[-10px] left-2 rotate-90'></div>

              </div>

            </div>

            <div className='text-[1.5rem] sm:text-[2.1rem] text-[#31255e]'>
              <TfiVideoClapper />
            </div>

          </a>

          {/* membership */}

          <a href='/membership' className={`relative flex flex-col items-center group hover:text-accent transition-all duration-300`} >

            <div className='absolute bottom-[50px] hidden xl:group-hover:flex'>

              <div className='bg-[#31255e] relative flex text-white items-center p-[6px] rounded-[3px]'>

                <div className='text-[14px] leading-none font-semibold capitalize'>membership</div>

                <div className='border-solid border-l-[#31255e] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute bottom-[-10px] left-2 rotate-90'></div>

              </div>

            </div>

            <div className='text-[1.5rem] sm:text-[2.1rem] text-[#31255e]'>
              <MdVerified />
            </div>

          </a>

        </div>


      </nav>

      {/* Mobile Navbar */}

      <nav className='sm:hidden flex-col items-center gap-y-4 fixed h-max bottom-4 mt-auto z-50 top-0 left-0 w-full md:px-0 px-2 flex'>

        <div className='flex w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 items-center justify-between px-8 md:px-16 h-[60px] sm:h-[60px] py-6 sm:bg-white/20 backdrop-blur-sm backdrop-filter text-3xl xl:text-xl rounded-full' style={{ background: 'linear-gradient(178.28deg, #B7A6F2 1.46%, #8160FB 195.63%)' }}>

          <div className='flex gap-x-12'>

            {/* home */}

            <a href='/' className={`relative flex flex-col items-center group hover:text-accent transition-all duration-300`} >

              <div className='absolute bottom-[50px] hidden xl:group-hover:flex'>

                <div className='bg-[#31255e] relative flex text-white items-center p-[6px] rounded-[3px]'>

                  <div className='text-[14px] leading-none font-semibold capitalize'>home</div>

                  <div className='border-solid border-l-[#31255e] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute bottom-[-10px] left-2 rotate-90'></div>

                </div>

              </div>

              <div className='text-[1.5rem] sm:text-[2.1rem] text-[#31255e]'>
                <HiHome />
              </div>

            </a>

            {/* nutrionist */}

            <a href='/nutrionist' className={`relative flex flex-col items-center group hover:text-accent transition-all duration-300`} >

              <div className='absolute bottom-[50px] hidden xl:group-hover:flex'>

                <div className='bg-[#31255e] relative flex text-white items-center p-[6px] rounded-[3px]'>

                  <div className='text-[14px] leading-none font-semibold capitalize'>nutrionist</div>

                  <div className='border-solid border-l-[#31255e] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute bottom-[-10px] left-2 rotate-90'></div>

                </div>

              </div>

              <div className='text-[1.5rem] sm:text-[2.1rem] text-[#31255e]'>
                <FaUserPlus />
              </div>

            </a>

          </div>

          {/* Scan */}

          <div className='flex items-center justify-center absolute w-full left-0'>

            <div className={`bg-white w-[4rem] h-[4rem] rounded-[50%] absolute -bottom-2 justify-center cursor-pointer flex flex-col items-center group hover:text-accent transition-all duration-300`} >

              <div className='absolute bottom-[50px] hidden xl:group-hover:flex'>

                <div className='bg-[#31255e] relative flex text-white items-center p-[6px] rounded-[3px]'>

                  <div className='text-[14px] leading-none font-semibold capitalize'>Scan</div>

                  <div className='border-solid border-l-[#31255e] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute bottom-[-10px] left-2 rotate-90'></div>

                </div>

              </div>

              <div className='text-[1.5rem] sm:text-[2.1rem] text-[#31255e]'>

                <BiQrScan onClick={handleCamera} className='text-[2.7rem] sm:text-[2.3rem]' />

              </div>

            </div>

          </div>

          <div className='flex gap-x-12'>

            {/* fitlight */}

            <a href='/fitlight' className={`relative flex flex-col items-center group hover:text-accent transition-all duration-300`} >

              <div className='absolute bottom-[50px] hidden xl:group-hover:flex'>

                <div className='bg-[#31255e] relative flex text-white items-center p-[6px] rounded-[3px]'>

                  <div className='text-[14px] leading-none font-semibold capitalize'>fitlight</div>

                  <div className='border-solid border-l-[#31255e] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute bottom-[-10px] left-2 rotate-90'></div>

                </div>

              </div>

              <div className='text-[1.5rem] sm:text-[2.1rem] text-[#31255e]'>
                <TfiVideoClapper />
              </div>

            </a>

            {/* membership */}

            <a href='/nutrionist' className={`relative flex flex-col items-center group hover:text-accent transition-all duration-300`} >

              <div className='absolute bottom-[50px] hidden xl:group-hover:flex'>

                <div className='bg-[#31255e] relative flex text-white items-center p-[6px] rounded-[3px]'>

                  <div className='text-[14px] leading-none font-semibold capitalize'>membership</div>

                  <div className='border-solid border-l-[#31255e] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute bottom-[-10px] left-2 rotate-90'></div>

                </div>

              </div>

              <div className='text-[1.5rem] sm:text-[2.1rem] text-[#31255e]'>
                <MdVerified />
              </div>

            </a>

          </div>

        </div>


      </nav>

    </>

  )
}

export default Navbar