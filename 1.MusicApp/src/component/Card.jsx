import React, { useContext } from 'react'
import { songsData } from '../songs'
import { MdPlaylistAdd } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { dataContext } from '../context/UsContext';

function Card({ name, image, singer, songIndex }) {

    let { playSong, index, setIndex } = useContext(dataContext)
    return (
        <div className='w-[90%] h-[70px] md:h-[120px] bg-gray-800 rounded-lg p-[5px] md:p-[10px] flex justify-center items-center hover:bg-gray-600 transition-all'>
            <div className='flex justify-start items-center gap-[20px] w-[78%] h-full cursor-pointer' onClick={() => {
                setIndex(songIndex)
                playSong()

            }} >
                <div>
                    <img src={image} alt="" className=' w-[60px] max-h-[60px] md:max-h-[100px] md:w-[100px] rounded-lg ' />
                </div>
                <div className='text-[15px] md:text-[20px]'>
                    <div className='text-white text-[1.1em] font-semibold '>
                        {name}
                    </div>
                    <div className='text-gray-400 text-[0.7em] font-semibold '>
                        {singer}
                    </div>
                </div>
            </div>


            <div className='flex justify-center items-center gap-[20px] w-[22%] h-full text-[15px] md:text-[20px] '>

                <div className=''>
                    <MdPlaylistAdd className='text-white text-[1.5em] cursor-pointer' />
                </div>
                <div>
                    <IoIosHeartEmpty className='text-white text-[1.2em] cursor-pointer' />
                </div>

            </div>

        </div>
    )
}

export default Card