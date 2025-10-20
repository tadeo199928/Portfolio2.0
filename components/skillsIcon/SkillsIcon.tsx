import "./SkillsIcon.css";
import { type Skill } from "./iconsData"

interface SkillsIconProps {
  skills: Skill[];
}

const SkillsIcon: React.FC<SkillsIconProps> = ({ skills }) => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="skill-item">
              <Icon 
                size={50} 
                style={{ color: skill.color || 'var(--primary-text-color)' }}
              />
              <span className="skill-name">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsIcon;