import React from "react";
import {useNavigate} from 'react-router-dom';
export default function Navbar () {
    const navigate = useNavigate();
    return (
        <>
            <input type='button' onClick={() => navigate("/feature")} value='Feature 1' />
            <input type='button' onClick={() => navigate("/bootstrap1")} value='Bootstrap 1' />
            <input type='button' onClick={() => navigate("/bootstrap2")} value='Bootstrap 2' />
            <input type='button' onClick={() => navigate("/bootstrap3")} value='Bootstrap 3' />
        </>
    )
}