import React, { useContext } from 'react'
import { songsData } from '../songs'
import musicgif from '../assets/musicanim.webp';
import { CgPlayTrackPrev } from "react-icons/cg";
import { CgPlayTrackNext } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { dataContext } from '../context/userContext';



function Home() {

    let {
        audioRef,
        playSong,
        pauseSong,
        playingSong,
        setPlayingSong,
        nextSong,
        setIndex,
        index,
        prevSong
    } =useContext(dataContext)
    

    return (
        <div className='w-full h-screen bg-black flex'>

            <div className='md:w-[50%] w-full h-full  flex justify-start items-center pt-[20px] md:pt-[120px] flex-col gap-[30px]'>

                <h1 className='text-white font-semibold text-[20px]'>Now Playing</h1>

                <div className='w-[80%] md:w-[250px] h-[250px] object-fill rounded-md overflow-hidden relative '>
                    <img src={songsData[index].image} alt='' className='w-[100%] h-[100%]'/>
                    <div className='w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center'>
                        <img src={musicgif} alt='' className='w-[55%] h-[30%]' />
                    </div>

                </div>

                <div>
                    <div className='text-white text-[30px] font-bold text-center'>{songsData[index].name} </div>
                    <div className='text-gray-400 text-[18px] text-center'>{songsData[index].singer} </div>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <input type="range" className='appearance-none w-[50%] h-[7px] rounded-md bg-gray-600' id='range' />
                </div>

                <div className='text-white flex justify-center items-center gap-5'>

                    <CgPlayTrackPrev className='w-[28px] h-[28px]  hover:text-gray-600 transition-all cursor-pointer' onClick={()=>prevSong()} />

                    {!playingSong?
                    <div className='w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer ' onClick={()=>playSong()}>
                    <FaPlay className='w-[20px] '/>
                    </div>
                        :
                    <div className='w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer' onClick={()=>pauseSong()}>
                    <FaPause className='w-[20px]' />
                    </div>
                    }

                    <CgPlayTrackNext className='w-[28px] h-[28px]  hover:text-gray-600 transition-all cursor-pointer' onClick={()=>nextSong()} />

                </div>


            </div>

            <div className='w-[50%] h-full bg-slate-700 hidden md:flex'>


            </div>

        </div>
    )
}

export default Home
