import React, { Component } from "react";
import Navbar from "../Navbar";
import {
    sendPush
} from "../../actions/webPushActions";



import {
	Grid,
	Typography,
	Button,
    TextField
} from "@material-ui/core";



class AddWebPush extends Component {
	state = {
		title: "",
        message: "",
        link: ""
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	

    
    

    handleSendMessage = () => {

		
		const {title,message,link} = this.state;
		const push = {title,message,link};
		sendPush(push).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/addWebPush";
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
							Dodanie wiadomości
						</Typography>
					</Grid>
					
					<Grid item xs={12} style={{ marginTop: 15 }}>
						<Grid container>
							<Grid item xs={false} md={4} />
							<Grid item xs={12} md={4}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											
											id="title"
											name="title"
											onChange={this.handleChange}
											label="Tytuł"
											required
											variant="outlined"
										/>
									</Grid>
									<Grid item xs={12} >
									
										<TextField 
											style={{ width: 220 }}
											id="message"
											name="message"
											onChange={this.handleChange}
											label="Wiadomość"
											multiline
											variant="outlined"
											required
											/>
									</Grid>
                                    <Grid item xs={12}>
									<TextField
											style={{ width: 220 }}
											id="link"
											name="link"
											onChange={this.handleChange}
											label="Strona"
											multiline
											variant="outlined"
											required
											/>
									</Grid>
                                   
                                   
                                    
								</Grid>
							</Grid>
							
							<Grid item xs={false} md={4} />
						</Grid>
					</Grid>
					<Grid item xs={12}></Grid>
					
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button  variant="contained" color="primary" onClick={this.handleSendMessage}>
							Wyślij
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default AddWebPush;
