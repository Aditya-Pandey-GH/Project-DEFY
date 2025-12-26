import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import GHGraph from "./Components/GHGraph";
import LCGraph from "./Components/LCGraph";

const Routings = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/github" element={<GHGraph />} />
					<Route path="/leetcode" element={<LCGraph />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

const App = () => {
	return (
		<div className="flex flex-col">
			<Link to="/github">GitHub Graphs Page</Link>
			<Link to="/leetcode">LeetCode Graphs Page</Link>
		</div>
	);
};

export default Routings;
