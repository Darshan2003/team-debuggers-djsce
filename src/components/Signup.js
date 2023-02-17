import React, { useRef } from 'react'
import logo from "../assets/logo.jpeg"
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom"
import sideimage from "../assets/sideimage.jpg"


function Signup() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);


    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);



    const notifySuccess = () => toast.success('Logged in successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notifyError = () => toast.error('Invalid email or password', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const signUp = (e) => {
        e.preventDefault();

    }

    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div

                style={{
                    fontFamily: 'Medium',

                }}

                className='flex justify-center items-center w-screen h-screen'
            >

                <div className='w-3/4 h-screen'>
                    <img src={sideimage} alt="sideimage" className='h-full w-full object-contain' />
                </div>
                <div className='flex flex-col justify-center items-center w-screen h-[640px] space-y-5'>
                    {/* <img
                        className='object-contain w-28 h-28 cursor-pointer rounded-full border border-black '
                        src={logo} alt="logo" /> */}
                    <h1 className='text-center text-4xl mb-10'>Welcome to the world of information!</h1>
                    <form
                
                        className='flex flex-col justify-center items-center space-y-8'>
                        <div className='flex justify-between items-center w-full space-x-12'>
                            <input
                                style={{
                                    fontFamily: 'Medium'
                                }}
                                ref={firstNameRef} type="text" placeholder="First Name" className='placeholder:text-gray-600 px-4 py-2 outline-none border border-gray-800 w-64'
                            />
                            <input
                                style={{
                                    fontFamily: 'Medium'
                                }}
                                ref={lastNameRef} type="text" placeholder="Last Name" className='placeholder:text-gray-600 px-4 py-2  outline-none border border-gray-800 w-64'
                            />
                        </div>
                        <div className='flex justify-between items-center w-full '>
                            <input
                                style={{
                                    fontFamily: 'Medium'
                                }}
                                ref={emailRef} type="email" placeholder="Email address" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64 '
                            />
                            <input
                                style={{
                                    fontFamily: 'Medium'
                                }}
                                ref={passwordRef} type="password" placeholder="Password" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-64'
                            />
                        </div>

                        <input
                            style={{
                                fontFamily: 'Medium'
                            }}
                            ref={confirmPasswordRef} type="password" placeholder="Confirm Password" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-72'
                        />

                        <div className='flex justify-center items-center w-72 bg-black text-white py-2'>
                            <button type='submit' onClick={signUp}>Sign Up</button>
                        </div>
                        <h1 className='text-gray-500'><Link to="/signup">Already registered?</Link></h1>
                        {/* <h1 className='underline'> <Link to="/signup">Join us</Link></h1> */}
                    </form>
                </div>
            </div>
        </>

    )
}

export default Signup