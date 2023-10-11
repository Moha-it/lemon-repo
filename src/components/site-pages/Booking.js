import Bookingtable from "../site-pages-sections/reserve/Bookingtable";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";
import Bookhead from "../site-pages-sections/reserve/Bookhead";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Bookhead />
      <Bookingtable availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}