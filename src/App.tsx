import "./App.css";
import NavigationBar from "../components/navigation/navbar";
import "./App.css";
import { useState } from "react";
import { DarkModeContext } from "../components/ui/darkMode/darkModeContext";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className="App" data-theme={isDarkMode ? "dark" : "light"}>
        <NavigationBar />
        <main>
          <div className="content">
            <h1>Welcome to My Portfolio</h1>
            <p>This is a showcase of my work.</p>
          </div>
        </main>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
