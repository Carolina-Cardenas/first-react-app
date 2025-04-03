import { useState } from "react";
import users from "../Data/User";

function LoginForm({ setActiveUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      setActiveUser(userFound.username);
      setError("");
    } else {
      setError("User or password incorrect");
    }
  };

  return (
    <section className="login-container">
      <h2>Start session</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="input-group">
          <input
            className="loginForm__input"
            type="text"
            placeholder="userName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            className="loginForm__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="loginForm__button" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
