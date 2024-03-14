import React from 'react'
import { useEffect, useState } from "react";
import CameraModal from '../components/CameraModal';

const ModalProvider = () => {
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <CameraModal />
        </>
    )
}

export default ModalProvider