import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../api/Firebase";
import { useState } from "react";

const SignUp = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async (e) => {
		try {
			e.preventDefault();

			if (!firstName || !lastName || !email || !password) {
				alert("Please fill in all fields");
				return;
			}

			if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
				alert("Please enter a valid email address");
				return;
			}

			const formData = {
				firstName,
				lastName,
				email,
				password,
			};

			const userRef = collection(db, "users");
			await addDoc(userRef, formData);
		} catch (error) {
			console.error(error);
		}
	};

	const handleGoogleAuth = () => {
		// Handle Google authentication logic here
	};

	return (
		<>
			<h1>Sign Up</h1>
			<form onSubmit={handleSignUp}>
				<label htmlFor="first-name">First Name: </label>
				<input type="text" name="first-name" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
				<br />
				<label htmlFor="last-name">Last Name: </label>
				<input type="text" name="last-name" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
				<br />
				<label htmlFor="email">Email: </label>
				<input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				<br />
				<label htmlFor="password">Password: </label>
				<input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
				<br />

				<button type="submit">Sign Up</button>
				<br />

				<button type="button" onClick={handleGoogleAuth}>
					Google
				</button>
				<br />
			</form>
			<Link to="/login">Already have an account? Log in here</Link>
		</>
	);
};

export default SignUp;
