import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    addParent
} from "../../actions/parentActions";
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



class AddParent extends Component {
	state = {
		name: "",
        surname: "",
        phoneNumber: "",
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
    

    handleAddParent = () => {
		const {name,surname,phoneNumber,addressId,userId} = this.state;
		const parent = {name,surname,phoneNumber,addressId,userId};
        addParent(parent).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/parent";
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
							Dodanie rodzica
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
                                    <Grid item xs={12} >  
                                    <FormControl
                                        required
                                        variant="outlined"
                                    >       
                                    <InputLabel id="user-label">Użytkownik</InputLabel>                         
                                        <Select
                                        labelId="user-label"
										id="userId"
										name="userId"
										value={this.state.userId}
										onChange={this.handleChange}
                                        label="Użytkownik"
                                        style={{ width: 225 }}
                                        
									>
										
										{this.state.user[0] && this.state.user[0].map((user) => (
												<MenuItem
													key={user.id}
                                                    value={user.id}
												>
													{user.email}
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
						<Button  variant="contained" color="primary" onClick={this.handleAddParent}>
							Dodaj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default AddParent;
