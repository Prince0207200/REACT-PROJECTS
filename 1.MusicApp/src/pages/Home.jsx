import React, { useContext, useEffect, useRef, useState } from 'react';
import { songsData } from '../songs';
import musicgif from '../assets/musicanim.webp';
import { CgPlayTrackPrev } from "react-icons/cg";
import { CgPlayTrackNext } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { dataContext } from '../context/UsContext';
import Card from '../component/Card';




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
    } = useContext(dataContext)

    let [range, setRange] = useState(0)
    let progress = useRef(null)


    useEffect(() => {
        const updateProgress = () => {
            let duration = audioRef.current.duration || 0
            let currentTime = audioRef.current.currentTime || 0
            let progressPercentage = (duration ? (currentTime / duration) * 100 : 0)
            setRange(progressPercentage)
            if (progress.current) {
                progress.current.style.width = `${progressPercentage}%`
            }
        }
        audioRef.current.addEventListener("timeupdate", updateProgress)
    })

    function handleRange(e) {
        let newrange = e.target.value
        setRange(newrange)
        let duration = audioRef.current.duration
        audioRef.current.currentTime = (duration * newrange) / 100

    }


    return (
        <div className='w-full h-screen bg-black flex'>

            <div className='md:w-[50%] w-full h-full  flex justify-start items-center pt-[20px] md:pt-[120px] flex-col gap-[30px]'>

                <h1 className='text-white font-semibold text-[20px]'>Now Playing</h1>

                <div className='w-[80%]  max-w-[250px] h-[250px] object-fill rounded-md overflow-hidden relative '>
                    <img src={songsData[index].image} alt='' className='w-[100%] h-[100%]' />
                    {playingSong?
                    <div className='w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center'>
                        <img src={musicgif} alt='' className='w-[55%] h-[30%]' />
                    </div>
                    :
                    null
                    }

                </div>

                <div>
                    <div className='text-white text-[30px] font-bold text-center'>{songsData[index].name} </div>
                    <div className='text-gray-400 text-[18px] text-center'>{songsData[index].singer} </div>
                </div>

                <div className='w-[50%] flex justify-center items-center relative rounded-md'>
                    <input
                        type="range"
                        className='appearance-none w-[100%] h-[7px] rounded-md bg-gray-600'
                        id='range'
                        value={range}
                        onChange={handleRange}
                    />
                    <div
                        className="bg-white h-[7px] absolute left-0 top-0 rounded-md "
                        ref={progress}
                        style={{ width: `${range}%` }}
                    ></div>
                </div>


                <div className='text-white flex justify-center items-center gap-5'>

                    <CgPlayTrackPrev className='w-[28px] h-[28px] text-white hover:text-gray-600  focus:text-white focus:outline-none transition-all cursor-pointer' onTouchEnd={(e) => e.target.style.color = "white"} onClick={() => prevSong()} />

                    {!playingSong ?
                        <div className='w-[50px] h-[50px] rounded-full  bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer ' onTouchEnd={(e) => e.target.style.backgroundColor = "white"} onClick={() => playSong()}>
                            <FaPlay className='w-[20px] '  />
                        </div>
                        :
                        <div className='w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer' onTouchEnd={(e) => e.target.style.backgroundColor = "white"} onClick={() => pauseSong()}>
                            <FaPause className='w-[20px]' />
                        </div>
                    }

                    <CgPlayTrackNext className='w-[28px] h-[28px] text-white hover:text-gray-600 focus:text-white focus:outline-none transition-all cursor-pointer'onTouchEnd={(e) => e.target.style.color = "white"} onClick={() => nextSong()} />

                </div>


            </div>







            <div className=' w-[100%] md:w-[50%] h-full hidden  flex-col gap-5 md:flex pt-[120px] overflow-auto pb-[20px]'>
                    {songsData.map((song)=>(
                        <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id-1}/>
                    ))}

            </div>

        </div>
    )
}

export default Home
