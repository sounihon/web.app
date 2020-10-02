import React, { FC } from "react";
import "./List.scss";

export const SList: FC = (props) => {
  return <div className="SList">{props.children}</div>;
};
