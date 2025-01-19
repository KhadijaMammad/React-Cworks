import React, {useState, useEffect} from "react";

function Country() {
    const[weather, setWeather] = useState()
    const[city, setCity] = useState("")
    // const[isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        changeWeather("London")  
    }, [])

    // const changeWeather= (cityname) => {
    //     // setIsLoading(true);
    //     setWeather(null);

    //     fetch(`https://api.weatherapi.com/v1/current.json?key=7b1eaf6efd804a44b87101529222212&q=${cityname}&aqi=no`)
    //     .then((res)=>res.json())
    //     .then((data)=>setWeather(data)
    // )
    // }

    function changeWeather(cityname){
        axios.get(`https://api.weatherapi.com/v1/current.json?key=7b1eaf6efd804a44b87101529222212&q=${cityname}&aqi=no`)
        .then((res)=>res.json())
        .then((data)=>setCity(data))

    }

    function handleSubmit(event){
        event.preventDefault()
        changeWeather(city || "London")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="enter city.."/>
            <button>Get weather</button>
        </form>
        <h2>{weather.location.name}</h2>
        <h3>{weather.location.region}</h3>
        <p>{weather.current.condition?.text}</p>
        <img src={weather.current.condition?.icon} alt="" />
    </div>
  )
}

export default Country
