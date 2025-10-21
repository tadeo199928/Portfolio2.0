import TextType from "./TextType";
import "./MainSubtitle.css";

interface SubtitleProps {
  text: string[];
}

const MainSubtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <div className="subtitle-container">
      <TextType
        text={text}
        typingSpeed={75}
        pauseDuration={2000}
        showCursor={true}
        cursorCharacter="|"
        deletingSpeed={30}
        loop={true}
      />
    </div>
  );
};

export default MainSubtitle;