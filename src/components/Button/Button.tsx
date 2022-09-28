// Components==============
import React from "react";
// import { useNavigate } from 'react-router';
// import { interactiveScale } from 'utilities/framer';
import "./Button.scss";
// =========================

type Variant = "black" | "white";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  to?: string;
  inactive?: boolean;
  fullWidth?: boolean;
};

export default function Button({
  children,
  variant = "black",
  onClick,
  to,
  inactive,
  fullWidth,
}: Props) {
  // const navigate = useNavigate();

  return (
    <button
      onClick={
        to
          ? (e) => {
              e.stopPropagation();
              // navigate(to);
            }
          : onClick
      }
      type={to || onClick ? "button" : "submit"}
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
