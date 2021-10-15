import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    addPayment
} from "../../actions/paymentActions";
import {
	getSaves
} from "../../actions/saveActions";
import {
	getPaymentStatuses
} from "../../actions/paymentStatusActions";


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



class AddPayment extends Component {
	state = {
		amount: "",
        paymentDate: "",
        payoutDate: "",
        statusId: "",
        saveId: "",
		save: [],
        status: []

	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
    handleChangeNumber = (e) => {
		this.setState({ [e.target.name]: parseInt(e.target.value) });
    };
	

    componentDidMount() {
		getSaves().then((res) => {
			this.setState({ save: [res.data] });
        });
        getPaymentStatuses().then((res) => {
			this.setState({ status: [res.data] });
		});
       
    }
    

    handleAddPayment = () => {
		const {amount,paymentDate,payoutDate,statusId,saveId } = this.state;
		const payment = {amount,paymentDate,payoutDate,statusId,saveId};
        addPayment(payment).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/payment";
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
							Dodanie opłaty
						</Typography>
					</Grid>
					
					<Grid item xs={12} style={{ marginTop: 15 }}>
						<Grid container>
							<Grid item xs={false} md={4} />
							<Grid item xs={12} md={4}>
								<Grid container spacing={2}>
                                <Grid item xs={12}>
										<TextField

											id="paymentDate"
											name="paymentDate"
											onChange={this.handleChange}
                                            label="Termin płatności"
                                            required
                                            type="date"
											variant="outlined"
											style={{ width: 225 }}
                                            InputLabelProps={{
                                                shrink: true
                                            }}
										/>
									</Grid>
                                    <Grid item xs={12}>
										<TextField

											id="payoutDate"
											name="payoutDate"
											onChange={this.handleChange}
                                            label="Data wpłaty"
                                            required
                                            type="date"
											variant="outlined"
											style={{ width: 225 }}
                                            InputLabelProps={{
                                                shrink: true
                                            }}
										/>
									</Grid>
                                <Grid item xs={12} >   
                                    <FormControl
                                        required
                                        variant="outlined"
                                    >
                                    <InputLabel id="save-label">Zapis</InputLabel>                      
                                        <Select
                                        labelId="save-label"
										id="saveId"
                                        name="saveId"        
										value={this.state.saveId}
                                        onChange={this.handleChange}
                                        label="Zapis"                                    
                                        style={{ width: 225 }}
									>
										
										{this.state.save[0] && this.state.save[0].map((save) => (
												<MenuItem
													key={save.id}
													value={save.id}
												>
													{save.savingDate.substring(0,10)}
												</MenuItem>
                                                
                                        ))}
									</Select> 
                                    </FormControl>   
									</Grid> 
                                    <Grid item xs={12}>
										<TextField	
											id="amount"
											name="amount"
											onChange={this.handleChangeNumber}
											label="Kwota"
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
                                    <InputLabel id="status-label">Status</InputLabel>                      
                                        <Select
                                        labelId="status-label"
										id="statusId"
                                        name="statusId"        
										value={this.state.statusId}
                                        onChange={this.handleChange}
                                        label="Status"                                    
                                        style={{ width: 225 }}
									>
										
										{this.state.status[0] && this.state.status[0].map((status) => (
												<MenuItem
													key={status.id}
													value={status.id}
												>
													{status.name}
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
						<Button  variant="contained" color="primary" onClick={this.handleAddPayment}>
							Dodaj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default AddPayment;
