import { ThemeContext } from "../../App";
import { useContext } from "react";
import "./Toggler.scss";

export const Toggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");
  return (
    <div className="toggler">
      <svg
        className={
          theme === "light"
            ? "toggler__day-icon--light"
            : "toggler__day-icon--dark"
        }
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 C 8.1458514 5 5 8.1458514 5 12 C 5 15.854149 8.1458514 19 12 19 C 15.854149 19 19 15.854149 19 12 C 19 8.1458514 15.854149 5 12 5 z M 12 7 C 14.773268 7 17 9.2267316 17 12 C 17 14.773268 14.773268 17 12 17 C 9.2267316 17 7 14.773268 7 12 C 7 9.2267316 9.2267316 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z M 11 21 L 11 24 L 13 24 L 13 21 L 11 21 z" />
      </svg>
      <div class="button-con">
        <label for="toggle-theme" />
        <input
          className="toggle"
          className={theme === "light" ? "toggle--light" : "toggle--dark"}
          id="toggle-theme"
          type="checkbox"
        />
        <label
          className="toggle-button"
          for="toggle-theme"
          onClick={() => setTheme(changeTheme)}
        ></label>
        <label for="toggle-theme" />
      </div>
      <svg
        className={
          theme === "light"
            ? "toggler__night-icon--light"
            : "toggler__night-icon--dark"
        }
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        ß
        enable-background="new 0 0 512 512"
      >
        <g>
          <g>
            <path d="m275.4,500.7c-135,0-244.7-109.8-244.7-244.7 1.06581e-14-134.9 109.8-244.7 244.7-244.7 8.2,0 16.4,0.4 24.6,1.2 7.2,0.7 13.5,5.2 16.5,11.7s2.4,14.2-1.6,20.2c-23,33.8-35.2,73.3-35.2,114.2 0,105 78.7,192.2 183.2,202.6 7.2,0.7 13.5,5.2 16.5,11.7 3.1,6.5 2.4,14.2-1.6,20.2-45.8,67.4-121.4,107.6-202.4,107.6zm-12.5-448c-106.5,6.5-191.2,95.2-191.2,203.3 1.42109e-14,112.3 91.4,203.7 203.7,203.7 56.4,0 109.6-23.4 147.8-63.7-46.2-11.7-88.1-36.8-120.8-72.6-41.1-45.2-63.8-103.6-63.8-164.6 0.1-37.1 8.4-73.2 24.3-106.1z" />
          </g>
        </g>
      </svg>
    </div>
  );
};
