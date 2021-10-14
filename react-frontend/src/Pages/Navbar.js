import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";


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
    }
}));

export default function Navbar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
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
                            Rodzic
						</Link>
                        
                    </Typography>
                    

                </Toolbar>
            </AppBar>
        </div>
    );
}
