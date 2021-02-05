import React, { useState } from "react";

export default function LoginForm() {
  let [userEmail, setUserEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (userEmail.length > 0 && password.length > 0) {
      alert(`Loging in with ${userEmail} and ${password}`);
    } else {
      alert(`Please fill in the form`);
    }
  }

  function updateEmail(event) {
    setUserEmail(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="e-mail"
        placeholder="Enter Your E-mail"
        onChange={updateEmail}
        className="field"
      />
      <input
        type="password"
        placeholder="Enter Your Password"
        onChange={updatePassword}
        className="field"
      />
      <input type="submit" value="Login" className="field submit-button" />
    </form>
  );
}
