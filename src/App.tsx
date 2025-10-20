import "./App.css";
import NavigationBar from "../components/navigation/navbar";
import { DarkModeContext } from "../components/ui/darkMode/darkModeContext";
import Title from "../components/title/Title";
import Subtitle from "../components/title/Subtitle";
import { useState, useEffect } from "react";
import { getItem, setLocalStorage } from "./utils/localStorage";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const item = getItem("isDarkMode");
    return item !== undefined ? item : true;
  });

  useEffect(() => {
    setLocalStorage("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
        <NavigationBar />
        <main>
          <div className="title">
            <Title text="Jose Vasconcelos" />
            <Subtitle
              text={["Front-end Developer", "Problem Solver", "Quick Learner"]}
            />
          </div>
        </main>
      </div>
    </DarkModeContext.Provider>
  );
};

export default App;
