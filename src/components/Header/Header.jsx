import { Toggler } from "../Toggler/Toggler";
import { Search } from "../Search/Search";
import "./Header.scss";
export const Header = (props) => {
  const { setCity, search, city } = props;
  return (
    <header>
      <Search setCity={setCity} search={search} city={city} />
      <Toggler />
    </header>
  );
};
