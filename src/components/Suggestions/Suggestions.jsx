import "./Suggestions.scss";
import cn from 'classnames';
import { ThemeContext } from "../../App";
import { useContext, useState } from "react";

export const Suggestions = ({suggestions, triggerSearch, setCity}) => {
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
        <ul className={cn(theme === "light" ? "search__drop-list--light" : "search__drop-list--dark", "search__drop-list")} >
          {
            suggestions.map( r => {
              return <li className="list-elem" onClick={() => {
                triggerSearch(r.data.city)
                setCity(r.data.city)
              } }>{`${r.data.city} (${r.data.country})`}</li>
            })
          }
        </ul>
      
  
};
