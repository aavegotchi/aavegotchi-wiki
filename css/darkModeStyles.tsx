import {createGlobalStyle} from "styled-components";

/***
 * Creates global styles depending on the dark mode settings
 * @param isDarkMode: state variable that indicates if dark mode is on or off
 * @return globalStyles
 */
const generateGlobalDarkModeStyles = (isDarkMode : boolean) => {
    return createGlobalStyle`
      :root {
        --background-color: ${isDarkMode ? "black" : "white"};
        --text-color: ${isDarkMode ? "white" : "black"};
        --whiteSmoke-alternative: ${isDarkMode ? "black" : "whitesmoke"};
        --list-color: ${isDarkMode ? "whitesmoke" : "inherit"};
        --td-background-color-even: ${isDarkMode ? "#151616" : "whitesmoke"};
        --td-color-even: ${isDarkMode ? "white" : "inherit"};
        --td-background-color-uneven: ${isDarkMode ? "#2b2d2d" : "whitesmoke"};
        --td-color-uneven: ${isDarkMode ? "white" : "inherit"};
        --additional-info: ${isDarkMode ? "whitesmoke" : "inherit"};
        --navbar-background-color: ${isDarkMode ? "#3d3d3d" : "inherit"};
        --sidebar-background: ${isDarkMode ? "purple" : "#FA34F3"};
        --blogbody-h3: ${isDarkMode ? "whitesmoke" : "darkslategray"};
      }`;
}

export default generateGlobalDarkModeStyles;