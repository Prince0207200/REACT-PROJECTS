import React, { createContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../songs'

export const dataContext=createContext()

function UsContext({children}) {
  let audioRef=useRef(new Audio())
  let [index , setIndex]=useState(0)
  let [playingSong,setPlayingSong]=useState(false);

  

    useEffect(()=>{
      audioRef.current.src=songsData[index].song
      audioRef.current.load()
      if(playingSong){
        playSong()
      }
    },[index])

    function playSong(){
      setPlayingSong(true)
      audioRef.current.play()
    }
    function pauseSong(){
      setPlayingSong(false)
      audioRef.current.pause()
    }
    function nextSong(){
      setIndex((prev)=>(prev+1)%songsData.length)
    }
    function prevSong(){
      setIndex((prev)=>{
        if(prev===0){
          return songsData.length-1
        }else{
          return prev-1
        }
      })
    }

    let value={
        audioRef,
        playSong,
        pauseSong,
        playingSong,
        setPlayingSong,
        nextSong,
        setIndex,
        index,
        prevSong
    }
  return (
   
    <div>
        <dataContext.Provider value={value}>
        {children}
        </dataContext.Provider>
    </div>
  )
}

export default UsContext;