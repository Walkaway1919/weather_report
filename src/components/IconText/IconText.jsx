import cn from "classnames";
import "./IconText.scss";

const iconMap = {
  temperature: (
    <img className="icon-block__icon" src="free-icon-temperature.png" />
  ),
  pressure: (
    <img className="icon-block__icon" src="free-icon-low-tide-4064379.png" />
  ),
  wind: <img className="icon-block__icon" src="free-icon-windy.png" />,
  cloud: <img className="icon-block__icon" src="free-icon-cloud.png" />,
  humidity: <img className="icon-block__icon" src="free-icon-humidity.png" />,
};

export const IconText = ({ className, size, text, icon }) => {
  return (
    <div className={cn(className, "icon-block", `icon-block--${size}`)}>
      {iconMap[icon]}
      <div className="icon-block__text">{text}</div>
    </div>
  );
};
