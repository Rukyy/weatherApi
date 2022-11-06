import './home.css'
import useFetch from "./usefetch";
import { useState } from "react";
import Display from './display';


const Home = () => {
    const[cityName,setcityName]=useState('')
    const{data}=useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=81be7448272b76b824ea98b596cfc90b&units=metric`)
    const [datafromfetch,setdatafromfetch]=useState(false)
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(data.name)
        setdatafromfetch(data)
    }
    return ( 
        <div className="Home">
            <div className='welcomingtag'>
                 Check the weather conditions of your favourite cities
            </div>
            <form onSubmit={handlesubmit}>
                <input
                    type="search" 
                    name="search"
                    value={cityName}
                    required
                    placeholder="search city name"
                    onChange={(e)=>{setcityName(e.target.value)}}
                />
                <button>search</button>
            </form>
            <div>{ datafromfetch && <Display data={datafromfetch}/>}</div> 
        </div>
     );
}
 
export default Home;