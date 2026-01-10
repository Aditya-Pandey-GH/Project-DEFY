import { useState, useEffect } from "react";
import "./SignIn.css";
import signUp from "../assets/signUP.png";
import logo from "../assets/Logo.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Load data from localStorage when page loads
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRemember(true);
    }
  }, []);

  function handleLogin() {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (remember) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }

    alert("Logged in successfully ✅");
  }

  return (
    <div className="signIn-container">
      <div className="signIn-card">

        {/* LEFT PANEL */}
        <div className="left-panel">
          <img src={signUp} alt="SignIn" className="bg-image" />

          <div className="top-bar">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="back">← Back to website</div>
          </div>

          <div className="hero-text">
            <h1>Build</h1>
            <h1>Learn</h1>
            <h1>Repeat.</h1>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <h2>Welcome Back!</h2>
          <p className="login-text">
            Don't have an account? <a href="#">SignUp</a>
          </p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="eye" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <button className="btn-primary" onClick={handleLogin}>
            Log In
          </button>

          <div className="terms">
            <div className="remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label>Remember Me</label>
            </div>

            <a href="#" className="forgot">Forgot Your Password?</a>
          </div>

          <div className="divider">
            <span></span>
            <p>or login with</p>
            <span></span>
          </div>

          <div className="social-buttons">
            <button className="google">Google</button>
          </div>
        </div>

      </div>
    </div>
  );
}
