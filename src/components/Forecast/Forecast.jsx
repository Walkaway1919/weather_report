import { IconText } from "../IconText/IconText.jsx";
import "./Forecast.scss";
export const Forecast = (props) => {
  const { daysArr } = props;
  return (
    <div className="forecast">
      {daysArr.length > 0 ? (
        daysArr.map((oneDay) => {
          const thisDay = oneDay[0].dt_txt;
          // today
          // const averageCloudPerc = average(oneDay, 'clouds', 'all' );
          const description = oneDay
            .map((oneStamp) => oneStamp.weather[0].description)
            .reduce(function (result, desc) {
              if (result[desc]) {
                result[desc] += 1;
              } else {
                result[desc] = 1;
              }
              return result;
            }, {});

          const descr = Object.keys(description).reduce((final, currDesc) => {
            if (description[final] > description[currDesc]) {
              return final;
            }
            return currDesc;
          }, "");

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
      ) : (
        <div>сегодня без прогнозов</div>
      )}
    </div>
  );
};
