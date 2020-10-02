import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import "./Link.scss";

export const SLink: FC<LinkProps> = (props) => {
  return (
    <Link className="SLink" {...props}>
      {props.children}
    </Link>
  );
};
