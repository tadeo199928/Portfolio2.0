import TextType from "./TextType";
import "./Subtitle.css";

interface SubtitleProps {
  text: string[];
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
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

export default Subtitle;