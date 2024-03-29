import React, { useRef } from 'react'
import logo from "../assets/logo.jpeg"
import { ToastContainer, toast } from 'react-toastify';
import { Link, NavLink } from "react-router-dom"
import sideimage from "../assets/sideimage.jpg"
import { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../definition';

function Login() {


   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

    
   const signIn = async () => {

    if (!email) {
        toast.error("Please Enter email");
    }
    else if (!password) {
        toast.error("Please Enter password");
    } 
    
        
        try {
            let res;
               
                res = await axios.get(
                    `${backendUrl}/api/authentication/authenticate`,{ params: { email: email, password: password } }
                );

                
            if (res.data.SUCCESS == "TRUE") {
                toast.success("Successfully saved!");
                // cancelBtn();
            }
            else {
                toast.error("Something went wrong!");
            }
        } catch (ex) {
            console.log(ex);
        }

    }


    const login = (e) => {
        e.preventDefault();

    }
    // Notify for successful login
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

    //Notify if unsuccessfull error
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
                    <form className='flex flex-col justify-center items-center space-y-5'>

                        {/* Email */}
                        <input
                            style={{
                                fontFamily: 'Medium'
                            }}
                             type="email" placeholder="Email address" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-72'
                            onChange={(event) =>{setEmail(event.target.value)}}
                        
                        />

                        {/* Password */}
                        <input
                            style={{
                                fontFamily: 'Medium'
                            }}
                           type="password" placeholder="Password" className='placeholder:text-gray-600 px-5 py-2  outline-none border border-gray-800 w-72'
                            onChange={(event) => {setPassword(event.target.value)}}
                        />



                        {/* Forgot Password */}
                        <div className='flex justify-between items-center cursor-pointer \'>
                            <h1 className='font-normal text-sm text-right ml-24 text-gray-500'>Forgot your Password?</h1>
                        </div>

                        {/* Sign In */}
                        <div className='flex justify-center items-center w-72 bg-black text-white py-2'>
                            <button type='submit' onClick={signIn}>Sign In</button>
                        </div>

                        {/* Sign Up Link */}
                        <h1 className='text-gray-500'><NavLink to="/signup">Not a member?</NavLink></h1>
                        {/* <h1 className='underline'> <Link to="/signup">Join us</Link></h1> */}
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login