import React from 'react'
import home from '../assets/homepage.jpeg'
import { NavLink } from "react-router-dom"
import sports from "../assets/sports_logo.jpeg"
import business from "../assets/business.jpeg"
import entertainment from "../assets/entertainment.jpg"
import politics from "../assets/politics.jpg"
import food from "../assets/food.jpg"
import health from "../assets/health.jpg"
import science from "../assets/science.jpg"
import tech from "../assets/technology.jpg"
import world from "../assets/world.jpg"
import env from "../assets/environment.jpg"
const Article = () => {
    return (
        <div>
            <NavLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="m-3 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </NavLink>

            <div
                style={{
                    fontFamily: 'Medium',
                }}

                className='flex justify-center items-center '
            >
                <div className='mt-24 justify-center items-center space-y-5'>
                    {/* <img
                        className='object-contain w-28 h-28 cursor-pointer rounded-full border border-black '
                        src={logo} alt="logo" /> */}
                    <h1 className='text-center text-4xl mb-10'>Headline</h1>
                    <div className='flex flex-col justify-center items-start space-y-5'>

                        <div className="flex flex-wrap justify-center">
                            <button >
                                <div id="sports" className="block m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm 
                            transform transition duration-500 hover:scale-110 hover:bg-gray-300">
                                    <img
                                        className='w-28 object-contain h-28 cursor-pointer'
                                        src={sports} alt="logo"

                                    />
                                    <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Sports</h5>
                                </div>
                            </button>
                            <button>
                                <div id="business" className="block m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm 
                            transform transition duration-500 hover:scale-110 hover:bg-gray-300">
                                    <img
                                        className='w-28 object-contain w-28 h-28 cursor-pointer'
                                        src={business} alt="logo" />
                                    <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Business</h5>
                                </div>
                            </button>
                            <button>
                                <div id="entertainment" className="block m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm 
                            transform transition duration-500 hover:scale-110 hover:bg-gray-300">
                                    <img
                                        className='w-28 object-contain w-28 h-28 cursor-pointer'
                                        src={entertainment} alt="logo" />
                                    <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Entertainment</h5>
                                </div>
                            </button>
                            <button>
                                <div id="politics" className="block m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm 
                            transform transition duration-500 hover:scale-110 hover:bg-gray-300">
                                    <img
                                        className='w-28 object-contain w-28 h-28 cursor-pointer'
                                        src={politics} alt="logo" />
                                    <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Politics</h5>
                                </div>
                            </button>
                            <button>
                                <div id="food" className="block m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm 
                            transform transition duration-500 hover:scale-110 hover:bg-gray-300">
                                    <img
                                        className='w-28 object-contain w-28 h-28 cursor-pointer'
                                        src={food} alt="logo" />
                                    <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Food</h5>
                                </div>
                            </button>
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <button>
                                <div id="health" className="block m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm 
                            transform transition duration-500 hover:scale-110 hover:bg-gray-300">
                                    <img
                                        className='w-28 object-contain w-28 h-28 cursor-pointer'
                                        src={health} alt="logo" />
                                    <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Health</h5>
                                </div>
                            </button>
                            <button>
                                <div id="science" className="block m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm 
                            transform transition duration-500 hover:scale-110 hover:bg-gray-300">
                                    <img
                                        className='w-28 object-contain w-28 h-28 cursor-pointer '
                                        src={science} alt="logo" />
                                    <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Science</h5>
                                </div>
                            </button>
                            <button>
                                <div id="tech" className="block m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm 
                            transform transition duration-500 hover:scale-110 hover:bg-gray-300">
                                    <img
                                        className='w-28 object-contain w-28 h-28 cursor-pointer'
                                        src={tech} alt="logo" />
                                    <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Technology</h5>
                                </div>
                            </button>
                            <button>
                                <div id="world" className="block m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm 
                            transform transition duration-500 hover:scale-110 hover:bg-gray-300">
                                    <img
                                        className='w-28 object-contain w-28 h-28 cursor-pointer'
                                        src={world} alt="logo" />
                                    <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">World</h5>
                                </div>
                            </button>
                            <button>
                                <div id="env" className="block m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm 
                            transform transition duration-500 hover:scale-110 hover:bg-gray-300">
                                    <img
                                        className='w-28 object-contain h-28 cursor-pointer'
                                        src={env} alt="logo" />
                                    <h5 className="text-gray-900 mt-3 text-xl leading-tight font-medium mb-2">Environment</h5>
                                </div>
                            </button>
                        </div>




                        {/* Sign Up Link */}
                        {/* <h1 className='text-gray-500'><Link to="/signup">Not a member?</Link></h1> */}
                        {/* <h1 className='underline'> <Link to="/signup">Join us</Link></h1> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article