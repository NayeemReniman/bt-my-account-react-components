import { FunctionComponent } from "react";
import "./highlighter.css";
export interface HighlighterProps {
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  rounded?: boolean;
}

const Highlighter: FunctionComponent<HighlighterProps> = ({
  backgroundColor = "#5514b4",
  color = "#FFFFFF",
  rounded = false,
  children,
}) => {
  return (
    <span
      className={`highlighter__container ${rounded && "rounded"}`}
      style={{ backgroundColor, color }}
    >
      {children}
    </span>
  );
};

export default Highlighter;
