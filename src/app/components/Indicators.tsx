type IndicatorProps = {
  mode: string;
  currentMode?: string;
};

export default function Indicator({ mode, currentMode }: IndicatorProps) {
  const isActive = mode.toLowerCase() === currentMode;
  const style = {
    backgroundColor: isActive ? "rgba(0, 255, 0, 0.25)" : "transparent",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.10rem",
    paddingBottom: "0.10rem",
    display: "flex",
    borderRadius: "0.5rem",
    border: isActive ? "1px solid rgb(0, 255, 0)" : "1px solid #374151",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={style}>{mode}</div>;
}
