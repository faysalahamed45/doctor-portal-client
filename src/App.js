import React, { createContext, useState } from "react";
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./components/AddDoctor/AddDoctor";
// import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
			<Switch>
				<Route path='/home'>
					<Home></Home>
				</Route>
				<Route exact path='/'>
					<Home></Home>
				</Route>
				<Route path='/appointment'>
						<Appointment></Appointment>
					</Route>
					<Route path='/dashboard/appointment'>
						<Dashboard></Dashboard>
					</Route>
					<Route path='/login'>
					<Login></Login>
					</Route>
					<Route path='/doctor/patients'>
            <AllPatients></AllPatients>
					</Route>
					<Route path='/doctor/adddoctor'>
						 <AddDoctor></AddDoctor>
					</Route>
				<Route path='*'>
					{/* <NoMatch></NoMatch> */}
				</Route>
			</Switch>
    </Router>
		    </UserContext.Provider >
  );
}

export default App;
