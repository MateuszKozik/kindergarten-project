import { BrowserRouter as Router, Route } from "react-router-dom";
import Address from "./Pages/Address/Address";
import AddAddress from "./Pages/Address/AddAddress";
import UpdateAddress from "./Pages/Address/UpdateAddress";



function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/address" component={Address} />
				<Route exact path="/addAddress" component={AddAddress} />
				<Route exact path="/updateAddress/:id" component={UpdateAddress} />

			</div>
		</Router>
	);
}

export default App;
