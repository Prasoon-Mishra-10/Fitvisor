import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';
import Modal from './Modal'
import useCameraModal from '../helpers/useCameraModal'
import { GrClose } from 'react-icons/gr'
import { BsCircleFill } from 'react-icons/bs'
import { MdFlipCameraAndroid } from 'react-icons/md'
import Cropper from 'react-easy-crop';
import { DotSpinner } from '@uiball/loaders'
// import { setTimeout } from 'timers/promises';

const CameraModal = () => {

    const { onClose, isOpen } = useCameraModal()
    const [redirect, setRedirect] = useState(false)
    const [cameraIsActive, setCameraIsActive] = useState(false);
    const [capturedImageState, setCapturedImageState] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [facingMode, setFacingMode] = useState('user');
    const [inputValue, setInputValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [cropCompleted, setCropCompleted] = useState(false);
    const [displayCroppedImage, setDisplayCroppedImage] = useState(false);
    const [loading, setloading] = useState(false)

    const webcamRef = useRef(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setShowDropdown(value.length > 0);
    };

    const handleDropdownItemClick = (category) => {
        // Handle the category selection here
        console.log(`Selected category: ${category}`);
        setInputValue(category);
        setShowDropdown(false);
    };
    const onChange = (open) => {
        if (!open) {
            onClose();
        }
    }

    const startCamera = () => {
        setCameraIsActive(true);
    };

    const captureImage = useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc)
        setCameraIsActive(false);
        setCapturedImageState(true)
        setCapturedImage(imageSrc);

    }, []);

    const closeCamera = () => {
        setCameraIsActive(false);
        setCapturedImageState(false)
    };

    const toggleCameraFacingMode = () => {
        setFacingMode((prevFacingMode) =>
            prevFacingMode === 'user' ? 'environment' : 'user'
        );
        // Restart the camera with the new facing mode
        setCameraIsActive(false);
        setCameraIsActive(true)
    };

    const onCropChange = (crop) => {
        setCrop(crop);
    };

    const onZoomChange = (zoom) => {
        setZoom(zoom);
    };

    const onCropComplete = async (_, croppedAreaPixels) => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            const croppedImage = await cropImage(imageSrc, croppedAreaPixels);
            setCapturedImage(croppedImage);
            setCapturedImageState(true)
            setCropCompleted(true);
        }
    };

    const cropImage = async (imageSrc, croppedAreaPixels) => {
        const img = new Image();
        img.src = imageSrc;
        img.crossOrigin = 'anonymous';

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        ctx.drawImage(
            img,
            croppedAreaPixels.x,
            croppedAreaPixels.y,
            croppedAreaPixels.width,
            croppedAreaPixels.height,
            0,
            0,
            croppedAreaPixels.width,
            croppedAreaPixels.height
        );

        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
                resolve(URL.createObjectURL(blob));
            }, 'image/jpeg');
        });
    };

    const continueWithCroppedImage = () => {

        setDisplayCroppedImage(true);
        setCapturedImageState(false)
        setloading(true)

    };

    return (
        <Modal
            isOpen={isOpen}
            onChange={onChange}
        >

            {loading &&

                <div className='flex items-center justify-center h-full w-full absolute z-[100] left-0 top-0'>
                    <DotSpinner
                        size={40}
                        speed={0.9}
                        color="black"
                    />
                </div>}
            {redirect ? (<>{cameraIsActive && (<div className="px-4 h-screen sm:h-auto w-full flex justify-center items-center absolute xl:top-[3%] top-0 left-0 right-0 bottom-0 m-auto">

                <div className='fixed z-[100] p-2 rounded-lg'>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{ facingMode }}
                        className='rounded-lg'
                    />

                    <button onClick={closeCamera} className="absolute top-4 right-4 bg-[#31255e] text-white px-2 py-1 rounded-full hover:bg-[#4a3f75] transition-all duration-300">
                        <GrClose className='text-xl' />
                    </button>

                    <button
                        onClick={captureImage}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#31255e] text-white px-2 py-2 rounded-full hover:bg-[#4a3f75] transition-all duration-300"
                    >
                        <BsCircleFill className='text-3xl' />
                    </button>

                    <button
                        onClick={toggleCameraFacingMode}
                        className="absolute top-4 left-4 bg-[#31255e] text-white px-1 py-1 rounded-full hover:bg-[#4a3f75] transition-all duration-300"
                    >
                        <MdFlipCameraAndroid className='text-3xl' />
                    </button>

                </div>

            </div>)}

                {capturedImageState && !cropCompleted && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-80 h-80 bg-white relative">
                            <Cropper
                                image={capturedImage}
                                crop={crop}
                                zoom={zoom}
                                aspect={1}
                                onCropChange={onCropChange}
                                onCropComplete={onCropComplete}
                                onZoomChange={onZoomChange}
                            />
                            <button
                                onClick={continueWithCroppedImage}
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition-all duration-300"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}


                {cameraIsActive ? (<button onClick={captureImage} className="text-white relative overflow-hidden group z-50 bg-[#31255e] font-medium py-2 rounded-2xl px-12 focus:outline-none text-lg transition-all ease-out duration-300">

                    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-30 rotate-12 group-hover:-translate-x-80 ease"></span>

                    Capture
                </button>) : (<button onClick={startCamera} className="text-white relative overflow-hidden group z-50 bg-[#31255e] font-medium py-2 rounded-2xl px-10 xl:px-20 focus:outline-none text-lg transition-all ease-out duration-300">

                    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-30 rotate-12 group-hover:-translate-x-80 ease"></span>

                    Capture the Ingredients
                </button>)}

            </>) : (
                <div class="w-full text-center">
                    <h2 class="text-2xl font-semibold mb-4 text-[#31255e]">Select your product category</h2>
                    <div class="mx-auto max-w-md">
                        <div class="relative">
                            <form >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#31255e]"
                                    placeholder="Search for a category"
                                    required
                                />
                            </form>
                        </div>

                        {/* <!-- Dropdown container --> */}
                        {showDropdown && (
                            <div className="mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                                {/* Dropdown content goes here */}
                                <ul>
                                    <li className='py-2 font-medium text-lg text-[#31255e] cursor-pointer' onClick={() => handleDropdownItemClick('Health Drink')}>Health Drink</li>
                                    <li className='py-2 font-medium text-lg text-[#31255e] cursor-pointer' onClick={() => handleDropdownItemClick('Noodles')}>Noodles</li>
                                    <li className='py-2 font-medium text-lg text-[#31255e] cursor-pointer' onClick={() => handleDropdownItemClick('Waffers')}>Waffers</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <button onClick={() => { setRedirect(true) }} className="text-white mt-4 relative overflow-hidden group z-50 h-full bg-[#31255e] font-medium py-2 rounded-2xl px-[7.5rem] focus:outline-none text-lg transition-all ease-out duration-300">

                        <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-30 rotate-12 group-hover:-translate-x-80 ease"></span>

                        Continue
                    </button>
                </div>
            )}
        </Modal>
    )
}

export default CameraModal