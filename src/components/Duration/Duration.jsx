import cn from "classnames";
import "./Duration.scss";
export const Duration = ({ className, weather, msToTime }) => {
  return (
    <div className={cn(className, "length-day")}>
      <div className="length-day__sunrise sunrise">
        <img className="length-day__icon" src="/free-icon-sunrise.png" />
        <div>{msToTime(weather.sys.sunrise)}</div>
      </div>
      <div className="length-day__sunset sunset">
        <img className="length-day__icon" src="/free-icon-sunset.png" />
        <div>{msToTime(weather.sys.sunset)}</div>
      </div>
    </div>
  );
};
