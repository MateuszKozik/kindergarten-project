import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    addParentChild
} from "../../actions/parentChildActions";
import {
	getChildes
} from "../../actions/childActions";
import {
	getParents
} from "../../actions/parentActions";


import {
	Grid,
	Typography,
	Button,
    Select,
    MenuItem,
    InputLabel ,
    FormControl
} from "@material-ui/core";



class AddParentChild extends Component {
	state = {
		parentId: "",
        childId: "",
		parent: [],
        child: []
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	

    componentDidMount() {
		getChildes().then((res) => {
			this.setState({ child: [res.data] });
        });
        getParents().then((res) => {
			this.setState({ parent: [res.data] });
        });
       
    }
    

    handleAddParentChild = () => {
		const {parentId,childId} = this.state;
		const parentChild = {parentId,childId};
        addParentChild(parentChild).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/parentChild";
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
							Dodanie powiązania
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
                                    <InputLabel id="parent-label">Rodzic</InputLabel>                      
                                        <Select
                                        labelId="parent-label"
										id="parentId"
                                        name="parentId"        
										value={this.state.parentId}
                                        onChange={this.handleChange}
                                        label="Rodzic"                                    
                                        style={{ width: 225 }}
									>
										
										{this.state.parent[0] && this.state.parent[0].map((parent) => (
												<MenuItem
													key={parent.id}
													value={parent.id}
												>
													{parent.name+","+parent.surname}
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
									
                                   
								</Grid>
							</Grid>
							<Grid item xs={false} md={4} />
						</Grid>
					</Grid>
					<Grid item xs={12}></Grid>
					
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button  variant="contained" color="primary" onClick={this.handleAddParentChild}>
							Dodaj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default AddParentChild;
