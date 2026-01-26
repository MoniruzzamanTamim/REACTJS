import React, { useState } from "react";
import WeathersAPI from "../API/WeathersAPI";
import Loader from "./Loader";
import Search from "./Search";
import Forecast from './Forecast'
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import '../assets/weathers.css'



function Weathers() {
  const [city, setCity] = useState("Dhaka");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const { apiValue, error, loading } = WeathersAPI(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  const handleSearch = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">

            <h3 className="text-center mb-3">🌦 Weather App</h3>

            <Search onChange={handleSearch} />

            {loading && <Loader />}
            {error && <p className="text-danger text-center">{error}</p>}

            {apiValue && (
              <div className="text-center">

                <h2>{apiValue.name}</h2>

                <img
                  src={`https://openweathermap.org/img/wn/${apiValue.weather[0].icon}@2x.png`}
                  alt="icon"
                />

                <h3>{apiValue.main.temp} °C</h3>
                <p>{apiValue.weather[0].main}</p>

                <div className="d-flex justify-content-around mt-3">

                  <div>
                    <WiHumidity size={40} />
                    <p>{apiValue.main.humidity}%</p>
                  </div>

                  <div>
                    <WiStrongWind size={40} />
                    <p>{apiValue.wind.speed} m/s</p>
                  </div>

                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>


      <Forecast city={city} API_KEY={API_KEY} />
    
    
    </>
  );
}

export default Weathers;
