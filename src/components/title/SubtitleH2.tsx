import TextType from "./TextType";
import "./SubtitleH2.css";

interface TitleProps {
  text: string;
}

const SubtitleH2: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="title-container-h2">
      <TextType
        text={[text]}
        typingSpeed={75}
        showCursor={true}
        cursorCharacter="_"

      />
    </div>
  );
};

export default SubtitleH2;
