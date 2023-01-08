import * as React from "react";
import Typography from "@mui/material/Typography";
import {Grid, Paper, styled} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const OperationsPage: React.FC = () => {
    return (
        <Grid container rowSpacing={1}>
            <Grid item xs={3} md={1.2}>
                <Item>date</Item>
            </Grid>
            <Grid item xs={2} md={0.8}>
                <Item>account</Item>
            </Grid>
            <Grid item xs={2} md={1}>
                <Item>group</Item>
            </Grid>
            <Grid item xs={5} md={3}>
                <Item>tags</Item>
            </Grid>
            <Grid item xs={7} md={4}>
                <Item>description</Item>
            </Grid>
            <Grid item xs={2} md={0.8}>
                <Item>currency</Item>
            </Grid>
            <Grid item xs={3} md={1.2}>
                <Item>sum</Item>
            </Grid>


            <Grid item xs={3} md={1.2}>
                <Item>date</Item>
            </Grid>
            <Grid item xs={2} md={0.8}>
                <Item>account</Item>
            </Grid>
            <Grid item xs={2} md={1}>
                <Item>group</Item>
            </Grid>
            <Grid item xs={5} md={3}>
                <Item>tags</Item>
            </Grid>
            <Grid item xs={7} md={4}>
                <Item>description</Item>
            </Grid>
            <Grid item xs={2} md={0.8}>
                <Item>currency</Item>
            </Grid>
            <Grid item xs={3} md={1.2}>
                <Item>sum</Item>
            </Grid>
        </Grid>
    )
};
export default OperationsPage;