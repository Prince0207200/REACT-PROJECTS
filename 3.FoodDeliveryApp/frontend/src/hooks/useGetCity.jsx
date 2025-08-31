import { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../redux/userSlice";


function useGetCity() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const apiKey = import.meta.env.VITE_GEO_APIKEY;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
     
      const result = await axios.get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`
      );
       const place = result?.data?.results?.[0];

     const city =
    place?.city ||
    place?.town ||
    place?.village ||
    place?.county ||
    place?.state_district;
      dispatch(setCity(city));
    });
  }, [userData, apiKey, dispatch]);
}
export default useGetCity;


