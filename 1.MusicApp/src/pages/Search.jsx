import React, { useEffect, useState } from 'react'
import Player from '../component/Player'
import { FiSearch } from "react-icons/fi";
import Card from '../component/Card';
import { songsData } from '../songs';

function Search() {
  let [input,setInput]=useState("")
  let [newList,setNewList]=useState([])

  // useEffect(()=>{
  //   let a=songsData.filter((song)=>
  //    ( song.name.toLowerCase().includes(input)|| song.singer.toLowerCase().includes(input) || song.name.toUpperCase().includes(input)|| song.singer.toUpperCase().includes(input)||song.name.includes(input)|| song.singer.includes(input) )
  //   )
  //   setNewList(a)
  // },[input])

  useEffect(() => {
    if (!input) { 
      setNewList([]);
      return;
    }

    let lowerCasedInput = input.toLowerCase(); 

    let filteredSongs = songsData.filter((song) =>
      song.name.toLowerCase().includes(lowerCasedInput) || 
      song.singer.toLowerCase().includes(lowerCasedInput) 
    );

    setNewList(filteredSongs);
  }, [input]);
  return (
    <div className='w-[100%] h-[100vh] bg-black flex justify-start  items-center flex-col pt-5 md:pt-[100px] gap-[30px]'>
      <Player />

      <form action="" className='w-[90%] md:w-[65%] h-[55px] bg-gray-800 flex justify-center items-center gap-5 rounded-lg overflow-hidden p-[14px] md:p-0 ' onSubmit={(e)=>{
        e.preventDefault()
      }}>
      <FiSearch className='text-gray-200 text-[18px]'/>
        <input type='text' className='w-[90%] h-[100%] bg-gray-800 outline-none border-0 text-white p-[10px] text-[18px]' placeholder='Search songs...' onChange={(e)=>setInput(e.target.value)} value={input}/>
        

      </form>

      {input?
      <div className='w-[100%] h-[62%] md:h-full flex flex-col justify-start p-[20px] items-center gap-5 overflow-auto '>
        {newList.map((song)=>(
          <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id-1}/>
        ))}
        
      </div>
      :
        <div className='text-gray-700 text-[30px] font-semibold ' >
          Search Songs
        </div>
      }
    </div>
  )
}

export default Search