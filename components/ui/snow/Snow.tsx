import Snowfall from "react-snowfall";

interface SnowProps {
  snowflakeCount?: number;
  color?: string;
  speed?: [number, number];
  wind?: [number, number];
  radius?: [number, number];
}

const Snow: React.FC<SnowProps> = ({
  snowflakeCount = 50,
  color = "rgba(255, 255, 255, 0.3)",
  speed = [0.5, 1.0],
  wind = [-0.5, 1.0],
  radius = [0.5, 2.0],
}) => {
  return (
    <Snowfall
      color={color}
      snowflakeCount={snowflakeCount}
      speed={speed}
      wind={wind}
      radius={radius}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default Snow;