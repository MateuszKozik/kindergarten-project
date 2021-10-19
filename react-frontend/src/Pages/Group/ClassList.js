import React, { Component } from "react";
import Navbar from "../Navbar";


import {
	getChildes
} from "../../actions/childActions";
import {
	getByEmployee
} from "../../actions/groupActions";
import {
	getByUser
} from "../../actions/employeeActions";
import {
	getByGroup
} from "../../actions/childActions";


import {
	Grid,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from "@material-ui/core";




export class ClassList extends Component {
	state = {
		data: [],
        child: [],
        name: ""

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
			if(res.data.id){
				getByEmployee(res.data.id).then((res) => {
				
					this.setState({ name: res.data[0].name });
					
					getByGroup(res.data[0].id).then((res) => {
						
					this.setState({ data: [res.data[0].saves] });        
							
					});
				});
			}
        });
        getChildes().then((res) => {
              this.setState({ child: [res.data] }); 
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
                                <Typography style={{ fontSize: 30 }} align="center">Grupa {" "+this.state.name}</Typography>
									
								</TableHead>
								<TableBody>
									{this.state.data[0] && this.state.data[0].map((group) => {
										return (
											<TableRow key={group.id}>
												
                                                <TableCell>
												{this.state.child[0] && this.state.child[0].map((child) => {
													return(
													<Typography align="center">
														{group.childId === child.id ? child.name+" "+ child.surname:''}
														
													</Typography>
													)
												})}
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



export default ClassList;
