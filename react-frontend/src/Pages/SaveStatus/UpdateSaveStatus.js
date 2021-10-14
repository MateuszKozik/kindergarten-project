import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    getSaveStatus,
    updateSaveStatus
} from "../../actions/saveStatusActions";


import {
	Grid,
	Typography,
	Button,
    TextField
} from "@material-ui/core";



class UpdateSaveStatus extends Component {
	state = {
        Id: "",
		name: "",
        data: []
        
	};
    componentDidMount() {
        
		getSaveStatus(this.props.match.params.id).then((res) => {
            this.setState({ Id: res.data.id, name: res.data.name  });
            
        });
        
        
        
    }

    
    
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    
    


    handleUpdateSaveStatus = () => {
		const {Id, name} = this.state;
		const saveStatus = {Id, name};
        updateSaveStatus(saveStatus).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/saveStatus";
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
						<Button  variant="contained" color="primary" onClick={this.handleUpdateSaveStatus}>
                            Aktualizuj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default UpdateSaveStatus;
