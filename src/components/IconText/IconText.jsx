import cn from "classnames";
import "./IconText.scss";

const iconMap = {
  temperature: (
    <img className="icon-block__icon" src="/free-icon-temperature.png" />
  ),
  pressure: (
    <img className="icon-block__icon" src="/free-icon-low-tide-4064379.png" />
  ),
  wind: <img className="icon-block__icon" src="free-icon-windy.png" />,
  cloud: <img className="icon-block__icon" src="/free-icon-cloud.png" />,
  humidity: <img className="icon-block__icon" src="/free-icon-humidity.png" />,
};

export const IconText = ({ className, size, text, icon }) => {
  return (
    <div className={cn(className, "icon-block", `icon-block--${size}`)}>
      {iconMap[icon]}
      <div className="icon-block__text">{text}</div>
    </div>
  );
};

{
  /* <div className='weather-box__wind wind'>
    <img src="free-icon-windy.png"/>
    <div className='wind__info'>ветер {Math.round(weather.wind.speed)} м/с, {Math.round((weather.wind.speed) * 5/9)}°c</div>
</div>

<div className='weather-box__clouds clouds'>
    <img src='/free-icon-cloud.png'/>
    <div className='clouds__info'>облачность {weather.clouds.all}%</div>
</div>

<div className='weather-box__humidity humidity'>
    <img src="/free-icon-humidity.png"/>
    <div className='humidity__info'>влажность {weather.main.humidity}%</div>
</div> 

<div className='forecast__temp'> 
    <img src='/free-icon-temperature.png'></img>
    <div>{Math.round(averageTemp)} °c</div>
</div> */
}
