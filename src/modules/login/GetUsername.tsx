import { TextIndent16 } from "@carbon/icons-react";
import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  TextInput,
} from "carbon-components-react";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";

export const GetUsername: FC = observer(() => {
  return (
    <Form>
      <FormGroup legendText="">
        <TextInput labelText="Username" id="username"></TextInput>
      </FormGroup>
      <FormGroup legendText="">
        <Button>Submit</Button>
      </FormGroup>
    </Form>
  );
});
