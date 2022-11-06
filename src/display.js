import './display.css'


const Display = ({data}) => {
    return (
         <div className='display'>
            <div className='nameofcity'>
                <div>{data.name} <div className='coord'><h4>(Lat: {data.coord.lat}, lon:{data.coord.lon})</h4></div> </div>
            </div>
            <div className="description"><h3>Weather Description: {data.weather[0].description}</h3> </div>
            <div>
                <ul>
                    <li>Temp: {Math.round( data.main.temp)}&#8451;</li>
                    <li>Wind speed:{data.wind.speed}m/s</li>
                    <li>pressure:{data.main.pressure}hPa</li>
                    <li>visibility:{data.visibility/1000}Km</li>
                </ul>
            </div>
        </div> );
}
 
export default Display;