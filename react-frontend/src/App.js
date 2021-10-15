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

import SaveStatus from "./Pages/SaveStatus/SaveStatus";
import AddSaveStatus from "./Pages/SaveStatus/AddSaveStatus";
import UpdateSaveStatus from "./Pages/SaveStatus/UpdateSaveStatus";

import PaymentStatus from "./Pages/PaymentStatus/PaymentStatus";
import AddPaymentStatus from "./Pages/PaymentStatus/AddPaymentStatus";
import UpdatePaymentStatus from "./Pages/PaymentStatus/UpdatePaymentStatus";

import Save from "./Pages/Save/Save";
import AddSave from "./Pages/Save/AddSave";
import UpdateSave from "./Pages/Save/UpdateSave";

import Payment from "./Pages/Payment/Payment";
import AddPayment from "./Pages/Payment/AddPayment";
import UpdatePayment from "./Pages/Payment/UpdatePayment";

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

				<Route exact path="/saveStatus" component={SaveStatus} />
				<Route exact path="/addSaveStatus" component={AddSaveStatus} />
				<Route exact path="/updateSaveStatus/:id" component={UpdateSaveStatus} />

				<Route exact path="/paymentStatus" component={PaymentStatus} />
				<Route exact path="/addPaymentStatus" component={AddPaymentStatus} />
				<Route exact path="/updatePaymentStatus/:id" component={UpdatePaymentStatus} />

				<Route exact path="/save" component={Save} />
				<Route exact path="/addSave" component={AddSave} />
				<Route exact path="/updateSave/:id" component={UpdateSave} />

				<Route exact path="/payment" component={Payment} />
				<Route exact path="/addPayment" component={AddPayment} />
				<Route exact path="/updatePayment/:id" component={UpdatePayment} />

			</div>
		</Router>
	);
}

export default App;
