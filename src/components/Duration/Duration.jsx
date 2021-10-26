import cn from "classnames";
import "./Duration.scss";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import sunset from './free-icon-sunset.png';
import sunrise from './free-icon-sunrise.png';
export const Duration = ({ className, weather, msToTime }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={cn(className, theme === "light" ? "length-day--light" : "length-day--dark")}>
      <div className="length-day__sunrise sunrise">
        <img className="length-day__icon" src={sunrise} />
        <div>{msToTime(weather.sys.sunrise)}</div>
      </div>
      <div className="length-day__sunset sunset">
        <img className="length-day__icon" src={sunset} />
        <div>{msToTime(weather.sys.sunset)}</div>
      </div>
    </div>
  );
};
