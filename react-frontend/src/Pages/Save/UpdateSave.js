import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    getSave,
    updateSave
} from "../../actions/saveActions";
import {
	getChildes
} from "../../actions/childActions";
import {
	getGroups
} from "../../actions/groupActions";
import {
	getSaveStatuses
} from "../../actions/saveStatusActions";


import {
	Grid,
	Typography,
	Button,
    TextField,
    Select,MenuItem,
    InputLabel,
    FormControl
} from "@material-ui/core";



class UpdateSave extends Component {
	state = {
        Id: "",
		savingDate: "",
        childId: "",
        statusId: "",
        groupId: "",
        data: [],
        child: [],
        status: [],
        group: []
	};
    componentDidMount() {
        
		getSave(this.props.match.params.id).then((res) => {
            this.setState({ Id: res.data.id, savingDate: res.data.savingDate,  childId: res.data.childId, statusId: res.data.statusId,  groupId: res.data.groupId  });
            
        });
        getGroups().then((res) => {
			this.setState({ group: [res.data] });
        });
        getChildes().then((res) => {
			this.setState({ child: [res.data] });
		});
        getSaveStatuses().then((res) => {
			this.setState({ status: [res.data] });
		});
        
        
    }

    
    
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    
    


    handleUpdateSave = () => {
		const {Id, savingDate,childId,statusId,groupId} = this.state;
		const save = {Id, savingDate,childId,statusId,groupId};
        updateSave(save).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/save";
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
							Aktualizacja zapisu
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
                                    <InputLabel id="child-label">Dziecko</InputLabel>                      
                                        <Select
                                        labelId="child-label"
										id="childId"
                                        name="childId"        
										value={this.state.childId}
                                        onChange={this.handleChange}
                                        label="Dziecko"                                    
                                        style={{ width: 225 }}
									>
										
										{this.state.child[0] && this.state.child[0].map((child) => (
												<MenuItem
													key={child.id}
													value={child.id}
												>
													{child.name+","+child.surname}
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
                                    <InputLabel id="group-label">Grupa</InputLabel>                      
                                        <Select
                                        labelId="group-label"
										id="groupId"
                                        name="groupId"        
										value={this.state.groupId}
                                        onChange={this.handleChange}
                                        label="Grupa"                                    
                                        style={{ width: 225 }}
									>
										
										{this.state.group[0] && this.state.group[0].map((group) => (
												<MenuItem
													key={group.id}
													value={group.id}
												>
													{group.name}
												</MenuItem>
                                                
                                        ))}
									</Select> 
                                    </FormControl>   
									</Grid> 
									<Grid item xs={12}>
										<TextField

											id="savingDate"
											name="savingDate"
											onChange={this.handleChange}
                                            label="Data zapisu"
                                            required
                                            type="date"
											variant="outlined"
                                            value={this.state.savingDate.substring(0,10)}
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
                                    <InputLabel id="status-label">Status</InputLabel>                      
                                        <Select
                                        labelId="status-label"
										id="statusId"
                                        name="statusId"        
										value={this.state.statusId}
                                        onChange={this.handleChange}
                                        label="Dziecko"                                    
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
						<Button  variant="contained" color="primary" onClick={this.handleUpdateSave}>
                            Aktualizuj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default UpdateSave;
