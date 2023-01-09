import * as React from "react";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from '@mui/material/InputLabel';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {AppBar, Button, Grid, IconButton, styled, TextField} from "@mui/material";
import OperationRow from "./OperationRow";

interface ChipData {
    key: number;
    label: string;
}
const OperationsPage: React.FC = () => {

    return (
        <Paper sx={{ margin: 'auto', overflow: 'hidden'}}>
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
                                Please fill the field
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <OperationRow/>
            <OperationRow/>
            <OperationRow/>
            <OperationRow/>
            <OperationRow/>
        </Paper>
    )
};
export default OperationsPage;