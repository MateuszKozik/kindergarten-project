import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    addEmployee
} from "../../actions/employeeActions";
import {
    registerEmployee
} from "../../actions/userActions";
import {
	getAddresses
} from "../../actions/addressActions";
import {
    getUsers
} from "../../actions/userActions";


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



class AddEmployee extends Component {
	state = {
		name: "",
        surname: "",
        phoneNumber: "",
        position: "",
        salary: "",
		email: "",
        password: "",
        addressId: "",
        userId: "",
		address: [],
        user: []
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleChangeNumber = (e) => {
		this.setState({ [e.target.name]: parseInt(e.target.value) });
    };

    componentDidMount() {
		getAddresses().then((res) => {
			this.setState({ address: [res.data] });
        });
        getUsers().then((res) => {
			this.setState({ user: [res.data] });
        });
    }
    

    handleAddEmployee = () => {
		
		const {email,password} = this.state;
		const user = {email, password};
		registerEmployee(user).then((res) =>{
			this.setState({userId: res.data.id});
			const {name,surname,phoneNumber,position,salary,addressId,userId} = this.state;
			const employee = {name,surname,phoneNumber,position,salary,addressId,userId};
				addEmployee(employee).then((res) => {
					if(res && res.status === 200){
						window.location.href = "/employee";
					}
				});
			
			
		});
	
	};

    render() {
		return (
			<>	
				<Navbar/>
				<Grid container style={{ textAlign: "center", marginTop: 15 }}>
                    <Grid item xs={12}>
						<Typography variant="h5">
							Dodanie pracownika
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
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											
											id="surname"
											name="surname"
											onChange={this.handleChange}
											label="Nazwisko"
											required
											variant="outlined"
										/>
									</Grid>
                                    <Grid item xs={12}>
										<TextField	
											id="phoneNumber"
											name="phoneNumber"
											onChange={this.handleChange}
											label="Numer telefonu"
											required
											variant="outlined"
										/>
									</Grid>
                                    <Grid item xs={12}>
										<TextField	
											id="position"
											name="position"
											onChange={this.handleChange}
											label="Stanowisko"
											required
											variant="outlined"
										/>
									</Grid>
                                    <Grid item xs={12}>
										<TextField	
											id="salary"
											name="salary"
											onChange={this.handleChangeNumber}
											label="Płaca"
                                            type="number"
											required
											variant="outlined"
										/>
									</Grid>  
                                    <Grid item xs={12} >   
                                    <FormControl
                                        required
                                        variant="outlined"
                                    >
                                    <InputLabel id="address-label">Adres</InputLabel>                      
                                        <Select
                                        labelId="address-label"
										id="addressId"
                                        name="addressId"        
										value={this.state.addressId}
                                        onChange={this.handleChange}
                                        label="Adres"                                    
                                        style={{ width: 225 }}
									>
										
										{this.state.address[0] && this.state.address[0].map((address) => (
												<MenuItem
													key={address.id}
													value={address.id}
												>
													{address.city+","+address.street+","+address.postCode}
												</MenuItem>
                                                
                                        ))}
									</Select> 
                                    </FormControl>   
									</Grid> 
                                    <Grid item xs={12}>
										<TextField
											
											id="email"
											name="email"
											onChange={this.handleChange}
											label="Email"
											required
                                            variant="outlined"
                                            
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
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={false} md={4} />
						</Grid>
					</Grid>
					<Grid item xs={12}></Grid>
					
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button  variant="contained" color="primary" onClick={this.handleAddEmployee}>
							Dodaj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default AddEmployee;
