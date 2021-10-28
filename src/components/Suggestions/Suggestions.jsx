import "./Suggestions.scss";
import cn from 'classnames';
import { ThemeContext } from "../../App";
import { useContext, useState } from "react";

export const Suggestions = ({suggestions, triggerSearch, setShowSuggestions}) => {
    const { theme } = useContext(ThemeContext);
    const [visibility, setVisibility] = useState(true);

    const hidden = (e) => {
        if (
          e.target != document.querySelector(".search__drop-list") 
        ) {
          setVisibility = false
        }
      };
    return suggestions && suggestions.length > 0 && 
        <ul className={cn(
            "search__drop-list",
            {["search__drop-list--light"]: theme === "light" },
            {["search__drop-list--dark"]: theme !== "light" },
            )} >
          {
            suggestions.map( r => {
              return (
                <li
                    className="list-elem"
                    onClick={() => {
                        setShowSuggestions(false)
                        triggerSearch(r.data.city)
                    } }
                >
                  {`${r.data.city} (${r.data.country})`}
                </li>
            )
            })
          }
        </ul>
      
  
};
