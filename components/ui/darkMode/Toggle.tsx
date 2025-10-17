import "./Toggle.css"

export const Toggle = ({ handledChange, isChecked }: { handledChange: () => void; isChecked: boolean }) => {
  return (
    <div className="toggle-switch">
      <input type="checkbox" id="check" className="toggle" checked={isChecked} onChange={handledChange} />
      <label htmlFor="check">🌚</label>
    </div>
  );
};

export default Toggle;