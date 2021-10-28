import {useEffect, useState, useRef} from 'react';
import "./Search.scss";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import { Suggestions } from '../Suggestions/Suggestions.jsx';
import cn from 'classnames';

const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "2d75a11c5259ab5de9d26ce8ae78687c18cb4302";

const getCities = async (city) => { 
  var options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({
      count: 5,
      query: city,
      locations: {
        country: "*",
      },
      from_bound: {value: "city"},
      to_bound: {value: "city"},
    })
  }

  try {
    const res = await fetch(url, options)
    const dadataResult = await res.json();
    return dadataResult.suggestions;
  } catch (error) {
    console.log("error", error)
    return []
  }
}

export const Search = (props) => { 

  const searchBox = useRef();
  const { theme } = useContext(ThemeContext);
  const { setCity, city, triggerSearch } = props;

  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const onChangeInput = async (e) => {
    setCity(e.target.value)
    if (e.target.value.length >= 3) {
      const cities = await getCities(e.target.value)
      setSuggestions(cities)
    } else {
      setSuggestions([])
    }
  }

  const onClickSearch = async (e) => {
    if (
      e.key === "Enter" ||
      e.target === document.querySelector(".search__button--light") ||
      e.target === document.querySelector(".search__button--dark")
    ) {
      triggerSearch(city)
    }
  };

  const inputClasses = cn({
    "search__bar--light": theme === "light",
    "search__bar--dark": theme ==='dark',
    'search__bar--sugg': suggestions.length > 0 && showSuggestions,
  });

  useEffect(() => {
    const hideSuggestions = (e) => {
      if( searchBox.current && !searchBox.current.contains( e.target ) ) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('click', hideSuggestions)
    return () => document.removeEventListener('click', hideSuggestions)
  }, [])

  return (
      <div className="search" ref={searchBox}>
        <input
          type="text"
          className={inputClasses}
          placeholder="Введите город..."
          onChange={onChangeInput}
          value={city}
          onKeyPress={onClickSearch}
          onFocus={()=>{
            setShowSuggestions(true)
          }}
        />
        <svg
          className={
            theme === "light" ? "search__button--light" : "search__button--dark"
          }
          onClick={onClickSearch}
          enableBackground="new 0 0 32 32"
          id="Glyph"
          version="1.1"
          viewBox="0 0 32 32"
        >
          <path
            d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
            id="XMLID_223_"
          />
        </svg>
        {showSuggestions && <Suggestions suggestions={suggestions} setShowSuggestions={setShowSuggestions} triggerSearch={triggerSearch} setCity={setCity}/>}
        
      </div>
  );
};
