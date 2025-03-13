import React from 'react'
import { TiHome } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { PiPlaylistBold } from "react-icons/pi";
import { FaHeartCirclePlus } from "react-icons/fa6";
import {Link} from 'react-router-dom';

function Nav() {
    return (

        <div className='w-full h-[100px] bg-black fixed bottom-0 md:top-0 text-white flex justify-around md:justify-center items-center gap-[50px] p-[20px]'>
           
            <Link to={"/"}>
                <TiHome className='w-[25px] h-[25px]' />
            </Link>
            <Link to={"/search"}>
                <FaSearch className='w-[25px] h-[25px]' />
            </Link>
            <Link to={"/playlist"}>
                <PiPlaylistBold className='w-[25px] h-[25px]' />
            </Link>
            <Link to={"/like"}>
                <FaHeartCirclePlus className='w-[25px] h-[25px]' />
            </Link>

        </div>

    )
}

export default Nav