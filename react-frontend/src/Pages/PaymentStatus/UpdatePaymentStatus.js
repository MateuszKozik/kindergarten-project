import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    getPaymentStatus,
    updatePaymentStatus
} from "../../actions/paymentStatusActions";


import {
	Grid,
	Typography,
	Button,
    TextField
} from "@material-ui/core";



class UpdatePaymentStatus extends Component {
	state = {
        Id: "",
		name: "",
        data: []
        
	};
    componentDidMount() {
        
		getPaymentStatus(this.props.match.params.id).then((res) => {
            this.setState({ Id: res.data.id, name: res.data.name  });
            
        });
        
        
        
    }

    
    
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    
    


    handleUpdatePaymentStatus = () => {
		const {Id, name} = this.state;
		const paymentStatus = {Id, name};
        updatePaymentStatus(paymentStatus).then((res) => {
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
							Aktualizacja statusu
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
                                            value={this.state.name}
										/>
									</Grid>
                                      
                                    
								</Grid>
							</Grid>
							<Grid item xs={false} md={4} />
						</Grid>
					</Grid>
					<Grid item xs={12}></Grid>
					
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button  variant="contained" color="primary" onClick={this.handleUpdatePaymentStatus}>
                            Aktualizuj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default UpdatePaymentStatus;
