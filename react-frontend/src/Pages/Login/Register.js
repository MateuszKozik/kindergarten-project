import React, { Component } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { registerParent } from "../../actions/userActions";

export class Register extends Component {
	state = {
		email: "",
		password: "",
		password_re: ""
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleRegister = () => {
		if (this.state.password === this.state.password_re) {
			const { email, password } = this.state;
			const user = { email, password };
			registerParent(user).then((res) => {
				if (res && res.status === 200) {
					window.location.href = "/login";
				}
			});
		}
	};

	render() {
		return (
			<Grid container style={{ textAlign: "center", marginTop: 100 }}>
				<Grid item xs={12}>
					<Typography variant="h5">Rejestracja</Typography>
				</Grid>

				<Grid item xs={12} style={{ marginTop: 15 }}>
					<Grid container>
						<Grid item xs={false} md={4} />
						<Grid item xs={12} md={4}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										id="email"
										name="email"
										onChange={this.handleChange}
										label="Email"
										required
										variant="outlined"
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField
										type="password"
										id="password"
										name="password"
										label="Hasło"
										onChange={this.handleChange}
										required
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										type="password"
										id="password_re"
										name="password_re"
										label="Powtórz Hasło"
										onChange={this.handleChange}
										required
										variant="outlined"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={false} md={4} />
					</Grid>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 20 }}>
					<Button
						variant="contained"
						color="primary"
						onClick={this.handleRegister}
					>
						Zarejestruj się
					</Button>
				</Grid>
			</Grid>
		);
	}
}

export default Register;
