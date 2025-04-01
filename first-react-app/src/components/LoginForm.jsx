import { useState } from "react";

function LoginForm() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <input
        className="loginForm__input"
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="loginForm__input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="loginForm__button" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
