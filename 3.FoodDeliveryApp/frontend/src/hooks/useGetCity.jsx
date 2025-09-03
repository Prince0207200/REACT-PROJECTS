import { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentAddress, setCurrentCity, setCurrentState } from "../redux/userSlice";


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
      dispatch(setCurrentCity(city));
      dispatch(setCurrentState(result?.data?.results[0]?.state))
      dispatch(setCurrentAddress(result?.data?.results[0]?.address_line2 || result?.data?.results[0]?.address_line1))
     

    });
  }, [userData, apiKey, dispatch]);
}
export default useGetCity;


