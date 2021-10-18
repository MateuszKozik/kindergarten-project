import React, { Component } from "react";
import Navbar from "../Navbar";


import {
	getSaves
} from "../../actions/saveActions";
import {
	getChildes
} from "../../actions/childActions";
import {
	getGroups
} from "../../actions/groupActions";
import {
	getSaveStatuses
} from "../../actions/saveStatusActions";
import {
	unsubscribe
} from "../../actions/saveActions";
import {
	pay
} from "../../actions/paymentActions";

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
        getSaves().then((res) => {
			this.setState({ data: [res.data] });
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
											<Typography >Dziecko</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Grupa</Typography>
										</TableCell>
										
										<TableCell >
											<Typography align="center">Data zapisu</Typography>
										</TableCell>
                                        <TableCell >
											<Typography align="center">Status</Typography>
										</TableCell>
                                        <TableCell >
											<Typography align="center">Akcja</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.data[0] && this.state.data[0].map((save) => {
										return (
											<TableRow key={save.id}>
                                                <TableCell>
												{this.state.child[0] && this.state.child[0].map((child) => {
													return(
													<Typography align="center">
														{save.childId === child.id ? child.name+","+ child.surname:''}
														
													</Typography>
													)
												})}
												</TableCell>
                                                <TableCell>
												{this.state.group[0] && this.state.group[0].map((group) => {
													return(
													<Typography align="center">
														{save.groupId === group.id ? group.name:''}
														
													</Typography>
													)
												})}
												</TableCell>
												
                                                <TableCell>
													<Typography align="center">
														{save.savingDate.substring(0, 10)}
													</Typography>
												</TableCell>
                                                <TableCell>
												{this.state.status[0] && this.state.status[0].map((status) => {
													return(
													<Typography align="center">
														{save.statusId === status.id ? status.name:''}
														
													</Typography>
													)
												})}
												</TableCell>
                                                
												
												
												<TableCell align="center">
                                                <Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
															pay(save.id).then((res) => {
                                                                if(res && res.status === 200){
                                                                   window.location.href = "/save";
                                                                }
                                                            });
														}}
													>
														Zapłać
												</Button>
													<Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
															
															pay(save.id).then((res) => {
                                                                if(res && res.status === 200){
                                                                   window.location.href = "/save";
                                                                }
                                                            });
														}}
													>
														Wypisz
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
								this.props.history.push(`/addSave`)
							}
						>
							Dodaj zapis
						</Button>
					</Grid>
					
				</Grid>

			</>
		);
	}
}



export default Save;
