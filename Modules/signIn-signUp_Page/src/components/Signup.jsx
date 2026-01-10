import { useState } from "react";
import "./Signup.css";
import signUp from "../assets/signUP.png";
import logo from "../assets/Logo.png";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const isFormFilled =
    firstName.trim() &&
    lastName.trim() &&
    email.trim() &&
    password.trim();

  function validate() {
    let newErrors = {};

    // First Name
    if (!/^[A-Za-z]+$/.test(firstName)) {
      newErrors.firstName = "First name should contain only letters";
    }

    // Last Name
    if (!/^[A-Za-z]+$/.test(lastName)) {
      newErrors.lastName = "Last name should contain only letters";
    }

    // Email
    if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Email must be valid";
    }

    // Password
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must contain one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = "Password must contain one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain one number";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.password = "Password must contain one special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    alert("Signup Successful ✅");
  }

  return (
    <div className="signup-container">
      <div className="signup-card">

        {/* LEFT PANEL */}
        <div className="left-panel">
          <img src={signUp} alt="Signup" className="bg-image" />
        

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
          <h2>Create an account</h2>
          <p className="login-text">
            Already have an account? <a href="#">Login</a>
          </p>

          <div className="name-row">
            <div className="fName field">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <small className="error">{errors.firstName}</small>}
            </div>

            <div className="lName field">
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <small className="error">{errors.lastName}</small>}
            </div>
          </div>

          <div className="field">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="field password-box">
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
          {errors.password && <small className="error">{errors.password}</small>}

          <button
            className="btn-primary"
            onClick={handleSubmit}
            disabled={!isFormFilled}
          >
            Create Account
          </button>

          <div className="divider">
            <span></span>
            <p>or register with</p>
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
