import * as React from "react";
import { useState } from "react";
import { Form } from "react-router-dom";

function AuthPage() {
  return (
    <div className="home">
      <h1>Welcome to Lane!</h1>
      <Form className="home__login-form" method="post" action="/login">
        <input aria-label="username" type="text" name="username" />
        <input aria-label="password" type="password" name="password" />
        <input type="submit" />
      </Form>
    </div>
  );
}

export default AuthPage;
