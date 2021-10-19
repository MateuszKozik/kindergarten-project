import React, { Component } from "react";
import Navbar from "../Navbar";


import {
	getChildes
} from "../../actions/childActions";
import {
	getByUser
} from "../../actions/parentActions";
import {
	getIsSaved
} from "../../actions/childActions";

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




export class Child extends Component {
	state = {
		data: [],
		addressId: "",
		status: ""

	};

	

	componentDidMount() {
		getChildes().then((res) => {
			this.setState({ data: [res.data] });
        });
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
			this.setState({ addressId: res.data.addressId });
        });
		
		getIsSaved(1).then((res) => {
			this.setState({ status: res.data });
			
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
											<Typography >Imię</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Nazwisko</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Pesel</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Wymagania</Typography>
										</TableCell>
                                        <TableCell >
											<Typography align="center">Akcja</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.data[0] && this.state.data[0].map((child) => {
										
										return (
											<TableRow key={child.id}>
												<TableCell>
													<Typography >
														{child.name}
													</Typography>
												</TableCell>
                                                <TableCell>
													<Typography align="center">
														{child.surname}
													</Typography>
												</TableCell>
                                                <TableCell>
													<Typography align="center">
														{child.pesel}
													</Typography>
												</TableCell>
                                                <TableCell>
													<Typography align="center">
														{child.specialRequirements}
													</Typography>
												</TableCell>
                                                	
												
												<TableCell align="center">
												
												
												<Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
                                                           localStorage.setItem("childId",child.id);
														   window.location.href = "/addSave";
														}}
													>
														Zapisz
												</Button>
												
											
												</TableCell>
												
											</TableRow>

										);
									
									})}

								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
					{this.state.addressId != null ?(
                    <Grid item xs={12} style={{ textAlign: "left", marginLeft: 10, marginTop: 30 }}>
						<Button
							variant="contained"
							color="primary"
							onClick={() =>
								this.props.history.push(`/addChild`)
							}
						>
							Dodaj dziecko
						</Button>
					</Grid>
					):null}
					
				</Grid>

			</>
		);
	}
}



export default Child;
