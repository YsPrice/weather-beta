import React, { useState }  from "react";
import './App.css';
import axios from 'axios';
import './weather.json'


function App() {
  const [data,setData] = useState({})
 
  const[location,setLocation] = useState('') 
 
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location},us&units=imperial&APPID=902cbb81956432328ebf4fce017b18e8`
  const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(weatherUrl).then((response) => {
      setData(response.data)
      console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className="App">

     <div className="search">
     <input className="bar" value={location}
     onChange={event => setLocation(event.target.value)}
     placeholder="Enter Location"
     onKeyPress={searchLocation}
     type="text"/>
     </div>
     <div className="container">
   <div className="top">
     <div className="location">
       <p>{data.name}</p>
     </div>
     <div className="temp">
       {data.main ? <h1>{data.main.temp + "° F"}</h1> : null}
     </div>
     <div className="conditions">
       {data.weather ? <p> {data.weather[0].main}</p> : null}
     </div>
   </div>
   <div className="bottom">
     <div className="feels">
      {data.main ? <p>{"feels like" + " " + data.main.feels_like + "° F"}</p> : null}
     </div>
     <div className="humiditiy">
       <p></p>
     </div>
     <div className="humiditymp">
       
     </div>
   </div>
 </div>
    </div>
  );
}

export default App;
