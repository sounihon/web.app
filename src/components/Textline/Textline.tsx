import React, { FC, InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons/lib";
import "./Textline.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  appendIcon?: FC<IconBaseProps>;
  clickAppend?: () => void;
}

export const STextline: FC<Props> = (props) => {
  const getClassList = () =>
    `STextline${props.error ? " STextline--error" : ""}`;

  return (
    <div className={getClassList()}>
      <div className="STextlineInput">
        <input {...props} />
        {props.appendIcon ? (
          <props.appendIcon
            className="STextlineIcon STextlineIcon--append"
            onClick={props.clickAppend}
          ></props.appendIcon>
        ) : undefined}
      </div>
      {props.error ? (
        <div className="STextlineError">{props.error}</div>
      ) : undefined}
    </div>
  );
};
