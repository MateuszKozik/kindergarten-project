import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    addPaymentStatus
} from "../../actions/paymentStatusActions";





import {
	Grid,
	Typography,
	Button,
    TextField
} from "@material-ui/core";



class AddPaymentStatus extends Component {
	state = {
		name: ""
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	

    
    

    handleAddPaymentStatus = () => {
		const {name} = this.state;
		const paymentStatus = {name};
        addPaymentStatus(paymentStatus).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/paymentStatus";
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
							Dodanie statusu
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
											label="Nazwa"
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
						<Button  variant="contained" color="primary" onClick={this.handleAddPaymentStatus}>
							Dodaj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default AddPaymentStatus;
