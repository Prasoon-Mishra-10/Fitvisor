import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Demo() {

    const [value, setValue] = useState();
    const navigate = useNavigate();
    const handleRoom = useCallback(() => {
        navigate(`/demo/room/${value}`)
    }, [navigate, value]);

    return (
        <div>
            <input placeholder='Enter code' type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
            <button onClick={handleRoom}>Submit</button>
        </div>
    )
}
