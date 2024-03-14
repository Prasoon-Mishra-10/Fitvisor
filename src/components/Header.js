import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logoM from '../images/logo home.png'
import { BiLogOutCircle } from 'react-icons/bi'
import { AiFillSetting } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { MdLanguage, MdOutlineAccountCircle } from 'react-icons/md'
import Navbar from './Navbar';
/* import noteContext from '../context/noteContext';
 */
const Header = () => {

    const [isOpen, setisOpen] = useState("")
    const [login, setLogin] = useState(false);
    const [name, setName] = useState('');
    const [token, settoken] = useState('');
    const [email, setemail] = useState('');
    const history = useNavigate();
    const fetchData = async () => {
        try {

            if (!localStorage.getItem('token')) {
                return;
            }

            settoken(localStorage.getItem('token'));

            const response = await fetch(`http://localhost:8000/api/auth/userinfo`, {
                method: "GET",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')

                }
            });
            const json = await response.json();
            if (json.success) {
                setLogin(true);
                console.log(json);
                setName(json.user.username)
                setemail(json.user.email);
            }
            else {
                setLogin(false);
            }
            /* console.log(json.user.name); */
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const handleclick = () => {
        localStorage.removeItem('token');
        settoken('');
        history('/');
        setLogin(false);
        alert('signout');
    }

    useEffect(() => {
        fetchData()
    }, [token]);

    return (
        <div>
            <div className='flex items-center justify-between py-6'>

                <div>

                    <img src={logoM} alt="" className='h-16 flex' />

                </div>

                <Navbar />

                <div className='flex gap-x-2 items-center'>

                    {login ? (<div className='sm:relative sm:top-0 sm:left-0 absolute top-[7rem] left-[2rem]'>
                        <h1 className='text-white font-semibold text-xl font-mono '>Hello, there👋</h1>
                    </div>) :
                        <div className='sm:relative top-0 left-0'>
                            <Link to='/login' type="button" class="focus:outline-none text-white bg-[#31255e] hover:bg-[#4c3a8f] font-medium rounded-lg text-md px-5 py-2 mr-2 mb-2">Login</Link>
                        </div>
                    }



                    {login && <MdOutlineAccountCircle className='text-[2.3rem] text-white cursor-pointer' onMouseEnter={() => { setisOpen(true) }} onMouseLeave={() => { setisOpen(false) }} />}

                    {isOpen && <div onMouseEnter={() => { setisOpen(true) }} onMouseLeave={() => { setisOpen(false) }} className='h-auto w-auto absolute z-50 right-4 sm:right-8 md:right-16 lg:right-24 xl:right-32 top-[4.5rem] rounded-md flex flex-col transform transition-all py-2 px-8 justify-center font-semibold text-white text-center' style={{ background: 'linear-gradient(170.42deg, rgba(157, 135, 237, 0.88) 3.29%, rgba(107, 73, 231, 0.95) 125.3%)', boxShadow: '0px 4px 7px 0px #00000040' }}>

                        {token && <h1 className='text-[1.3rem]'>{name}</h1>}

                        {token && <p className='font-light text-gray-200 font-sm'>{email}</p>}


                        <div className='h-[2px] bg-[#31255e]'></div>

                        <div className='flex flex-col gap-y-2 my-2'>

                            {
                                login && <div onClick={handleclick} className='flex items-center hover:underline text-lg gap-x-2 cursor-pointer'>
                                    <BiLogOutCircle className='text-2xl text-[#31255e]' /> Logout
                                </div>
                            }


                            {login && <div className='flex items-center hover:underline text-lg gap-x-2 cursor-pointer'>
                                <MdLanguage className='text-2xl text-[#31255e]' /> Language
                            </div>}

                            {login && <div className='flex items-center hover:underline text-lg gap-x-2 cursor-pointer'>
                                <AiFillSetting className='text-2xl text-[#31255e]' /> Settings
                            </div>}

                        </div>

                    </div>}

                </div>

            </div>
        </div>
    )
}

export default Header