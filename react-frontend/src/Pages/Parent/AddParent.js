import React, { Component } from "react";
import Navbar from "../Navbar";
import { addParent } from "../../actions/parentActions";
import { getAddresses } from "../../actions/addressActions";
import { getUsers } from "../../actions/userActions";
import { addAddress } from "../../actions/addressActions";

import { Grid, Typography, Button, TextField } from "@material-ui/core";

class AddParent extends Component {
	state = {
		name: "",
		surname: "",
		phoneNumber: "",
		addressId: "",
		userId: "",
		street: "",
		houseNumber: 0,
		flatNumber: 0,
		postCode: "",
		city: ""
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleChangeNumber = (e) => {
		this.setState({ [e.target.name]: parseInt(e.target.value) });
	};

	componentDidMount() {
		getAddresses().then((res) => {
			this.setState({ address: [res.data] });
		});
		getUsers().then((res) => {
			this.setState({ user: [res.data] });
		});
	}

	handleAddParent = () => {
		const token = localStorage.getItem("token");
		if (token) {
			var base64Url = token.split(".")[1];
			var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
			var jsonPayload = decodeURIComponent(
				atob(base64)
					.split("")
					.map(function (c) {
						return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
					})
					.join("")
			);
			var user = JSON.parse(jsonPayload);
			this.setState({ userId: user.Id });
		}
		const { street, houseNumber, flatNumber, postCode, city } = this.state;
		const address = { street, houseNumber, flatNumber, postCode, city };
		addAddress(address).then((res) => {
			this.setState({ addressId: res.data.id });
			const { name, surname, phoneNumber, addressId, userId } = this.state;
			const parent = { name, surname, phoneNumber, addressId, userId };
			addParent(parent).then((res) => {
				if (res && res.status === 200) {
					window.location.href = "/parent";
				}
			});
		});
	};

	render() {
		return (
			<>
				<Navbar />
				<Grid container style={{ textAlign: "center", marginTop: 15 }}>
					<Grid item xs={12}>
						<Typography variant="h5">Wprowadź dane osobowe </Typography>
					</Grid>

					<Grid item xs={12} style={{ marginTop: 15 }}>
						<Grid container>
							<Grid item xs={false} md={4} />
							<Grid item xs={12} md={2}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											id="name"
											name="name"
											onChange={this.handleChange}
											label="Imię"
											required
											variant="outlined"
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
										/>
									</Grid>
									<Grid item xs={12} style={{ marginBottom: 15 }}>
										<TextField
											id="phoneNumber"
											name="phoneNumber"
											onChange={this.handleChange}
											label="Numer telefonu"
											required
											variant="outlined"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} md={2}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											id="city"
											name="city"
											onChange={this.handleChange}
											label="Miasto"
											required
											variant="outlined"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id="street"
											name="street"
											onChange={this.handleChange}
											label="Ulica"
											required
											variant="outlined"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id="houseNumber"
											name="houseNumber"
											onChange={this.handleChangeNumber}
											label="Numer domu"
											type="number"
											required
											variant="outlined"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id="flatNumber"
											name="flatNumber"
											onChange={this.handleChangeNumber}
											label="Numer mieszkania"
											type="number"
											variant="outlined"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id="postCode"
											name="postCode"
											onChange={this.handleChange}
											label="Kod pocztowy"
											required
											variant="outlined"
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}></Grid>

					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button
							variant="contained"
							color="primary"
							onClick={this.handleAddParent}
						>
							Dodaj
						</Button>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default AddParent;
