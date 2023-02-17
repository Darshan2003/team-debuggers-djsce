import React, { useEffect, useState } from 'react'
import env from "react-dotenv";

function First({ desc, headline }) {
    useEffect(() => {
        //  if (typeof screen.orientation !== 'undefined') { console.log(screen.orientation) }
    })

    // async function fetchImage() {
    //     // let response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.CLIENT_ID}`);
    //     let response = await fetch(`https://api.unsplash.com/search/photos?query=london&client_id=${process.env.CLIENT_ID}`);
    //     let res = await response.json();
    //     console.log(res);

    // }

    // fetchImage();
    const [displayText, setDisplayText] = useState(false);

    return (
        <div className='max-h-screen max-w-screen min-h-screen min-w-screen'>
            <div className='rounded-lg text-center flex justify-center items-center w-full '>

                <img src="data:image/jpeg;base64,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" alt="1"
                    className='w-full h-full mt-10 ml-10 mr-10 mb-10 rounded-lg object-contain'
                />
            </div>
            <h1 style={{
                fontFamily: 'Medium'
            }} className='w-full text-left pl-8 pr-8 whitespace-normal text-gray-900' >{headline}</h1>
            <div style={{
                fontFamily: 'Light'
            }} className='w-full text-left pl-8 pr-8 whitespace-normal text-gray-600 '>

                {
                    displayText ?
                        <p className='text-gray-800'>
                            {desc}
                        </p>
                        :
                        <p className=''>
                            {desc.slice(0, 100)}<p className='text-blue-600 font-bold cursor-pointer' onClick={() => setDisplayText(true)}>Read More</p>
                        </p>
                }
            </div>
            {/* {
                detectMob() ?
                    <h1>tu website pe hai</h1> :
                    <h1>tu mobile pe hia</h1>
            } */}

        </div>
    )
}

export default First