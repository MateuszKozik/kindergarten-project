import React, { Component } from "react";
import Navbar from "../Navbar";
import {
	getUsers,
    deleteUser
} from "../../actions/userActions";

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




export class User extends Component {
	state = {
		data: []

	};

	componentDidMount() {
		getUsers().then((res) => {
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
											<Typography >Email</Typography>
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
									{this.state.data[0] && this.state.data[0].map((user) => {
										return (
											<TableRow key={user.id}>
												<TableCell>
													<Typography >
														{user.email}
													</Typography>
												</TableCell>
                                                <TableCell>
													<Typography align="center">
														{user.enabled === true
															? "Aktywne"
															: user.enabled === false && "Niektywne"
														}

													</Typography>
												</TableCell>
				
												
												<TableCell align="center">
                                                <Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
															this.props.history.push(`/updateUser/${user.id}`)
														}}
													>
														Aktualizuj
												</Button>
													<Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
                                                           
                                                            deleteUser(user.id).then((res) => {
                                                                if(res && res.status === 200){
                                                                   window.location.href = "/user";
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
								this.props.history.push(`/addUser`)
							}
						>
							Dodaj użytkownika
						</Button>
					</Grid>
					
				</Grid>

			</>
		);
	}
}



export default User;
