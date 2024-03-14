import React from 'react'
import Header from '../components/Header'

const Content = () => {
    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32'>

            <Header />

            <div>

                <div className='flex flex-col sm:gap-y-1 mt-4 sm:mt-0'>

                    {/* Heading */}
                    <h1 className="text-[#31255e] font-bold text-[2rem] md:text-[2.7rem] tracking-wider text-center sm:px-0 px-4 mb-12 sm:mb-0">
                        Product Report .
                    </h1>


                </div>


                <div className='grid grid-cols-1 gap-6 mx-4 sm:mx-12'>

                    <div className='flex flex-col gap-y-3 p-4 items-center justify-center rounded-lg border'>

                        <h1 className="text-[#31255e] font-bold text-[1.5rem] md:text-[2rem] tracking-wider text-center sm:px-0 px-4  sm:mb-0">
                            Good Products
                        </h1>

                        <div className='flex sm:flex-row flex-col gap-x-16 gap-y-2 pb-28 sm:pb-0'>

                            <div className='flex flex-col gap-y-2'>

                                <p className='text-xl text-[#31255e]'>&rarr; Protein.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Dietary Fibre.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Vitamin D2.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Calcium</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Magnesium.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Iodine</p>

                            </div>

                            <div className='flex flex-col gap-y-2'>

                                <p className='text-xl text-[#31255e]'>&rarr; Iron.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Vitamin A.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Vitamin C.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Vitamin B5.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Vitamin B9.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Vitamin B12.</p>

                            </div>

                        </div>

                    </div>

                    <div className='flex flex-col gap-y-3 p-4 items-center justify-center rounded-lg border'>

                        <h1 className="text-[#31255e] font-bold text-[1.5rem] md:text-[2rem] tracking-wider text-center sm:px-0 px-4 sm:mb-0">
                            Bad Products
                        </h1>

                        <div className='flex sm:flex-row flex-col gap-x-16 gap-y-2 pb-28 sm:pb-0'>

                            <div className='flex flex-col gap-y-2'>

                                <p className='text-xl text-[#31255e]'>&rarr; Carbohydates.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Saturated Fat.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Trans Fat.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Artificial Color.</p>


                            </div>

                            <div className='flex flex-col gap-y-2'>

                                <p className='text-xl text-[#31255e]'>&rarr; Colestoral.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Sodium.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Maltodextrin.</p>
                                <p className='text-xl text-[#31255e]'>&rarr; Emulsifier(322, 471).</p>

                            </div>

                        </div>

                    </div>

                    <h1 className="text-[#31255e] font-bold text-[1rem] md:text-[1.5rem] tracking-wider text-center sm:px-0 px-4 sm:mb-0">
                            <span className='text-[1.3rem] md:text-[2rem]'>8/10</span> . Not consume more than 2 tablespoons a day .
                        </h1>

                </div>


            </div>


        </div>
    )
}

export default Content
