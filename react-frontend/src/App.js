import { BrowserRouter as Router, Route } from "react-router-dom";
import Address from "./Pages/Address/Address";
import AddAddress from "./Pages/Address/AddAddress";
import UpdateAddress from "./Pages/Address/UpdateAddress";

import Child from "./Pages/Child/Child";
import AddChild from "./Pages/Child/AddChild";
import UpdateChild from "./Pages/Child/UpdateChild";

import Employee from "./Pages/Employee/Employee";
import AddEmployee from "./Pages/Employee/AddEmployee";
import UpdateEmployee from "./Pages/Employee/UpdateEmployee";

import User from "./Pages/User/User";
import AddUser from "./Pages/User/AddUser";
import UpdateUser from "./Pages/User/UpdateUser";

import Group from "./Pages/Group/Group";
import AddGroup from "./Pages/Group/AddGroup";
import UpdateGroup from "./Pages/Group/UpdateGroup";

import Parent from "./Pages/Parent/Parent";
import AddParent from "./Pages/Parent/AddParent";
import UpdateParent from "./Pages/Parent/UpdateParent";

import Payout from "./Pages/Payout/Payout";
import AddPayout from "./Pages/Payout/AddPayout";
import UpdatePayout from "./Pages/Payout/UpdatePayout";

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/address" component={Address} />
				<Route exact path="/addAddress" component={AddAddress} />
				<Route exact path="/updateAddress/:id" component={UpdateAddress} />

				<Route exact path="/child" component={Child} />
				<Route exact path="/addChild" component={AddChild} />
				<Route exact path="/updateChild/:id" component={UpdateChild} />

				<Route exact path="/employee" component={Employee} />
				<Route exact path="/addEmployee" component={AddEmployee} />
				<Route exact path="/updateEmployee/:id" component={UpdateEmployee} />

				<Route exact path="/user" component={User} />
				<Route exact path="/addUser" component={AddUser} />
				<Route exact path="/updateUser/:id" component={UpdateUser} />

				<Route exact path="/group" component={Group} />
				<Route exact path="/addGroup" component={AddGroup} />
				<Route exact path="/updateGroup/:id" component={UpdateGroup} />

				<Route exact path="/parent" component={Parent} />
				<Route exact path="/addParent" component={AddParent} />
				<Route exact path="/updateParent/:id" component={UpdateParent} />

				<Route exact path="/payout" component={Payout} />
				<Route exact path="/addPayout" component={AddPayout} />
				<Route exact path="/updatePayout/:id" component={UpdatePayout} />

			</div>
		</Router>
	);
}

export default App;
