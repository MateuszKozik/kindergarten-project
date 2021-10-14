import { BrowserRouter as Router, Route } from "react-router-dom";
import Address from "./Pages/Address/Address";
import AddAddress from "./Pages/Address/AddAddress";
import UpdateAddress from "./Pages/Address/UpdateAddress";

import Child from "./Pages/Child/Child";
import AddChild from "./Pages/Child/AddChild";
import UpdateChild from "./Pages/Child/UpdateChild";



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

			</div>
		</Router>
	);
}

export default App;
