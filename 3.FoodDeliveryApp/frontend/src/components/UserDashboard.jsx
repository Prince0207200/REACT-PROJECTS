import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Nav from "./Nav.jsx";
import CategoryCard from "./CategoryCard.jsx";
import { categories } from "../category.js";
import { useRef } from "react";
import { useState } from "react";

function UserDashboard() {
  const [showCateButton,setShowCateButton]=useState(false);


  const catScrollRef=useRef();
  const scrollHandler=(ref,direction)=>{
    if(ref.current){
      ref.current.scrollBy({
        left:direction=="left"?-200:200,
        behavior:"smooth"
      })
    }
  }


  return (
    <div className="w-full min-h-screen bg-[#fff9f6] flex flex-col items-center">
      <Nav />
      <div className="w-full max-w-6xl flex flex-col gap-5 items-start p-[10px]">
        <h1 className="text-gray-800 text-2xl sm:text-3xl">
          Inspiration for your first order
        </h1>
        <div className="w-full relative">
          <button className="absolute left-0 top-1/2 -transition-y-1/2 bg-[#ff4d2d] text-white p-2 rounded-full shadow-lg hover:bg-[#e64528] z-10" onClick={()=>scrollHandler(catScrollRef,"left")}>
            <FaCircleChevronLeft />
          </button>

          <div className="w-full flex  gap-4 overflow-x-auto pb-2 " ref={catScrollRef}>
            {categories.map((cate, index) => (
              <CategoryCard data={cate} key={index} />
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -transition-y-1/2 bg-[#ff4d2d] text-white p-2 rounded-full shadow-lg hover:bg-[#e64528] z-10" onClick={()=>scrollHandler(catScrollRef,"right")}>
            <FaCircleChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
