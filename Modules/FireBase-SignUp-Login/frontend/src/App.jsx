import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContext";
import ProtectedRoute from "./components/utils/ProtectedRoutes";
import Login from "./components/pages/Login";
import Signup from "./components/pages/SignUp";
import SomePage from "./components/pages/SomePage";

const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<SomePage />
							</ProtectedRoute>
						}
					/>
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default App;
