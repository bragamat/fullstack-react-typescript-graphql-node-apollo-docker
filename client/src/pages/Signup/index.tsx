import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Container, Form, Input } from "./styles";

import { SINGUP_USER } from "../../mutations";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [singupUser, { error }] = useMutation(SINGUP_USER);

  const signUp = (event: React.FormEvent) => {
    event.preventDefault();
    singupUser({
      variables: {
        username,
        email,
        password,
      },
    })
      .then(() => {
        setUsername("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
      })
      .catch(() => console.log("there is an error"));
  };
  return (
    <Container>
      <h3>Signup </h3>
      <Form onSubmit={signUp}>
        <Input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Input
          name="passwordConfirmation"
          type="password"
          value={passwordConfirmation}
          placeholder="Confirm Password"
          onChange={({ target }) => setPasswordConfirmation(target.value)}
        />
        <input type="submit" value="Signup" />
        {error && <p>{error.message}</p>}
      </Form>
    </Container>
  );
};
