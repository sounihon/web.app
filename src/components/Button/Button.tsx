import React, { ButtonHTMLAttributes, FC } from "react";
import "./Button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  green?: boolean;
}

export const SButton: FC<Props> = (props) => {
  const getColor = () => {
    let color: string;
    if (props.primary) {
      color = "primary";
    } else if (props.green) {
      color = "green";
    } else {
      color = "primary";
    }
    return color;
  };

  let classList = `SButton SButton--${getColor()}`;

  return (
    <button className={classList} {...props}>
      {props.children}
    </button>
  );
};
