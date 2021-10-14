import React, { Component } from "react";
import Navbar from "../Navbar";


import {
	getChildes,
    deleteChild
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
		data: []

	};

	componentDidMount() {
		getChildes().then((res) => {
			this.setState({ data: [res.data] });
        });
        

	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	


	render() {
        console.log(this.state.data)
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
															this.props.history.push(`/updateChild/${child.id}`)
														}}
													>
														Aktualizuj
												</Button>
													<Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
                                                           
                                                            deleteChild(child.id).then((res) => {
                                                                if(res && res.status === 200){
                                                                   window.location.href = "/child";
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
								this.props.history.push(`/addChild`)
							}
						>
							Dodaj dziecko
						</Button>
					</Grid>
					
				</Grid>

			</>
		);
	}
}



export default Child;
