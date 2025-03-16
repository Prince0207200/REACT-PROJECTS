import React, { useContext } from 'react'
import { songsData } from '../songs'
import { MdPlaylistAdd } from "react-icons/md";
import { MdPlaylistRemove } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { dataContext } from '../context/UsContext';
import { useDispatch, useSelector } from 'react-redux';
import { AddSong, RemoveSong } from '../redux/PlaylistSlice';
import { AddLikeSong, RemoveLikeSong } from '../redux/LikeSlice';

function Card({ name, image, singer, songIndex }) {

    let { playSong, index, setIndex } = useContext(dataContext)
    let dispatch = useDispatch()
    let gaana = useSelector(state => state.playlist)
    const songExistInPlaylist = gaana.some((song) => (song.songIndex == songIndex))
    let likedSong = useSelector(state => state.like)
    const songExistInLike = likedSong.some((song) => (song.songIndex == songIndex))


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

                {!songExistInPlaylist && (<div onClick={() => {
                    dispatch(AddSong({ name: name, image: image, singer: singer, songIndex: songIndex }))
                }}>
                    <MdPlaylistAdd className='text-white text-[1.5em] cursor-pointer' />
                </div>
                )}

                {songExistInPlaylist && (<div onClick={() => {
                    dispatch(RemoveSong(songIndex))
                }}>
                    <MdPlaylistRemove className='text-white text-[1.5em] cursor-pointer' />
                </div>
                )}


                {!songExistInLike && (<div onClick={() => {
                    dispatch(AddLikeSong({ name: name, image: image, singer: singer, songIndex: songIndex }))
                }}>
                    <IoIosHeartEmpty className='text-white text-[1.2em] cursor-pointer' />
                </div>
                )}

                {songExistInLike && (<div onClick={() => {
                    dispatch(RemoveLikeSong(songIndex))
                }}>
                    <IoIosHeart className='text-white text-[1.2em] cursor-pointer' />
                </div>
                )}



            </div>

        </div>
    )
}

export default Card