import cn from "classnames";
import "./IconText.scss";
import temp from './free-icon-temperature.png';
import press from './pressure.png';
import windy from './free-icon-windy.png';
import humid from './free-icon-humidity.png';
import cloudly from './free-icon-cloud.png';

const iconMap = {
  temperature: (
    <img className="icon-block__icon" alt='temp' src={temp} />
  ),
  pressure: (
    <img className="icon-block__icon arrow" alt='pressure' src={press} />
  ),
  wind: <img className="icon-block__icon" alt='wind' src={windy} />,
  cloud: <img className="icon-block__icon" alt='cloud' src={cloudly} />,
  humidity: <img className="icon-block__icon" alt='humidity' src={humid} />,
};

export const IconText = ({ className, size, text, icon }) => {
  return (
    <div className={cn(className, "icon-block", `icon-block--${size}`)}>
      {iconMap[icon]}
      <div className="icon-block__text">{text}</div>
    </div>
  );
};
