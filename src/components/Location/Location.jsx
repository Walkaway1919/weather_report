import "./Location.scss";

export const Location = ({ weather }) => {
  return typeof weather.main !== "undefined" ? (
    <div className="location">
      {weather.name}, {weather.weather[0].description}
    </div>
  ) : (
    weather.message === "city not found"
  );
};
