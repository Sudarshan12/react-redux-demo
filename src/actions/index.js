import axios from "axios";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=c4b504d29e427d5b9aac027d17274f53`;
const FETCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},US`;
  const request = axios.get(url);
  console.log("Request:", request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
export default FETCH_WEATHER;
