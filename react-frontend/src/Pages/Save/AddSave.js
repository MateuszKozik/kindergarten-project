import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    addSave
} from "../../actions/saveActions";

import {
    getAllActive
} from "../../actions/groupActions";



import {
	Grid,
	Typography,
	Button,
    Select,
    MenuItem,
    InputLabel ,
    FormControl
} from "@material-ui/core";



class AddSave extends Component {
	state = {
        childId: "",
        groupId: "",
        group: []
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	
	componentDidMount() {
		getAllActive().then((res) => {
			this.setState({ group: [res.data] });
		});
	}
    
    

    handleAddSave = () => {
		const childId =localStorage.getItem("childId");
		const {groupId} = this.state;
		const save = {childId,groupId};
        addSave(save).then((res) => {
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
							Zapis do grupy
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
									 
                                    
								</Grid>
							</Grid>
							<Grid item xs={false} md={4} />
						</Grid>
					</Grid>
					<Grid item xs={12}></Grid>
					
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button  variant="contained" color="primary" onClick={this.handleAddSave}>
							Dodaj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default AddSave;
