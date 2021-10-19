import React, { Component } from "react";
import Navbar from "../Navbar";
import {
	getPayouts,
    deletePayout
} from "../../actions/payoutActions";
import {
	getEmployees
} from "../../actions/employeeActions";

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




export class Payout extends Component {
	state = {
		data: [],
		employee: []

	};

	componentDidMount() {
		getPayouts().then((res) => {
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
											<Typography >Pracownik</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Data wypłaty</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Kwota</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Akcje</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.data[0] && this.state.data[0].map((payout) => {
										
										return (
											<TableRow key={payout.id}>
                                                <TableCell>
												{this.state.employee[0] && this.state.employee[0].map((employee) => {
													return(
													<Typography >
														{payout.employeeId === employee.id ? employee.name+","+employee.surname:''}
														
													</Typography>
													)
												})}
												</TableCell>
												<TableCell>
													<Typography align="center">
														
                                                        {payout.payoutDate.substring(0, 10)}
													</Typography>
												</TableCell>
                                                <TableCell>
													<Typography align="center">
														{payout.amount}
													</Typography>
												</TableCell>
                                                
													
												<TableCell align="center">
                                                <Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
															this.props.history.push(`/updatePayout/${payout.id}`)
														}}
													>
														Aktualizuj
												</Button>
													<Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
                                                           
                                                            deletePayout(payout.id).then((res) => {
                                                                if(res && res.status === 200){
                                                                   window.location.href = "/payout";
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
								this.props.history.push(`/addPayout`)
							}
						>
							Dodaj Wypłate
						</Button>
					</Grid>
					
				</Grid>

			</>
		);
	}
}



export default Payout;
