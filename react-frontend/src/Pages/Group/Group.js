import React, { Component } from "react";
import Navbar from "../Navbar";

import { getGroups, deleteGroup } from "../../actions/groupActions";
import { getEmployees } from "../../actions/employeeActions";

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

export class Group extends Component {
	state = {
		data: [],
		employee: []
	};

	componentDidMount() {
		getGroups().then((res) => {
			this.setState({ data: [res.data] });
		});
		getEmployees().then((res) => {
			this.setState({ employee: [res.data] });
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
											<Typography>Nazwa</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Wolne miejsce</Typography>
										</TableCell>

										<TableCell>
											<Typography align="center">Pracownik</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Akcja</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.data[0] &&
										this.state.data[0].map((group) => {
											return (
												<TableRow key={group.id}>
													<TableCell>
														<Typography>{group.name}</Typography>
													</TableCell>
													<TableCell>
														<Typography align="center">
															{group.freePlaces}
														</Typography>
													</TableCell>
													<TableCell>
														{this.state.employee[0] &&
															this.state.employee[0].map((employee) => {
																return (
																	<Typography align="center">
																		{group.employeeId === employee.id
																			? employee.name + " " + employee.surname
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
																	`/updateGroup/${group.id}`
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
																deleteGroup(group.id).then((res) => {
																	if (res && res.status === 200) {
																		window.location.href = "/group";
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
							onClick={() => this.props.history.push(`/addGroup`)}
						>
							Dodaj grupe
						</Button>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default Group;
