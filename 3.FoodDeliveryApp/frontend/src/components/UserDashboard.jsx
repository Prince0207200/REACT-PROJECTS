import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Nav from "./Nav.jsx";
import CategoryCard from "./CategoryCard.jsx";
import { categories } from "../category.js";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import FoodCard from "./FoodCard.jsx";

function UserDashboard() {
  const [showLeftCateButton, setShowLeftCateButton] = useState(false);
  const [showRightCateButton, setShowRightCateButton] = useState(false);
   const [showLeftShopButton, setShowLeftShopButton] = useState(false);
  const [showRightShopButton, setShowRightShopButton] = useState(false);
  const { currentCity ,shopsInMyCity ,itemsInMyCity} = useSelector((state) => state.user);
 
  console.log("UserDashboard currentCity:", currentCity);

  const updateButton = (ref, setLeftButton, setRightButton) => {
    const element = ref.current;
    if (element) {
      setLeftButton(element.scrollLeft > 0);
      setRightButton(
        element.scrollLeft + element.clientWidth < element.scrollWidth
      );
    }
  };

  const catScrollRef = useRef();
  const shopScrollRef=useRef();
  const scrollHandler = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction == "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
  const catElement = catScrollRef.current;
  const shopElement = shopScrollRef.current;

  const handleCateScroll = () => {
    updateButton(catScrollRef, setShowLeftCateButton, setShowRightCateButton);
  };
  const handleShopScroll = () => {
    updateButton(shopScrollRef, setShowLeftShopButton, setShowRightShopButton);
  };

  if (catElement) {
    updateButton(catScrollRef, setShowLeftCateButton, setShowRightCateButton);
    catElement.addEventListener("scroll", handleCateScroll);
  }
  if (shopElement) {
    updateButton(shopScrollRef, setShowLeftShopButton, setShowRightShopButton);
    shopElement.addEventListener("scroll", handleShopScroll);
  }

 
  return () => {
    if (catElement) catElement.removeEventListener("scroll", handleCateScroll);
    if (shopElement) shopElement.removeEventListener("scroll", handleShopScroll);
  };
}, []);

  return (
    <div className="w-full min-h-screen bg-[#fff9f6] flex flex-col items-center">
      <Nav />
      {/* category */}
      <div className="w-full max-w-6xl flex flex-col gap-5 items-start p-[10px]">
        <h1 className="text-gray-800 text-2xl sm:text-3xl">
          Inspiration for your first order
        </h1>
        <div className="w-full relative">
          {showLeftCateButton && (
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#ff4d2d] text-white p-2 rounded-full shadow-lg hover:bg-[#e64528] z-10"
              onClick={() => scrollHandler(catScrollRef, "left")}
            >
              <FaCircleChevronLeft />
            </button>
          )}

          <div
            className="w-full flex  gap-4 overflow-x-auto pb-2 "
            ref={catScrollRef}
          >
            {categories.map((cate, index) => (
              <CategoryCard name={cate.category} image={cate.image} key={index} />
            ))}
          </div>
          {showRightCateButton && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#ff4d2d] text-white p-2 rounded-full shadow-lg hover:bg-[#e64528] z-10"
              onClick={() => scrollHandler(catScrollRef, "right")}
            >
              <FaCircleChevronRight />
            </button>
          )}
        </div>
      </div>
        {/* shop */}
      <div className="w-full max-w-6xl flex flex-col gap-5 items-start p-[10px]">
        <h1 className="text-gray-800 text-2xl sm:text-3xl">
          Best Shop in {currentCity || "your area"}
        </h1>
        <div className="w-full relative">
          {showLeftShopButton && (
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#ff4d2d] text-white p-2 rounded-full shadow-lg hover:bg-[#e64528] z-10"
              onClick={() => scrollHandler(shopScrollRef, "left")}
            >
              <FaCircleChevronLeft />
            </button>
          )}

          <div
            className="w-full flex  gap-4 overflow-x-auto pb-2 "
            ref={shopScrollRef}
          >
            {shopsInMyCity?.map((shop, index) => (
              <CategoryCard name={shop.name} image={shop.image} key={index} />
            ))}
          </div>
          {showRightShopButton && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#ff4d2d] text-white p-2 rounded-full shadow-lg hover:bg-[#e64528] z-10"
              onClick={() => scrollHandler(shopScrollRef, "right")}
            >
              <FaCircleChevronRight />
            </button>
          )}
        </div>
      </div>
          {/* Product */}
      <div className="w-full max-w-6xl flex flex-col gap-5 items-start p-[10px]">
          <h1 className="text-gray-800 text-2xl sm:text-3xl">
          Suggested food Items
        </h1>
        <div className="w-full h-auto flex flex-wrap gap-[20px] justify-center">
          {itemsInMyCity?.map((item , index)=>(
            <FoodCard key={index} data={item} />
          ))}

        </div>
      </div>

    </div>
  );
}

export default UserDashboard;
