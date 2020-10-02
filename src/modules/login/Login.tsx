import React, { ChangeEvent, FC, useState, useEffect, useRef } from "react";
import { NoScrollLayoyt } from "../../layout/NoScroll.Layout";
import {
  SCard,
  SCardBody,
  SCardHeader,
  SCardActions,
  SCardSubActions,
} from "../../components/Card";
import { SList, SListItem } from "../../components/List";
import { SButton } from "../../components/Button";
import { useParams } from "react-router-dom";
import { SLink } from "../../components/Link";
import { STextline } from "../../components/Textline";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { authStore } from "./store";

enum ACTIONS {
  LOGIN = "login",
  REGISTER = "register",
}

interface RouteParams {
  action?: ACTIONS;
}

export const Login: FC = () => {
  let { action } = useParams<RouteParams>();
  if (!action) action = ACTIONS.LOGIN;

  const getActionAsText = () => {
    return `${action![0].toUpperCase()}${action!.substr(1)}`;
  };
  const getOppositeActionRoute = () => {
    const opposite =
      action === ACTIONS.LOGIN ? ACTIONS.REGISTER : ACTIONS.LOGIN;
    return `/auth/${opposite}`;
  };

  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [loginError, setLoginError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [passwordType, setPasswordType] = useState("password");
  let [passwordIcon, setPasswordIcon] = useState(() => AiFillEye);

  let inited = useRef(false);
  let initedPassword = useRef(false);

  useEffect(() => {
    if (!inited.current) {
      inited.current = true;
      return;
    }
    if (!login || login.length === 0) {
      setLoginError("Please provide a login");
    } else {
      setLoginError("");
    }
  }, [login]);
  useEffect(() => {
    if (!initedPassword.current) {
      initedPassword.current = true;
      return;
    }
    if (!password || password.length === 0) {
      setPasswordError("Please provide a password");
    } else {
      setPasswordError("");
    }
  }, [password]);

  const togglePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(() => AiFillEyeInvisible);
    } else {
      setPasswordType("password");
      setPasswordIcon(() => AiFillEye);
    }
  };

  const validateLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };
  const validatePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const tryAction = () => {
    authStore.registerUser();
    if (action === ACTIONS.REGISTER) {
      return;
    }
    // send some action to backend
  };

  return (
    <NoScrollLayoyt centeredContent>
      <SCard width={350}>
        <SCardHeader>
          Please {authStore.user.username} {action}
        </SCardHeader>
        <SCardBody>
          <SList>
            <SListItem>
              <STextline
                placeholder="Login"
                onInput={validateLogin}
                error={loginError}
                type="text"
              />
            </SListItem>
            <SListItem>
              <STextline
                placeholder="Password"
                type={passwordType}
                onChange={validatePassword}
                error={passwordError}
                appendIcon={passwordIcon}
                clickAppend={togglePasswordType}
              ></STextline>
            </SListItem>
          </SList>
          <SCardActions>
            <SButton onClick={tryAction}>{getActionAsText()}</SButton>
          </SCardActions>
        </SCardBody>
        <SCardSubActions>
          <SLink to={getOppositeActionRoute()}>
            {getActionAsText() + " instead"}
          </SLink>
        </SCardSubActions>
      </SCard>
    </NoScrollLayoyt>
  );
};
