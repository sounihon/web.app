import { ArrowRight16 } from "@carbon/icons-react";
import { Button, TextInput } from "carbon-components-react";
import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import { NoScrollLayoyt } from "../../layout/NoScroll.Layout";
import { validateNotEmptyString } from "../../utils/validations";
import "./Login.scss";

export enum ELoginState {
  START,
  LOGIN,
  REGISTER,
}

export const Login: FC = observer(() => {
  const [username, setUsername] = useState("");
  const [stage, setStage] = useState(ELoginState.START);

  const onButtonClick = () => {
    if (!validateNotEmptyString(username)) {
      // show some error
    }

    switch (stage) {
      case ELoginState.START:
        // check if login exists
        setStage(ELoginState.REGISTER);
        break;
      case ELoginState.LOGIN:
        break;
      case ELoginState.REGISTER:
        break;
    }
  };

  return (
    <NoScrollLayoyt centeredContent={true}>
      <div className="Login">
        <div className="Login-Header">
          Log in
          {stage !== ELoginState.START ? (
            <div className="Login-Header__sub">
              Loggin in as <span>{username} </span>.
            </div>
          ) : undefined}
        </div>

        <TextInput
          id="login"
          labelText="Username"
          onChange={(evt) => setUsername(evt.target.value)}
        ></TextInput>

        <Button onClick={onButtonClick} renderIcon={ArrowRight16}>
          Continue
        </Button>
      </div>
    </NoScrollLayoyt>
  );
});
