import "./App.css";
import NavigationBar from "./components/navigation/Navbar";
import { DarkModeContext } from "./components/ui/darkMode/DarkModeContext";
import Title from "./components/title/Title";
import MainSubtitle from "./components/title/MainSubtitle";
import { useState, useEffect } from "react";
import { getItem, setLocalStorage } from "./utils/localStorage";
import SkillsIcon from "./components/skillsIcon/SkillsIcon";
import { techStack } from "./components/skillsIcon/iconsData";
import About from "./components/about/About";
import SubtitleH2 from "./components/title/SubtitleH2";
import { Projects } from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import { Contact } from "./components/contact/Contact";

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
            <MainSubtitle
              text={["Junior Frontend Developer", "React + TypeScript", "Problem Solver"]}
            />
          </div>
          <div className="tech-stack">
            <SubtitleH2 text="Tech Stack" />
            <SkillsIcon skills={techStack} />
          </div>
          <div id="about" className="about-section">
            <SubtitleH2 text="About Me" />
            <About />
          </div>
          <div id="projects" className="project-section">
            <SubtitleH2 text="Projects" />
            <Projects />
          </div>
          <div id="contact" className="contact-section">
            <SubtitleH2 text="Contact Me" />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
};

export default App;
