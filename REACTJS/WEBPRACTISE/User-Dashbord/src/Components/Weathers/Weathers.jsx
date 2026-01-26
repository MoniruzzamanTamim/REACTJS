import React, { useState } from 'react'
import useUserApi from '../../API/userApi'
import Loading from '../Loader'
import Search from './Search';

const API_KEY = '5179385bbf22c98f06c3bf44febb9557';

function Weathers() {


  const [city, setCity] = useState("Dhaka")
  console.log(city);
  

   const SearchValue = (e) =>{
     setCity(e.target.value)
  }

  const { user, error, loading } = useUserApi(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

  if (loading) return <Loading/>;
  if (error) return <p>Error: {error}</p>;


 console.log(user);
 
  return (
    <>
    <Search SearchValue={SearchValue} />


    <div>
      <h2>{user.name}</h2>
      <p>Temp: {user.main.temp} °C</p>
      <p>Weather: {user.weather[0].main}</p>
    </div>
    </>
  );
}

export default Weathers;
