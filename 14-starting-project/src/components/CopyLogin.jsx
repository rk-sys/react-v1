import { useState, useEffect } from "react";

export default function Login() {

  const [enteredValues, setEnteredValues] = useState({ email: '', password: '' })
  const [errors,setErrors] = useState({ email: false, password: false })

  function handleSubmit(event) {
    event.preventDefault()
  }

  const emailIsInvalid = !enteredValues.email.includes('@')

  function handlerInputBlur(field) {
    setErrors(prevState => ({
      ...prevState,
      [field]: true
    }))
  }

  function handleEnteredValues(identifier, value) {
    setEnteredValues(prevState => ({ ...prevState, [identifier]: value }))
    setErrors(prevState => ({
      ...prevState,
      [identifier]: false
    }))
  }

  useEffect(() => {
    console.log(1)
  }, [enteredValues])

  return (
    <form onSubmit={ handleSubmit }>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email"
                 type="email"
                 name="email"
                 value={ enteredValues.email }
                 onBlur={ () => handlerInputBlur('email') }
                 onChange={ (event) => handleEnteredValues('email', event.target.value) }/>
          <div className="control-error">{ errors.email && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password"
                 type="password"
                 name="password"
                 value={ enteredValues.password }
                 onBlur={ () => handlerInputBlur('password') }
                 onChange={ (event) => handleEnteredValues('password', event.target.value) }/>
          <div className="control-error">{ errors.password && <p>Please enter a valid password</p> }</div>

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
