import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Forecast } from "./components/Forecast/Forecast";
import { Header } from "./components/Header/Header";
import { TodayWeather } from "./components/TodayWeather/TodayWeather";
import "./App.scss";

export const ThemeContext = React.createContext();

const api = {
  key: "7ec4c505607b4b73c0ba74beffef58ca",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [theme, setTheme] = useState("light");

  const search = async (e) => {
    if (
      e.key === "Enter" ||
      e.target === document.querySelector(".search__button--light") ||
      e.target === document.querySelector(".search__button--dark")
    ) {
      const res = await fetch(
        `${api.base}weather?q=${city}&units=metric&lang=ru&appid=${api.key}`
      );
      const resForecast = await fetch(
        `${api.base}forecast?q=${city}&units=metric&lang=ru&appid=${api.key}`
      );
      const jsonData = await res.json();
      const jsonDataForecast = await resForecast.json();
      setWeather(jsonData);
      setForecast(jsonDataForecast);
      setCity("");
    }
  };

  useEffect(async () => {
    const res = await fetch(
      `${api.base}weather?q=Москва&units=metric&lang=ru&appid=${api.key}`
    );
    const resForecast = await fetch(
      `${api.base}forecast?q=Москва&units=metric&lang=ru&appid=${api.key}`
    );
    const jsonData = await res.json();
    const jsonDataForecast = await resForecast.json();
    setWeather(jsonData);
    setForecast(jsonDataForecast);
    setCity("Москва");
  }, []);

  const format_date = (d) => {
    let months = [
      "янв",
      "фев",
      "мар",
      "апр",
      "мая",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ];
    let days = ["вс,", "пн,", "вт,", "ср,", "чт,", "пт,", "сб,"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  function msToTime(timestamp) {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let time = hours + ":" + minutes;
    return time;
  }

  const today = new Date();
  today.setHours(23);
  today.setMinutes(59);
  today.setSeconds(59);

  const daysArr = [];
  let tempDayArray = [];
  if (forecast && forecast.list && forecast.list.length > 0) {
    for (let index = 0; index < forecast.list.length; index++) {
      const timeFrame = forecast.list[index];
      const thisStamp = new Date(timeFrame.dt_txt);
      if (thisStamp.getTime() < today.getTime()) {
        tempDayArray.push(timeFrame);
      } else {
        today.setHours(today.getHours() + 24);
        daysArr.push(tempDayArray);
        tempDayArray = [];
        tempDayArray.push(timeFrame);
      }
    }
    if (tempDayArray.length > 0) {
      daysArr.push(tempDayArray);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${theme}`}>
        <div className={"weather-app"}>
          <Header setCity={setCity} search={search} city={city} />
          <TodayWeather
            className="weather-app__today"
            weather={weather}
            format_date={format_date}
            msToTime={msToTime}
          />
          <Forecast daysArr={daysArr} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
