import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    addChild
} from "../../actions/childActions";

import {
	Grid,
	Typography,
	Button,
	TextField
} from "@material-ui/core";



class AddChild extends Component {
	state = {
		name: "",
        surname: "",
        pesel: "",
        specialRequirements: ""
        
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    


    handleAddChild = () => {
		const {name,surname,pesel,specialRequirements} = this.state;
		const child = {name,surname,pesel,specialRequirements};
        addChild(child).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/child";
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
							Dodanie dziecka
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
											
											id="pesel"
											name="pesel"
											onChange={this.handleChange}
											label="Pesel"
											required
											variant="outlined"
										/>
									</Grid>  
                                    <Grid item xs={12}>
										<TextField
											
											id="specialRequirements"
											name="specialRequirements"
											onChange={this.handleChange}
											label="Wymagania"
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
						<Button  variant="contained" color="primary" onClick={this.handleAddChild}>
							Dodaj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default AddChild;
