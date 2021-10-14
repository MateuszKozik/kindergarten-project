import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    addAddress
} from "../../actions/addressActions";

import {
	Grid,
	Typography,
	Button,
	TextField
} from "@material-ui/core";



class AddAddress extends Component {
	state = {
		street: "",
        houseNumber: 0,
        flatNumber: 0,
        postCode: "",
        city: ""
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    

	handleChangeNumber = (e) => {
		this.setState({ [e.target.name]: parseInt(e.target.value) });
    };

    handleAddAddress = () => {
		const {street,houseNumber,flatNumber,postCode,city} = this.state;
		const address = {street,houseNumber,flatNumber,postCode,city};
        addAddress(address).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/address";
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
							Dodanie adresu
						</Typography>
					</Grid>
					
					<Grid item xs={12} style={{ marginTop: 15 }}>
						<Grid container>
							<Grid item xs={false} md={4} />
							<Grid item xs={12} md={4}>
								<Grid container spacing={2}>
								<Grid item xs={12}>
										<TextField
											
											id="city"
											name="city"
											onChange={this.handleChange}
											label="Miasto"
											required
											variant="outlined"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											
											id="street"
											name="street"
											onChange={this.handleChange}
											label="Ulica"
											required
											variant="outlined"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											
											id="houseNumber"
											name="houseNumber"
											onChange={this.handleChangeNumber}
											label="Numer domu"
											type="number"
											variant="outlined"
										/>
									</Grid>  
                                    <Grid item xs={12}>
										<TextField
											
											id="flatNumber"
											name="flatNumber"
											onChange={this.handleChangeNumber}
											label="Numer mieszkania"
                                            type="number"
											variant="outlined"
										/>
									</Grid> 
                                    <Grid item xs={12}>
										<TextField
											
											id="postCode"
											name="postCode"
											onChange={this.handleChange}
											label="Kod pocztowy"
											required
											variant="outlined"
										/>
									</Grid> 
                                    
								</Grid>
							</Grid>
							<Grid item xs={false} md={4} />
						</Grid>
					</Grid>
					<Grid item xs={12}></Grid>
					
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button  variant="contained" color="primary" onClick={this.handleAddAddress}>
							Dodaj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default AddAddress;
