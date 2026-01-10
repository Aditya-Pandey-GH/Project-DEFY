import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
