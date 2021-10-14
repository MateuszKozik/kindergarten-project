import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    getPayout,
    updatePayout
} from "../../actions/payoutActions";
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



class UpdatePayout extends Component {
	state = {
        Id: "",
		payoutDate: "",
        amount: "",
        employeeId: "",
		employee: [],
        data: []
        
	};
    componentDidMount() {
        
		getPayout(this.props.match.params.id).then((res) => {
            this.setState({ Id: res.data.id, payoutDate: res.data.payoutDate,  amount: res.data.amount, employeeId: res.data.employeeId  });
            
        });
        getEmployees().then((res) => {
			this.setState({ employee: [res.data] });
        });
        
        
    }

    
    
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    handleChangeNumber = (e) => {
		this.setState({ [e.target.name]: parseFloat(e.target.value) });
    };
    


    handleUpdatePayout = () => {
		const {Id, payoutDate,amount,employeeId} = this.state;
		const payout = {Id, payoutDate,amount,employeeId};
        updatePayout(payout).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/payout";
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
							Aktualizacja wypłaty
						</Typography>
					</Grid>
					
					<Grid item xs={12} style={{ marginTop: 15 }}>
						<Grid container>
							<Grid item xs={false} md={4} />
							<Grid item xs={12} md={4}>
								<Grid container spacing={2}>
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
                                    <Grid item xs={12}>
										<TextField

											id="payoutDate"
											name="payoutDate"
											onChange={this.handleChange}
                                            label="Data wypłaty"
                                            required
                                            type="date"
											variant="outlined"
                                            value={this.state.payoutDate.substring(0,10)}
											style={{ width: 225 }}
                                            InputLabelProps={{
                                                shrink: true
                                            }}
										/>
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
                                            value={this.state.amount}
										/>
									</Grid>  
                                    
								</Grid>
							</Grid>
							<Grid item xs={false} md={4} />
						</Grid>
					</Grid>
					<Grid item xs={12}></Grid>
					
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button  variant="contained" color="primary" onClick={this.handleUpdatePayout}>
                            Aktualizuj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default UpdatePayout;
