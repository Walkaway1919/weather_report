import { IconText } from "../IconText/IconText.jsx";
import { ThemeContext } from "../../App";
import cn from 'classnames';
import { useContext } from "react";
import "./Forecast.scss";
export const Forecast = (props) => {
  const { daysArr } = props;
  const { theme } = useContext(ThemeContext);
  return daysArr.length > 0 && (
    <div className={cn(
      "forecast",
      {["forecast--light"]: theme === "light" },
      {["forecast--dark"]: theme !== "light" },
      )} >
        {
        daysArr.map((oneDay) => {
          const thisDay = oneDay[0].dt_txt;
          const averageCloudPerc =
            oneDay
              .map((oneStamp) => oneStamp.clouds.all)
              .reduce((a, b) => a + b, 0) / oneDay.length;
          const averageTemp =
            oneDay
              .map((oneStamp) => oneStamp.main.temp)
              .reduce((a, b) => a + b, 0) / oneDay.length;
          const humidity =
            oneDay
              .map((oneStamp) => oneStamp.main.humidity)
              .reduce((a, b) => a + b, 0) / oneDay.length;
          const wind =
            oneDay
              .map((oneStamp) => oneStamp.wind.speed)
              .reduce((a, b) => a + b, 0) / oneDay.length;
          const pressure =
            oneDay
              .map((oneStamp) => oneStamp.main.pressure)
              .reduce((a, b) => a + b, 0) / oneDay.length;
          return (
            <div className="forecast-box">
              <div className="forecast__date">
                {thisDay.split(" ")[0].substr(5).replace("-", ".")}
              </div>
              <IconText
                size="small"
                icon="temperature"
                text={`${Math.round(averageTemp)} °c`}
              />
              <IconText
                size="small"
                icon="cloud"
                text={`${Math.round(averageCloudPerc)} %`}
              />
              <IconText
                size="small"
                icon="pressure"
                text={`${Math.round(pressure * 0.75)} мм`}
              />
              <IconText
                size="small"
                icon="humidity"
                text={`${Math.round(humidity)} %`}
              />
              <IconText
                size="small"
                icon="wind"
                text={`${Math.round(wind)} м/с`}
              />
            </div>
          );
        })
      }
    </div>
  );
};
