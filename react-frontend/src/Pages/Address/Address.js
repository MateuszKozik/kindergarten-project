import React, { Component } from "react";
import Navbar from "../Navbar";


import {
	getAddresses,
    deleteAddress
} from "../../actions/addressActions";

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




export class Address extends Component {
	state = {
		data: []

	};

	componentDidMount() {
		getAddresses().then((res) => {
			this.setState({ data: [res.data] });
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
											<Typography >Miasto</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Ulica</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Numer mieszkania</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Numer domu</Typography>
										</TableCell>
                                        <TableCell >
											<Typography align="center">Kod pocztowy</Typography>
										</TableCell>
                                        <TableCell >
											<Typography align="center">Akcja</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.data[0] && this.state.data[0].map((address) => {
										return (
											<TableRow key={address.id}>
												<TableCell>
													<Typography >
														{address.city}
													</Typography>
												</TableCell>
                                                <TableCell>
													<Typography align="center">
														{address.street}
													</Typography>
												</TableCell>
                                                <TableCell>
													<Typography align="center">
														{address.flatNumber}
													</Typography>
												</TableCell>
                                                <TableCell>
													<Typography align="center">
														{address.houseNumber}
													</Typography>
												</TableCell>
                                                <TableCell>
													<Typography align="center">
														{address.postCode}
													</Typography>
												</TableCell>
												
												
												<TableCell align="center">
                                                <Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
															this.props.history.push(`/updateAddress/${address.id}`)
														}}
													>
														Aktualizuj
												</Button>
													<Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
                                                           
                                                            deleteAddress(address.id).then((res) => {
                                                                if(res && res.status === 200){
                                                                   window.location.href = "/address";
                                                                }
                                                            });
														}}
													>
														Usuń
												</Button>
                                                
												</TableCell>
											</TableRow>

										);
									})}

								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
                    <Grid item xs={12} style={{ textAlign: "left", marginLeft: 10, marginTop: 30 }}>
						<Button
							variant="contained"
							color="primary"
							onClick={() =>
								this.props.history.push(`/addAddress`)
							}
						>
							Dodaj adres
						</Button>
					</Grid>
					
				</Grid>

			</>
		);
	}
}



export default Address;
