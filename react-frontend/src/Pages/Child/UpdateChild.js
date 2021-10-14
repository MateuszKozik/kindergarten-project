import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    getChild,
    updateChild
} from "../../actions/childActions";

import {
	Grid,
	Typography,
	Button,
	TextField
} from "@material-ui/core";



class UpdateChild extends Component {
	state = {
        Id: "",
		name: "",
        surname: "",
        pesel: "",
        specialRequirements: "",
        data: []
	};


    componentDidMount() {
        
		getChild(this.props.match.params.id).then((res) => {
            this.setState({ Id: res.data.id, name: res.data.name,  surname: res.data.surname,  pesel: res.data.pesel,  specialRequirements: res.data.specialRequirements  });
            
        });
        

	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    

    handleUpdateChild = () => {
		const {Id,name,surname,pesel,specialRequirements} = this.state;
		const child = {Id,name,surname,pesel,specialRequirements};
        updateChild(child).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/child";
            }
	    });
	
	};

    render() {
console.log(this.state.data);
		return (
            
			<>	
				<Navbar/>
				<Grid container style={{ textAlign: "center", marginTop: 15 }}>
                    <Grid item xs={12}>
						<Typography variant="h5">
							Aktualizacja dziecka
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
											
											id="surname"
											name="surname"
											onChange={this.handleChange}
											label="Nazwisko"
											required
											variant="outlined"
                                            value={this.state.surname}
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
                                            value={this.state.pesel}
										/>
									</Grid>  
                                    <Grid item xs={12}>
										<TextField
											
											id="specialRequirements"
											name="specialRequirements"
											onChange={this.handleChange}
											label="Wymagania"
											variant="outlined"
                                            value={this.state.specialRequirements}
										/>
									</Grid>
								</Grid>
                            
							</Grid>
							<Grid item xs={false} md={4} />
						</Grid>
					</Grid>
					<Grid item xs={12}></Grid>
					
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button  variant="contained" color="primary" onClick={this.handleUpdateChild}>
							Aktualizuj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default UpdateChild;
