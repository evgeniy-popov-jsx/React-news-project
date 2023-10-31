import { IoMoonOutline, IoCloudOutline } from 'react-icons/io5';

export const WeatherIcon = (weather) => {
        
    function createWeatherIcon (weather){
        switch (weather.weather.main) {
            case 'clear sky':
                return <IoMoonOutline />;                
            case 'few clouds':
                    return <IoMoonOutline />;
            case 'scattered clouds':
                    return <IoMoonOutline />;
            case 'broken clouds':
                    return <IoMoonOutline />;
            case 'shower rain':
                    return <IoMoonOutline />;
            case 'rain':
                    return <IoMoonOutline />;
            case 'thunderstorm':
                    return <IoMoonOutline />;
            case 'Snow':
                    return <IoMoonOutline />;
            case 'Clouds':
                    return <IoCloudOutline />;
            default:
                    return weather.weather.main;
            }
        }

  ;
  const weatherIo = createWeatherIcon(weather);
  console.log(weather.weather.main)
    return weatherIo;
}