import React from 'react'
import { SlLike } from 'react-icons/sl'
import { FaShareAlt } from 'react-icons/fa'
import { BiSolidCommentCheck } from 'react-icons/bi'
import profile from '../images/Ellipse 31.png'
const HealthVideo = ({ videoData }) => {
    return (
        <>
            {videoData.map((video) => {
                return (
                    <div className="relative my-10" key={video.id}>
                        <iframe
                            className="w-full h-[30rem]"
                            src={video.videoUrl}
                            title={video.title}
                            allowFullScreen
                        ></iframe>
                        <div className="absolute bottom-0 left-0 py-4 px-2 md:px-16 lg:px-24 w-full bg-black bg-opacity-50 flex justify-between">
                            <div className='flex flex-col gap-y-2'>
                                <div class="flex items-center gap-x-2">

                                    {/* <!-- Image --> */}
                                    <img src={profile} alt="Profile Image" class="w-16 h-16 rounded-full" />

                                    <p className="text-white text-sm">Emma</p>

                                    <button className="bg-white rounded-full text-black py-1 px-2 h-fit w-fit text-sm">Follow</button>

                                </div>
                                <h2 className="text-white text-xl font-semibold">{videoData.title}</h2>
                                <p className="text-white text-sm">{videoData.description}</p>
                            </div>

                            <div className="flex flex-col gap-y-4 justify-end mt-2">
                                <button className="text-white mr-2">
                                    <i className="fas fa-thumbs-up"></i> <SlLike className='text-xl' />
                                </button>
                                <button className="text-white mr-2">
                                    <i className="fas fa-share"></i> <FaShareAlt className='text-xl' />
                                </button>
                                <button className="text-white">
                                    <i className="fas fa-comment"></i> <BiSolidCommentCheck className='text-xl' />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>    
    )
}

export default HealthVideo