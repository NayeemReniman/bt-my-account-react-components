import { TextProps } from "@arc-ui/components/dist/types/components/Text/Text";
import { Base, Text } from "@arc-ui/components";
import { FunctionComponent } from "react";

export type ColorTypes = "info" | "warn" | "danger" | "success";
export const getColor = (color: ColorTypes) => {
  switch (color) {
    case "danger":
      return "#FF5545";
    case "info":
      return "#02A5CE";
    case "success":
      return "#1B8811";
    case "warn":
      return "#FFC501";
  }
};
export interface ColorTextProps extends TextProps {
  color: ColorTypes;
}

const ColorText: FunctionComponent<ColorTextProps> = ({
  children,
  color,
  align = "left",
  isInline = false,
  isMeasured = false,
  size = "s",
  tone = "default",
}) => {
  return (
    <Base>
      <Text
        align={align}
        isInline={isInline}
        isMeasured={isMeasured}
        size={size}
        tone={tone}
      >
        <span style={{ color: getColor(color) }}>{children}</span>
      </Text>
    </Base>
  );
};

export default ColorText;
