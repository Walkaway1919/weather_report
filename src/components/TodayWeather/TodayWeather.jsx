import cn from "classnames";
import { Duration } from "../Duration/Duration";
import { IconText } from "../IconText/IconText";
import { Time } from "../Time/Time";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import "./TodayWeather.scss";
export const TodayWeather = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { className, weather, format_date, msToTime } = props;
  return typeof weather.main !== "undefined" ? (
    <div className={cn(className, "today-weather")}>
      <div className={theme === "light" ? "today-weather__main--light" : "today-weather__main--dark"}>
        <div className="today-weather__now weather-now">
          <div className="temperature-box">
            <div className="weather-now__temp temperature">
              <img
                className="temperature__icon"
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              />
              <div className="temperature__text">
                {Math.round(weather.main.temp)}°c
              </div>
            <div className="weather-now__feels">
              , ощущается как {Math.round(weather.main.feels_like)}°c
            </div>
            </div>
          </div>
        </div>

        <div className="today-weather__box weather-box">
          <IconText
            className={"weather-box__elem"}
            size="large"
            icon="pressure"
            text={`${Math.round(weather.main.pressure * 0.75)} мм`}
          />
          <IconText
            className={"weather-box__elem"}
            size="large"
            icon="cloud"
            text={`${weather.clouds.all}%`}
          />
          <IconText
            className={"weather-box__elem"}
            size="large"
            icon="humidity"
            text={`${weather.main.humidity}%`}
          />
          <IconText
            className={"weather-box__elem"}
            size="large"
            icon="wind"
            text={`${Math.round(weather.wind.speed)} м/с, ${Math.round(
              (weather.wind.speed * 5) / 9
            )}°c`}
          />
        </div>
      </div>

      <div className="today-weather__secondary">
        <Time format_date={format_date} className="today-weather__time" />
        <Duration msToTime={msToTime} weather={weather} />
      </div>
    </div>
  ) : weather.message === "city not found" ? (
    <div className="start">ошибка</div>
  ) : (
    <div className="start"></div>
  );
};
