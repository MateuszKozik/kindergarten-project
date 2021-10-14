import React, { Component } from "react";
import Navbar from "../Navbar";
import {
	getSaveStatuses,
    deleteSaveStatus
} from "../../actions/saveStatusActions";


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




export class SaveStatus extends Component {
	state = {
		data: []

	};

	componentDidMount() {
		getSaveStatuses().then((res) => {
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
									{this.state.data[0] && this.state.data[0].map((saveStatus) => {
										
										return (
											<TableRow key={saveStatus.id}>
                                               
												<TableCell>
													<Typography >
														
                                                        {saveStatus.name}
													</Typography>
												</TableCell>
                                                
													
												<TableCell align="center">
                                                <Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
															this.props.history.push(`/updateSaveStatus/${saveStatus.id}`)
														}}
													>
														Aktualizuj
												</Button>
													<Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
                                                           
                                                            deleteSaveStatus(saveStatus.id).then((res) => {
                                                                if(res && res.status === 200){
                                                                   window.location.href = "/saveStatus";
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
								this.props.history.push(`/addSaveStatus`)
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



export default SaveStatus;
