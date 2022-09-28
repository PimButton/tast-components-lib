// Components==============
import React from "react";
import "./Button.scss";
// =========================

type Variant = "black" | "white";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  inactive?: boolean;
  fullWidth?: boolean;
};

export function Button({
  children,
  variant = "black",
  onClick,
  inactive,
  fullWidth,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={onClick ? "button" : "submit"}
      className={`Button ${variant} ${fullWidth ? "fullwidth" : ""}`}
      style={
        inactive
          ? {
              pointerEvents: "none",
              opacity: 0.5,
            }
          : {}
      }
    >
      {children}
    </button>
  );
}
