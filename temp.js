import React, { useState, useEffect } from "react";
import Weathercard from "./Weathercard";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune"); // by default pune
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=1af947d3b0af0234962f9c2334f011e5`;

      let res = await fetch(url);
      let data = await res.json();// convert data

      const { temp, humidity, pressure } = data.main; // temp , humidity , pressure all are in main array in api
      const { main: weathermood } = data.weather[0];  // there's main which means weathermood in weather array at 0 idx
      const { name } = data; 
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {  // created object
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { // when we open page , by default we see weather for pune
    getWeatherInfo(); // so only for start call this 
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue} // the input of user when search for city
            onChange={(e) => setSearchValue(e.target.value)} // in updated func
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Weathercard {...tempInfo} /> {/* tempinfo passed*/ }
    </>
  );
};

export default Temp;