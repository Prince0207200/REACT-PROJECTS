import React from 'react'
import { songsData } from '../songs'
import musicgif from '../assets/musicanim.webp';


function Home() {
    return (
        <div className='w-full h-screen bg-black flex'>

            <div className='md:w-[50%] w-full h-full  flex justify-start items-center pt-[20px] md:pt-[120px] flex-col gap-[30px]'>

                <h1 className='text-white font-semibold text-[20px]'>Now Playing</h1>
                <div className='w-[80%] md:w-[250px] h-[300px] object-fill rounded-md overflow-hidden relative '>
                    <img src={songsData[0].image} alt='' />
                    <div className='w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center'>
                        <img src={musicgif} alt='' className='w-[55%] h-[30%]' />
                    </div>

                </div>
                <div>
                    <div className='text-white text-[30px] font-bold text-center'>{songsData[0].name} </div>
                    <div className='text-gray-400 text-[18px] text-center'>{songsData[0].singer} </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <input type="range" className='appearance-none w-[50%] h-[7px] rounded-md bg-gray-600' id='range' />
                </div>


            </div>
            <div className='w-[50%] h-full bg-slate-700 hidden md:flex'>


            </div>

        </div>
    )
}

export default Home
