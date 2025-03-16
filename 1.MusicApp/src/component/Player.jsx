import React, { useContext } from 'react'
import { songsData } from '../songs'
import { dataContext } from '../context/UsContext'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

function Player() {
    let {playingSong,playSong,pauseSong,index} =useContext(dataContext)
    return (
        <div className='w-[100%] md:w-[60%] h-[100px] bg-white fixed bottom-[50px] md:bottom-0 rounded-t-[30px] shadow-lg pt-[8px] flex md:items-center md:p-[10px]'>
            <div className='flex justify-start items-start gap-[20px] w-[78%] h-full cursor-pointer pl-[30px] ' >
                <div>
                    <img src={songsData[index].image} alt="" className=' w-[60px] max-h-[60px] md:max-h-[80px] md:w-[80px] rounded-lg object-fill ' />
                </div>
                <div className='text-[15px] md:text-[20px]'>
                    <div className='text-black text-[1.3em] font-semibold '>
                        {songsData[index].name}
                    </div>
                    <div className='text-gray-800 text-[0.8em] font-semibold '>
                        {songsData[index].singer}
                    </div>

                </div>
            </div>
            <div className='w-[22%] h-[100%] md:flex justify-center items-center'>
            {!playingSong ?
                <div className='w-[44px] h-[44px]  rounded-full  bg-black text-white flex justify-center items-center hover:bg-gray-800 transition-all cursor-pointer ' onTouchEnd={(e) => e.target.style.backgroundColor = "black"} onClick={() => playSong()}>
                    <FaPlay className='w-[20px] ' />
                </div>
                :
                <div className='w-[44px] h-[44px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-800 transition-all cursor-pointer' onTouchEnd={(e) => e.target.style.backgroundColor = "black"} onClick={() => pauseSong()}>
                    <FaPause className='w-[20px]' />
                </div>
            }
            </div>
        </div>
    )
}

export default Player