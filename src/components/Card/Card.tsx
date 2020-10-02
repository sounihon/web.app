import React, { FC } from "react";
import _ from "lodash";
import "./Card.scss";

interface Props {
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
}

export const SCard: FC<Props> = (props) => {
  const validatedProps = _.defaults(props, {
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <div className="SCard" style={validatedProps}>
      {props.children}
    </div>
  );
};
