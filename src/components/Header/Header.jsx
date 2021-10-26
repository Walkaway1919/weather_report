import { Toggler } from "../Toggler/Toggler";
import { Search } from "../Search/Search";
import "./Header.scss";
import { Location } from "../Location/Location";
export const Header = (props) => {
  const { setCity, search, city, weather } = props;
  return (
    <header>
      <Location weather={weather}/>
      <Search setCity={setCity} search={search} city={city} />
      <Toggler />
    </header>
  );
};
