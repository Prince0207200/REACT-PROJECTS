import {  useEffect } from "react";
import axios from "axios"; 
import { serverUrl } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setShopsInMyCity } from "../redux/userSlice";



function useGetShopByCity() {
  const { currentCity } = useSelector((state) => state.user);
const dispatch=useDispatch()
  useEffect(() => {
    const fetchShop = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/shop/get-by-city/${currentCity}`, {
          withCredentials: true,
        });
        dispatch(setShopsInMyCity(result.data))
        console.log(result.data)
      } catch (error) {
        console.log(error)
      } 
    };

    fetchShop();
  }, [dispatch,currentCity]);


}

export default useGetShopByCity;
