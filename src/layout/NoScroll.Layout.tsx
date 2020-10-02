import React, { FC } from "react";
import "./scss/NoScroll.Layout.scss";

interface Props {
  centeredContent: boolean;
}

export const NoScrollLayoyt: FC<Props> = (props) => {
  const getClassList = (): string => {
    return props.centeredContent
      ? "NoScrollLayout NoScrollLayout--centered"
      : "NoScrollLayout";
  };
  const classList = getClassList();
  return <div className={classList}>{props.children}</div>;
};
