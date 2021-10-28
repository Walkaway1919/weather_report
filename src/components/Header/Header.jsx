import { Toggler } from "../Toggler/Toggler";
import { Search } from "../Search/Search";
import "./Header.scss";
export const Header = (props) => {
  const { setCity, city, weather, triggerSearch } = props;
  return (
    <header>
      <Search setCity={setCity} city={city} triggerSearch={triggerSearch} />
      <Toggler />
    </header>
  );
};
