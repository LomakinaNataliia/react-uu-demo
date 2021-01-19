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
      <input type="e-mail" placeholder="E-mail" onChange={updateEmail} />
      <input type="password" placeholder="Password" onChange={updatePassword} />
      <input type="submit" value="Login" />
    </form>
  );
}
