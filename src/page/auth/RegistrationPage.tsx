import * as React from "react";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const RegistrationPage: React.FC = () => {
    return (
        <Paper sx={{maxWidth: 936, margin: 'auto', overflow: 'hidden'}}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Typography color="textPrimary">
                                For registration please fill out the form below
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <form onSubmit={() => {alert("hello")}}>
                <Grid container spacing={2} alignItems="center" direction="column" columnSpacing={3}>
                    <Grid item xs={3} sx={{margin: "25px"}}>
                        <TextField
                            label="Name"
                            InputProps={{
                                sx: {fontSize: 22},
                            }}
                            variant="standard"/>
                    </Grid>
                    <Grid item xs={3} sx={{marginBottom: "25px"}}>
                        <TextField
                            label="Email"
                            InputProps={{
                                sx: {fontSize: 22},
                            }}
                            variant="standard"/>
                    </Grid>
                    <Grid item xs={3} sx={{marginBottom: "25px"}}>
                        <TextField
                            label="Password"
                            InputProps={{
                                sx: {fontSize: 22},
                            }}
                            type="password"
                            variant="standard"/>
                    </Grid>
                    <Grid item xs={3} sx={{marginBottom: "25px"}}>
                        <TextField
                            label="Repeat Password"
                            InputProps={{
                                sx: {fontSize: 22},
                            }}
                            type="password"
                            variant="standard"/>
                    </Grid>
                    <Grid item xs={3} sx={{marginBottom: "25px"}}>
                        <Button type="submit" variant="contained" sx={{width: 230}}>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};
export default RegistrationPage;