import { Link } from "react-router-dom";

const Login = () => {
	const handleLogin = (e) => {
		e.preventDefault();
		// Handle login logic here
	};
	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<label htmlFor="email">Email: </label>
				<input type="text" name="email" id="email" />
				<br />
				<label htmlFor="password">Password: </label>
				<input type="text" name="password" id="password" />
				<br />

				<button type="submit">Log In</button>
				<br />

				<button type="button">Google</button>
				<br />
			</form>
			<Link to="/signup">New here? Create a new account</Link>
		</>
	);
};

export default Login;
