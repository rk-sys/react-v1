import { useRef, useState } from "react";

export default function Login() {

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={ email }
            id="email"
            type="email"
            name="email"/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            ref={ password }
            id="password"
            type="password"
            name="password"/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button"
                type="submit">Login
        </button>
      </p>
    </form>
  );
}
