import TextType from "./TextType";
import "./Title.css";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="title-container">
      <TextType
        text={[text]}
        typingSpeed={75}
        showCursor={true}
        cursorCharacter="_"

      />
    </div>
  );
};

export default Title;
