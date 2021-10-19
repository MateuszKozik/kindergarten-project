import React, { Component } from "react";
import Navbar from "../Navbar";
import {
	getByEmployee
} from "../../actions/payoutActions";
import {
	getByUser
} from "../../actions/employeeActions";


import {
	Grid,
	Typography,

	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from "@material-ui/core";




export class PayoutEmployee extends Component {
	state = {
		data: []

	};

	componentDidMount() {

        const token = localStorage.getItem("token");
		if (token) {
			var base64Url = token.split(".")[1];
			var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
			var jsonPayload = decodeURIComponent(
				atob(base64)
					.split("")
					.map(function (c) {
						return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
					})
					.join("")
			);
			var user = JSON.parse(jsonPayload);
            
        }
        getByUser(user.Id).then((res) => {
			if(res.data.id){
				getByEmployee(res.data.id).then((res) => {
					this.setState({ data: [res.data] });
				});
			}
		});
		
		
		
		
		

	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	


	render() {
		
		return (
			<>
				<Navbar/>
				<Grid
					container
					spacing={1}
					style={{ textAlign: "center", marginTop: 10 }}
				>
					<Grid item xs={12}>

						<TableContainer>
							<Table>
								<TableHead>

									<TableRow>
										<TableCell >
											<Typography align="center">Data wypłaty</Typography>
										</TableCell>
										<TableCell >
											<Typography align="left">Kwota</Typography>
										</TableCell>
										
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.data[0] && this.state.data[0].map((payout) => {
										
										return (
											<TableRow key={payout.id}>
                                                
												<TableCell>
													<Typography align="center">
														
                                                        {payout.payoutDate.substring(0, 10)}
													</Typography>
												</TableCell>
                                                <TableCell>
													<Typography align="left">
														{payout.amount+" zł"}
													</Typography>
												</TableCell>
                                                
													
												
											</TableRow>

										);
									
									})}

								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
                   
					
				</Grid>

			</>
		);
	}
}



export default PayoutEmployee;
