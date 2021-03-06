import React, { Component } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { login } from "../../actions/userActions";
import { Link } from "react-router-dom";

export class Login extends Component {
	state = {
		email: "",
		password: ""
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleLogin = () => {
		const { email, password } = this.state;
		const user = { email, password };
		login(user).then((res) => {
			if (res && res.status === 200) {
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

					if (user.role === "parent") {
						window.location.href = "/parent";
					} else if (user.role === "employee") {
						window.location.href = "/classList";
					} else if (user.role === "admin") {
						window.location.href = "/address";
					}
				}
			}
		});
	};

	render() {
		return (
			<Grid container style={{ textAlign: "center", marginTop: 100 }}>
				<Grid item xs={12}>
					<Typography variant="h5">Logowanie</Typography>
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
							</Grid>
						</Grid>
						<Grid item xs={false} md={4} />
					</Grid>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 20 }}>
					<Button
						variant="contained"
						color="primary"
						onClick={this.handleLogin}
					>
						Zaloguj
					</Button>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 30 }}>
					<Typography>
						Chcesz się zalogować kliknij
						<Link
							style={{
								fontWeight: 700,
								textDecoration: "none",
								marginLeft: 10
							}}
							to="/register"
						>
							Zarejestruj się
						</Link>
					</Typography>
				</Grid>
			</Grid>
		);
	}
}

export default Login;
