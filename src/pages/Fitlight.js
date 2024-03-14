import React from 'react'
import Header from '../components/Header'
import HealthVideo from '../components/HealthVideo'
import video1 from '../images/148208 (1080p).mp4'
import video2 from '../images/exercise_-_32937 (1080p).mp4'
import video3 from '../images/exercise_-_32934 (1080p).mp4'
const Fitlight = () => {
  const videoData = [
    {
      id: 1,
      videoUrl: video1,
      title: 'Healthy Living Tips',
      description: 'Learn about essential tips for a healthy lifestyle.',
    },
    {
      id: 2,
      videoUrl: video2,
      title: 'Healthy Living Tips',
      description: 'Learn about essential tips for a healthy lifestyle.',
    },
    {
      id: 3,
      videoUrl: video3,
      title: 'Healthy Living Tips',
      description: 'Learn about essential tips for a healthy lifestyle.',
    },
  ];
  return (
    <div>
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32'>
        <Header />
      </div>

      <div className='flex flex-col gap-y-1'>


        <div className='flex flex-col sm:gap-y-1 mt-4 sm:mt-0'>

          {/* Heading */}
          <h1 className="text-[#31255e] font-bold text-[2.5rem] md:text-5xl tracking-wider text-center sm:px-0 px-4 mb-12 sm:mb-0">
            FitLight.
          </h1>
          {/* Heading */}
          <h1 className="text-gray-600 sm:text-gray-200 font-bold text-lg md:text-xl tracking-widest text-center sm:px-0 px-4">
            Creating awareness with Health related contents by experts.
          </h1>

        </div>

      </div>

      <div className="container mx-auto mt-5 pb-20 overflow-y-scroll no-scrollbar h-[40rem]">

        <HealthVideo videoData={videoData} />

      </div>
    </div>
  )
}

export default Fitlight