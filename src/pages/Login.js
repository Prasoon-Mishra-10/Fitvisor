import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc'
import logo from '../images/logo home.png'

const Login = () => {


    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const { email, password } = credentials;
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/auth/userlogin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            history('/');
            alert('success')
        }
        else {
            alert('fail');

        }

    }

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        // login section
        <div className="h-[100vh] w-[100vw] relative bg-cover overflow-hidden flex justify-center md:justify-start items-center px-0 md:px-10 lg:px-20 xl:px-28">

            <div className="h-auto w-auto bg-clip-padding bg-white bg-opacity-20 backdrop-filter backdrop-blur-[3px] rounded-[2rem] sm:rounded-2xl shadow-xl relative z-2 border-0 pb-4 px-4">

                {/* Logo */}
                <div className='flex items-center justify-center h-28'>

                    <img src={logo} alt='' className='h-[5rem]' />

                </div>

                {/* Heading */}
                <h1 className="text-[#31255e] font-bold text-xl tracking-widest text-center sm:px-0 px-4">
                    Connecting You to Better Health.
                </h1>

                {/* Form */}

                <form onSubmit={handleSubmit} method='POST' className='h-full w-full flex flex-col gap-y-4 items-center px-10 py-4'>

                    {/* Email */}
                    <div className="relative z-0 w-full md:w-[95%] group h-[45px] mt-4">

                        <input value={email} onChange={handleChange} type="email" name="email" id="email" className={`block h-full w-full text-lg rounded-lg text-black border-2 font-medium border-[#31255e] appearance-none focus:outline-none focus:ring-0 focus-within:bg-transparent p-2 peer ${email ? 'bg-transparent' : 'bg-inherit'}`} placeholder=" " required />

                        <label htmlFor="email" className="peer-focus:font-medium absolute font-medium text-base text-white duration-300 transform -translate-y-10 scale-75 left-3 top-3 -z-10 origin-[0] peer-focus:left-3 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 focus:left-3 peer-focus:-translate-y-10">Email</label>

                    </div>

                    {/* Password */}
                    <div className="relative z-0 w-full md:w-[95%] group h-[45px] mt-4">

                        <input value={password} onChange={handleChange} type="password" name="password" id="password" className={`block h-full w-full text-lg rounded-lg text-black border-2 font-medium border-[#31255e] appearance-none focus:outline-none focus:ring-0 focus-within:bg-transparent p-2 peer ${password ? 'bg-transparent' : 'bg-inherit'}`} placeholder=" " required />

                        <label htmlFor="password" className="peer-focus:font-medium absolute font-medium text-base text-white duration-300 transform -translate-y-10 scale-75 left-3 top-3 -z-10 origin-[0] peer-focus:left-3 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 focus:left-3 peer-focus:-translate-y-10">Password</label>

                    </div>

                    {/* Continue */}
                    <button type='Submit' className="text-white relative overflow-hidden group z-50 h-full bg-[#31255e] font-medium py-2 rounded-2xl px-[7.5rem] focus:outline-none text-lg transition-all ease-out duration-300">

                        <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-30 rotate-12 group-hover:-translate-x-80 ease"></span>

                        Continue
                    </button>

                </form>

                <div className='flex gap-x-2 w-full px-10 mb-1 items-center'>
                    <div className='bg-[#31255e] rounded-lg h-[0.015rem] w-[45%]'></div>
                    <div className="text-[#31255e] ">or</div>
                    <div className='bg-[#31255e] rounded-lg h-[0.015rem] w-[45%]'></div>
                </div>

                {/* Google */}
                <div className='flex justify-center'>

                    <button className="text-white overflow-hidden group relative z-50 h-full bg-[#31255e] font-medium py-2 rounded-2xl px-16 focus:outline-none text-md transition-all ease-out border-2 border-[#31255e] duration-300">

                        <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-40 rotate-12 group-hover:-translate-x-80 ease"></span>

                        <span className='relative flex gap-x-2 items-center'>
                            <FcGoogle className='text-3xl' /> Continue with Google
                        </span>

                    </button>

                </div>

                {/* To create account redirect signup */}
                <p className="text-black gap-x-2 flex items-center justify-center font-poppins mt-4 text-sm tracking-widest">
                    Don't have an account? <a href='/signup' className="font-bold text-lg flex items-center justify-center text-[#31255e] hover:underline">Create here</a>
                </p>

            </div>

        </div>
    )
}

export default Login