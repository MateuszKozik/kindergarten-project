import React, { Component } from "react";
import Navbar from "../Navbar";
import {
	getByUser,
	getParents
} from "../../actions/parentActions";
import {
	getAddress
} from "../../actions/addressActions";
import {
	getUser
} from "../../actions/userActions";

import {
	Grid,
	Typography,
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from "@material-ui/core";




export class Parent extends Component {
	state = {
		data: [],
		address: [],
		user: [],
		userr: [],
		userId: ""

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
			this.setState({ userId: user.Id });
			
		
		}
		getByUser(user.Id).then((res) => {
			this.setState({ userr: res.data });
			
			if(res.data.userId){
				getUser(res.data.userId).then((res) => {
					this.setState({ user: res.data });
					
				});
			}
			if(res.data.addressId){
				getAddress(res.data.addressId).then((res) => {
					this.setState({ address: res.data });
				});
			}
			
		});
		
		getParents().then((res) => {
			this.setState({ data: [res.data] });
			
		});
		
		
		
		

	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	


	render() {
		console.log(this.state.userr.length);
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
											<Typography >Imię</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Nazwisko</Typography>
										</TableCell>
                                       
										<TableCell >
											<Typography align="center">Telefon</Typography>
										</TableCell>
										
                                        <TableCell >
											<Typography align="center">Adres</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Użytkownik</Typography>
										</TableCell>
										
									</TableRow>
								</TableHead>
								<TableBody>
								<TableRow key={this.state.userr.id}>
												<TableCell>
													<Typography >
														{this.state.userr.name}
													</Typography>
												</TableCell>
												<TableCell>
													<Typography align="center">
														{this.state.userr.surname}
													</Typography>
												</TableCell>
												<TableCell>
													<Typography align="center">
														{this.state.userr.phoneNumber}
													</Typography>
												</TableCell>
												<TableCell>
													<Typography align="center">
														{this.state.address.city && this.state.address.city+","+this.state.address.street && this.state.address.street}
													</Typography>
												</TableCell>
												<TableCell>
													<Typography align="center">
														{this.state.user.email && this.state.user.email}
													</Typography>
												</TableCell>
                                               
											</TableRow>

								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
                    <Grid item xs={12} style={{ textAlign: "left", marginLeft: 10, marginTop: 30 }}>
						{!this.state.userr ?
						<Button
							variant="contained"
							color="primary"
							onClick={() =>
								this.props.history.push(`/addParent`)
							}
						>
							Uzupełni dane 
						</Button>
						:null}
					</Grid>
					
				</Grid>

			</>
		);
	}
}



export default Parent;
