import React, { Component } from "react";
import Navbar from "../Navbar";
import { getEmployees, deleteEmployee } from "../../actions/employeeActions";
import { getAddresses } from "../../actions/addressActions";
import { getUsers } from "../../actions/userActions";

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

export class Employee extends Component {
	state = {
		data: [],
		address: [],
		user: []
	};

	componentDidMount() {
		getEmployees().then((res) => {
			this.setState({ data: [res.data] });
		});
		getAddresses().then((res) => {
			this.setState({ address: [res.data] });
		});
		getUsers().then((res) => {
			this.setState({ user: [res.data] });
		});
	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<>
				<Navbar />
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
										<TableCell>
											<Typography>Imię</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Telefon</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Stanowisko</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Płaca</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Adres</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Użytkownik</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Akcje</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.data[0] &&
										this.state.data[0].map((employee) => {
											return (
												<TableRow key={employee.id}>
													<TableCell>
														<Typography>
															{employee.name} {employee.surname}
														</Typography>
													</TableCell>
													<TableCell>
														<Typography align="center">
															{employee.phoneNumber}
														</Typography>
													</TableCell>
													<TableCell>
														<Typography align="center">
															{employee.position}
														</Typography>
													</TableCell>
													<TableCell>
														<Typography align="center">
															{employee.salary} zł
														</Typography>
													</TableCell>
													<TableCell>
														{this.state.address[0] &&
															this.state.address[0].map((address) => {
																return (
																	<Typography align="center">
																		{employee.addressId === address.id
																			? address.street +
																			  " " +
																			  address.houseNumber +
																			  ", " +
																			  address.postCode +
																			  " " +
																			  address.city
																			: ""}
																	</Typography>
																);
															})}
													</TableCell>
													<TableCell>
														{this.state.user[0] &&
															this.state.user[0].map((user) => {
																return (
																	<Typography align="center">
																		{employee.userId === user.id
																			? user.email
																			: ""}
																	</Typography>
																);
															})}
													</TableCell>

													<TableCell align="center">
														<Button
															style={{ marginLeft: 10 }}
															variant="contained"
															color="primary"
															onClick={() => {
																this.props.history.push(
																	`/updateEmployee/${employee.id}`
																);
															}}
														>
															Aktualizuj
														</Button>
														<Button
															style={{ marginLeft: 10 }}
															variant="contained"
															color="primary"
															onClick={() => {
																deleteEmployee(employee.id).then((res) => {
																	if (res && res.status === 200) {
																		window.location.href = "/employee";
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
					<Grid
						item
						xs={12}
						style={{ textAlign: "left", marginLeft: 10, marginTop: 30 }}
					>
						<Button
							variant="contained"
							color="primary"
							onClick={() => this.props.history.push(`/addEmployee`)}
						>
							Dodaj pracownika
						</Button>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default Employee;
