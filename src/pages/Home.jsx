import { createContext, useState } from "react";
import Landing from "../components/Landing";


export const ThemeContext = createContext(null);

function Home(props) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Landing theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default Home;
