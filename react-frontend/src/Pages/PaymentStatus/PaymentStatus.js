import React, { Component } from "react";
import Navbar from "../Navbar";
import {
	getPaymentStatuses,
    deletePaymentStatus
} from "../../actions/paymentStatusActions";


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




export class PaymnetStatus extends Component {
	state = {
		data: []

	};

	componentDidMount() {
		getPaymentStatuses().then((res) => {
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
											<Typography >Nazwa</Typography>
										</TableCell>
										
										<TableCell >
											<Typography align="center">Akcje</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.data[0] && this.state.data[0].map((paymentStatus) => {
										
										return (
											<TableRow key={paymentStatus.id}>
                                               
												<TableCell>
													<Typography >
														
                                                        {paymentStatus.name}
													</Typography>
												</TableCell>
                                                
													
												<TableCell align="center">
                                                <Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
															this.props.history.push(`/updatePaymentStatus/${paymentStatus.id}`)
														}}
													>
														Aktualizuj
												</Button>
													<Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
                                                           
                                                            deletePaymentStatus(paymentStatus.id).then((res) => {
                                                                if(res && res.status === 200){
                                                                   window.location.href = "/paymentStatus";
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
								this.props.history.push(`/addPaymentStatus`)
							}
						>
							Dodaj Status
						</Button>
					</Grid>
					
				</Grid>

			</>
		);
	}
}



export default PaymnetStatus;
