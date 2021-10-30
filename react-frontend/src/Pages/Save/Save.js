import React, { Component } from "react";
import Navbar from "../Navbar";

import { getSaves, unsubscribe, getByParent } from "../../actions/saveActions";
import { getChildes } from "../../actions/childActions";
import { getGroups } from "../../actions/groupActions";
import { getSaveStatuses } from "../../actions/saveStatusActions";
import { getByUser } from "../../actions/parentActions";

import { pay } from "../../actions/paymentActions";

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

export class Save extends Component {
	state = {
		data: [],
		group: [],
		child: [],
		status: []
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
			if (res.status === 200) {
				getByParent(res.data.id).then((children) => {
					children && this.setState({ data: [children.data] });
				});
			}
		});

		getGroups().then((res) => {
			this.setState({ group: [res.data] });
		});
		getChildes().then((res) => {
			this.setState({ child: [res.data] });
		});
		getSaveStatuses().then((res) => {
			this.setState({ status: [res.data] });
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
											<Typography>Dziecko</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Grupa</Typography>
										</TableCell>

										<TableCell>
											<Typography align="center">Data zapisu</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Status</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Akcja</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.data[0] &&
										this.state.data[0].map((save) => {
											return (
												<TableRow key={save.id}>
													<TableCell>
														{this.state.child[0] &&
															this.state.child[0].map((child) => {
																return (
																	<Typography>
																		{save.childId === child.id
																			? child.name + " " + child.surname
																			: ""}
																	</Typography>
																);
															})}
													</TableCell>
													<TableCell>
														{this.state.group[0] &&
															this.state.group[0].map((group) => {
																return (
																	<Typography align="center">
																		{save.groupId === group.id
																			? group.name
																			: ""}
																	</Typography>
																);
															})}
													</TableCell>

													<TableCell>
														<Typography align="center">
															{save.savingDate &&
																save.savingDate.substring(0, 10)}
														</Typography>
													</TableCell>
													<TableCell>
														{this.state.status[0] &&
															this.state.status[0].map((status) => {
																return (
																	<Typography align="center">
																		{save.statusId === status.id
																			? status.id === 1
																				? "Zapłacony"
																				: status.id === 3
																				? "Wypisany"
																				: "Nieopłacony"
																			: ""}
																	</Typography>
																);
															})}
													</TableCell>

													<TableCell align="center">
														{save.statusId === 2 ? (
															<Button
																style={{ marginLeft: 10 }}
																variant="contained"
																color="primary"
																onClick={() => {
																	pay(save.id).then((res) => {
																		if (res && res.status === 200) {
																			window.location.href = "/save";
																		}
																	});
																}}
															>
																Zapłać
															</Button>
														) : null}

														{save.statusId !== 3 ? (
															<Button
																style={{ marginLeft: 10 }}
																variant="contained"
																color="primary"
																onClick={() => {
																	unsubscribe(save.id).then((res) => {
																		if (res && res.status === 200) {
																			window.location.href = "/save";
																		}
																	});
																}}
															>
																Wypisz
															</Button>
														) : null}
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

export default Save;
