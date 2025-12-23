import TextType from "./TextType";
import "./Title.css";

interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <div className="title-container">
      <TextType
        as="h1"
        text={[text]}
        typingSpeed={75}
        showCursor={true}
        cursorCharacter="_"
      />
    </div>
  );
}

export default Title;
