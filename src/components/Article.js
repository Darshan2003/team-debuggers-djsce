import React from 'react'
import { NavLink } from "react-router-dom"
import news1 from "../assets/news1.jpeg"

const Article = ({ headline, image, desc }) => {
    return (
        <div>
            <NavLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="m-3 w-6 h-6 fixed">
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
                    <h1 className='text-center text-4xl mb-10'>
                        "Murder Of Democracy": Uddhav Thackeray On Losing Shiv Sena Name, Symbol"
                    </h1>
                    <div className='flex flex-col justify-center items-center space-y-5'>
                        <div className="flex flex-wrap justify-center">
                            <div className="block  p-6 rounded-lg shadow-lg bg-white justify-center">
                                <img
                                    className='sm:w-50 md:w-75 lg:w-100 object-contain h-100 mx-auto cursor-pointer'
                                    src={news1} alt="logo"
                                />
                                <p className="text-black  text-md leading-tight font-light mt-5 sm:mx-5 md:mx-10 lg:mx-20">
                                    Mumbai: Former Maharashtra Chief Minister Uddhav Thackeray launched a strong attack on his rival Eknath Shinde,
                                    calling him a "traitor who won't change", after the Election Commission today allowed Team Shinde to keep the
                                    Shiv Sena name and the party's bow and arrow symbol. The Election Commission's decision comes nearly eight months
                                    after Mr Shinde, the current Chief Minister, revolted with over 40 Sena MLAs and wrested control of the party from
                                    Mr Thackeray's alliance government with the Congress and the Nationalist Congress Party.
                                </p>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article