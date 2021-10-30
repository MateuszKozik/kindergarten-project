import React, { Component } from "react";
import Navbar from "../Navbar";

import {
	getParentChilds,
	deleteParentChild
} from "../../actions/parentChildActions";
import { getChildes } from "../../actions/childActions";
import { getParents } from "../../actions/parentActions";

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

export class ParentChild extends Component {
	state = {
		data: [],
		parent: [],
		child: []
	};

	componentDidMount() {
		getParentChilds().then((res) => {
			this.setState({ data: [res.data] });
		});
		getChildes().then((res) => {
			this.setState({ child: [res.data] });
		});
		getParents().then((res) => {
			this.setState({ parent: [res.data] });
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
											<Typography>Rodzic</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">Dziecko</Typography>
										</TableCell>

										<TableCell>
											<Typography align="center">Akcja</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.data[0] &&
										this.state.data[0].map((parentChild) => {
											return (
												<TableRow key={parentChild.id}>
													<TableCell>
														{this.state.parent[0] &&
															this.state.parent[0].map((parent) => {
																return (
																	<Typography align="center">
																		{parentChild.parentId === parent.id
																			? parent.name + " " + parent.surname
																			: ""}
																	</Typography>
																);
															})}
													</TableCell>
													<TableCell>
														{this.state.child[0] &&
															this.state.child[0].map((child) => {
																return (
																	<Typography align="center">
																		{parentChild.childId === child.id
																			? child.name + " " + child.surname
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
																deleteParentChild(parentChild.parentId).then(
																	(res) => {
																		if (res && res.status === 200) {
																			window.location.href = "/parentChild";
																		}
																	}
																);
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
							onClick={() => this.props.history.push(`/addParentChild`)}
						>
							Dodaj powiązanie
						</Button>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default ParentChild;
