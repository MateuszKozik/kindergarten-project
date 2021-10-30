import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	margin: {
		marginLeft: theme.spacing(2)
	},
	logoutButton: {
		position: "relative",
		[theme.breakpoints.up("sm")]: {
			marginLeft: "auto"
		}
	}
}));

const handleLogout = () => {
	localStorage.clear();
	window.location.href = "/";
};

export default function Navbar() {
	const classes = useStyles();

	const parentIsAuthenticated = (
		<AppBar position="static">
			<Toolbar>
				<Link
					to="/parent"
					style={{
						fontWeight: 500,
						textDecoration: "none",
						color: "#fff",
						marginRight: 20
					}}
				>
					Dane osobowe
				</Link>

				<Link
					to="/child"
					style={{
						fontWeight: 500,
						textDecoration: "none",
						color: "#fff",
						marginRight: 20
					}}
				>
					Dzieci
				</Link>

				<Link
					to="/save"
					style={{
						fontWeight: 500,
						textDecoration: "none",
						color: "#fff",
						marginRight: 20
					}}
				>
					Zapisy
				</Link>

				<MenuItem
					className={classes.logoutButton}
					onClick={() => handleLogout()}
				>
					Wyloguj
				</MenuItem>
			</Toolbar>
		</AppBar>
	);

	const employeeIsAuthenticated = (
		<AppBar position="static">
			<Toolbar>
				<Link
					to="/payoutEmployee"
					style={{
						fontWeight: 500,
						textDecoration: "none",
						color: "#fff",
						marginRight: 20
					}}
				>
					Wypłaty
				</Link>

				<Link
					to="/classList"
					style={{
						fontWeight: 500,
						textDecoration: "none",
						color: "#fff",
						marginRight: 20
					}}
				>
					Lista obecności
				</Link>
				<MenuItem
					className={classes.logoutButton}
					onClick={() => handleLogout()}
				>
					Wyloguj
				</MenuItem>
			</Toolbar>
		</AppBar>
	);

	const adminIsAuthenticated = (
		<AppBar position="static">
			<Toolbar>
				<Typography className={classes.title}>
					<Link
						to="/address"
						style={{
							fontWeight: 500,
							textDecoration: "none",
							color: "#fff",
							marginRight: 20
						}}
					>
						Adresy
					</Link>

					<Link
						to="/employee"
						style={{
							fontWeight: 500,
							textDecoration: "none",
							color: "#fff",
							marginRight: 20
						}}
					>
						Pracownicy
					</Link>
					<Link
						to="/user"
						style={{
							fontWeight: 500,
							textDecoration: "none",
							color: "#fff",
							marginRight: 20
						}}
					>
						Użytkownicy
					</Link>
					<Link
						to="/group"
						style={{
							fontWeight: 500,
							textDecoration: "none",
							color: "#fff",
							marginRight: 20
						}}
					>
						Grupy
					</Link>

					<Link
						to="/payout"
						style={{
							fontWeight: 500,
							textDecoration: "none",
							color: "#fff",
							marginRight: 20
						}}
					>
						Wypłaty
					</Link>

					<Link
						to="/payment"
						style={{
							fontWeight: 500,
							textDecoration: "none",
							color: "#fff",
							marginRight: 20
						}}
					>
						Opłaty
					</Link>
					<Link
						to="/parentChild"
						style={{
							fontWeight: 500,
							textDecoration: "none",
							color: "#fff",
							marginRight: 20
						}}
					>
						Powiązania rodzic - dziecko
					</Link>

					<Link
						to="/addWebPush"
						style={{
							fontWeight: 500,
							textDecoration: "none",
							color: "#fff",
							marginRight: 20
						}}
					>
						Wiadomości
					</Link>
				</Typography>
				<MenuItem
					className={classes.logoutButton}
					onClick={() => handleLogout()}
				>
					Wyloguj
				</MenuItem>
			</Toolbar>
		</AppBar>
	);

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
		var role = JSON.parse(jsonPayload);
	} else {
		window.location.href = "/login";
	}
	let headerLinks;

	if (role) {
		if (role.role === "admin") {
			headerLinks = adminIsAuthenticated;
		} else if (role.role === "employee") {
			headerLinks = employeeIsAuthenticated;
		} else if (role.role === "parent") {
			headerLinks = parentIsAuthenticated;
		}
	}
	return <div className={classes.root}>{headerLinks}</div>;
}
