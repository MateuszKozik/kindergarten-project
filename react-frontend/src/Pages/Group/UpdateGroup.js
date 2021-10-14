import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    getGroup,
    updateGroup
} from "../../actions/groupActions";
import {
	getEmployees
} from "../../actions/employeeActions";


import {
	Grid,
	Typography,
	Button,
    TextField,
    Select,MenuItem,
    InputLabel,
    FormControl
} from "@material-ui/core";



class UpdateGroup extends Component {
	state = {
        Id: "",
		name: "",
        freePlaces: "",
        employeeId: "",
        data: [],
        employee: []
	};
    componentDidMount() {
        
		getGroup(this.props.match.params.id).then((res) => {
            this.setState({ Id: res.data.id, name: res.data.name,  freePlaces: res.data.freePlaces, employeeId: res.data.employeeId  });
            
        });
        getEmployees().then((res) => {
			this.setState({ employee: [res.data] });
        });
        
        
    }

    
    
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    handleChangeNumber = (e) => {
		this.setState({ [e.target.name]: parseInt(e.target.value) });
    };
    


    handleUpdateGroup = () => {
		const {Id, name,freePlaces,employeeId} = this.state;
		const group = {Id, name,freePlaces,employeeId};
        updateGroup(group).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/group";
            }
	    });
	
	};

    render() {
        
		return (
			<>	
				<Navbar/>
				<Grid container style={{ textAlign: "center", marginTop: 15 }}>
                    <Grid item xs={12}>
						<Typography variant="h5">
							Aktualizacja grupy
						</Typography>
					</Grid>
					
					<Grid item xs={12} style={{ marginTop: 15 }}>
						<Grid container>
							<Grid item xs={false} md={4} />
							<Grid item xs={12} md={4}>
								<Grid container spacing={2}>
                                <Grid item xs={12}>
										<TextField
											
											id="name"
											name="name"
											onChange={this.handleChange}
											label="Imię"
											required
                                            variant="outlined"
                                            value={this.state.name}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField	
											id="freePlaces"
											name="freePlaces"
											onChange={this.handleChangeNumber}
											label="Wolne miejsce"
                                            type="number"
											required
											variant="outlined"
                                            value={this.state.freePlaces}
										/>
									</Grid>
                                    
                                     
                                    <Grid item xs={12} >  
                                    <FormControl
                                        required
                                        variant="outlined"
                                    >       
                                    <InputLabel id="employee-label">Pracownik</InputLabel>                         
                                        <Select
                                        labelId="employee-label"
										id="employeeId"
										name="employeeId"
										value={this.state.employeeId}
										onChange={this.handleChange}
                                        label="Pracownik"
                                        style={{ width: 225 }}
                                        
                                        
									>
										
										{this.state.employee[0] && this.state.employee[0].map((employee) => (
												<MenuItem
													key={employee.id}
                                                    value={employee.id}
												>
													{employee.name+","+employee.surname}
												</MenuItem>
                                                
                                        ))}
									</Select>    
                                    </FormControl> 
									</Grid>
                                    
								</Grid>
							</Grid>
							<Grid item xs={false} md={4} />
						</Grid>
					</Grid>
					<Grid item xs={12}></Grid>
					
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button  variant="contained" color="primary" onClick={this.handleUpdateGroup}>
                            Aktualizuj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default UpdateGroup;
