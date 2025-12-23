import TextType from "./TextType";
import "./SubtitleH2.css";

interface TitleProps {
  text: string;
}

function SubtitleH2({ text }: TitleProps) {
  return (
    <div className="title-container-h2">
      <TextType
        as="h2"
        text={[text]}
        typingSpeed={75}
        showCursor={true}
        cursorCharacter="_"

      />
    </div>
  );
};

export default SubtitleH2;
