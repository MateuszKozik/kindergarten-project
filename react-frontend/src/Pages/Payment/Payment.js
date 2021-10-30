import React, { Component } from "react";
import Navbar from "../Navbar";

import { getPayments, deletePayment } from "../../actions/paymentActions";
import { getSaves } from "../../actions/saveActions";
import { getPaymentStatuses } from "../../actions/paymentStatusActions";
import { getChild } from "../../actions/childActions";
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

export class Payment extends Component {
	state = {
		data: [],
		save: [],
		status: []
	};

	componentDidMount() {
		getPayments().then((res) => {
			this.setState({ data: [res.data] });
		});
		getSaves().then((res) => {
			this.setState({ save: [res.data] });
		});
		getPaymentStatuses().then((res) => {
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
											<Typography align="center">Id zapisu</Typography>
										</TableCell>
										<TableCell>
											<Typography>Termin płatności</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Data wpłaty</Typography>
										</TableCell>

										<TableCell>
											<Typography align="center">Kwota</Typography>
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
										this.state.data[0].map((payment) => {
											return (
												<TableRow key={payment.id}>
													<TableCell>
														{this.state.save[0] &&
															this.state.save[0].map((save) => {
																return (
																	<Typography align="center">
																		{console.log(save)}
																		{payment.saveId === save.id ? save.id : ""}
																	</Typography>
																);
															})}
													</TableCell>
													<TableCell>
														<Typography align="center">
															{payment.paymentDate &&
																payment.paymentDate.substring(0, 10)}
														</Typography>
													</TableCell>
													<TableCell>
														<Typography align="center">
															{payment.payoutDate &&
																payment.payoutDate.substring(0, 10)}
														</Typography>
													</TableCell>

													<TableCell>
														<Typography align="center">
															{payment.amount}
														</Typography>
													</TableCell>
													<TableCell>
														{this.state.status[0] &&
															this.state.status[0].map((status) => {
																return (
																	<Typography align="center">
																		{payment.statusId === status.id
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
														<Button
															style={{ marginLeft: 10 }}
															variant="contained"
															color="primary"
															onClick={() => {
																this.props.history.push(
																	`/updatePayment/${payment.id}`
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
																deletePayment(payment.id).then((res) => {
																	if (res && res.status === 200) {
																		window.location.href = "/payment";
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
							onClick={() => this.props.history.push(`/addPayment`)}
						>
							Dodaj opłate
						</Button>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default Payment;
