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

    const employeeIsAuthenticated = (
            <AppBar position="static">
                <Toolbar>

                    <Typography className={classes.title}>
                        <Link
                            to="/address"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Adres
						</Link>
                        <Link
                            to="/child"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Dziecko
						</Link>
                        <Link
                            to="/employee"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Pracownik
						</Link>
                        <Link
                            to="/user"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Użytkownik
						</Link>
                        <Link
                            to="/group"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Grupa
						</Link>
                        <Link
                            to="/parent"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Dane
						</Link>
                        <Link
                            to="/payout"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Wypłata
						</Link>
                        <Link
                            to="/saveStatus"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Status zapisu
						</Link>
                        <Link
                            to="/paymentStatus"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Status płatności
						</Link>
                        <Link
                            to="/save"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Zapis
						</Link>
                        <Link
                            to="/payment"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Opłata
						</Link>
                        <Link
                            to="/parentChild"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Powiązanie
						</Link>
                        <Link
                            to="/payoutEmployee"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            wypłata pracownika
						</Link>
                        <Link
                            to="/addWebPush"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Wiadomość
						</Link>
                        <Link
                            to="/classList"
                            style={{
                                fontWeight: 700,
                                textDecoration: "none",
                                color: "#fff",
                                marginLeft: 5
                            }}
                        >
                            Lista obecności
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
			//headerLinks = adminIsAuthenticated;
		} else if (role.role === "employee") {
			headerLinks = employeeIsAuthenticated;
		} else if (role.role === "parent") {
			//headerLinks = parentIsAuthenticated;
		}
	}
	return <div className={classes.root}>{headerLinks}</div>;
}
