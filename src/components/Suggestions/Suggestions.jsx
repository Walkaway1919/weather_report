import "./Suggestions.scss";
import cn from 'classnames';
import { ThemeContext } from "../../App";
import { useContext } from "react";

export const Suggestions = ({suggestions, triggerSearch, setShowSuggestions}) => {
    const { theme } = useContext(ThemeContext);
    return suggestions && suggestions.length > 0 && 
        <ul className={cn(
            "search__drop-list",
            {"search__drop-list--light": theme === "light" },
            {"search__drop-list--dark": theme !== "light" },
            )} >
          {
            suggestions.map( (result, index) => {
              return (
                <li key={index}
                    className="list-elem"
                    onClick={() => {
                        setShowSuggestions(false)
                        triggerSearch(result.data.city)
                    } }
                >
                  {`${result.data.city} (${result.data.country})`}
                </li>
            )
            })
          }
        </ul>
      
  
};
