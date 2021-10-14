import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    getUser,
    updateUser
} from "../../actions/userActions";
import {
    getRoles
} from "../../actions/roleActions";

import {
	Grid,
	Typography,
	Button,
    TextField,
    Select,
    MenuItem,
    InputLabel ,
    FormControl
} from "@material-ui/core";



class UpdateUser extends Component {
	state = {
        Id: "",
		email: "",
        password: "",
        enabled: true,
        roleId: "",
        role: [],
        data: []
	};
    componentDidMount() {
        
		getUser(this.props.match.params.id).then((res) => {
            this.setState({ Id: res.data.id, email: res.data.email,  password: res.data.password,  enabled: res.data.enabled,  roleId: res.data.roleId  });
            
        });
        getRoles().then((res) => {
			this.setState({ role: [res.data] });
        });
    }
    
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    

    handleUpdateUser = () => {
		const {Id, email, password, enabled,roleId} = this.state;
		const user = {Id, email, password, enabled,roleId};
        updateUser(user).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/user";
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
							Aktualizacja użytkownika
						</Typography>
					</Grid>
					
					<Grid item xs={12} style={{ marginTop: 15 }}>
						<Grid container>
							<Grid item xs={false} md={4} />
							<Grid item xs={12} md={4}>
								<Grid container spacing={2}>
                                <Grid item xs={12}>
										<TextField
											
											id="email"
											name="email"
											onChange={this.handleChange}
											label="Email"
											required
                                            variant="outlined"
                                            value={this.state.email}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											
											id="password"
											name="password"
											onChange={this.handleChange}
                                            label="Hasło"
                                            required
                                            variant="outlined"
                                            type="password"
                                            value={this.state.password}
										/>
									</Grid> 
                                    <Grid item xs={12} >
                                    <Select
                                        id="enabled"
                                        name="enabled"
                                        value={this.state.enabled}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        style={{ width: 225 }}
                                        
                                        >
                                        
                                        <option value={true}>Aktywne</option>
                                        <option value={false}>Nieaktywne</option>
                                        
                                        </Select>
									</Grid>   
                                    <Grid item xs={12} >   
                                    <FormControl
                                        required
                                        variant="outlined"
                                    >
                                    <InputLabel id="role-label">Rola</InputLabel>                      
                                        <Select
                                        labelId="role-label"
										id="roleId"
                                        name="roleId"        
										value={this.state.roleId}
                                        onChange={this.handleChange}
                                        label="Rola"                                    
                                        style={{ width: 225 }}
									>
										
										{this.state.role[0] && this.state.role[0].map((role) => (
												<MenuItem
													key={role.id}
													value={role.id}
												>
													{role.name}
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
						<Button  variant="contained" color="primary" onClick={this.handleUpdateUser}>
                            Aktualizuj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default UpdateUser;
