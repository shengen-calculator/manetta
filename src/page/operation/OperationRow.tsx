import * as React from "react";
import {Dayjs} from "dayjs";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {Button, Grid, IconButton, styled, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
interface ChipData {
    key: number;
    label: string;
}
const OperationRow: React.FC = () => {

    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));
    const [chipData, setChipData] = React.useState<readonly ChipData[]>([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 4, label: 'Vue.js' }
    ]);

    const handleDelete = (chipToDelete: ChipData) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    const groups = [
        { label: 'Malta', year: 1994 },
        { label: 'Dastor', year: 1972 },
        { label: 'Silpo', year: 1974 },
        { label: 'Car', year: 2008 },
        { label: 'Shtefanyo', year: 1957 },
        { label: "Lecho", year: 1993 }
    ];
    const currencies = [
        {label: 'EUR', key: 'euro'},
        {label: 'USD', key: 'usd'},
        {label: 'HUF', key: 'huf'}
    ];
    return(
        <Grid container rowSpacing={1} padding={1}>
            <Grid item xs={3} md={1.7}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={3} md={1.2}>
                <Box>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={5}>OTP-EUR</MenuItem>
                            <MenuItem value={20}>PRIVAT</MenuItem>
                            <MenuItem value={30}>OTP-BLACK</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={4} md={1.7}>
                <Autocomplete
                    disablePortal
                    id="combo-box-groups"
                    options={groups}
                    renderInput={(params) =>
                        <TextField {...params} />}
                />
            </Grid>

            <Grid item xs={6} md={3.9}>
                <TextField id="outlined-description" fullWidth label="Description" variant="outlined" />
            </Grid>
            <Grid item xs={2} md={1.3}>
                <Autocomplete
                    disablePortal
                    id="combo-box-currencies"
                    options={currencies}
                    renderInput={(params) =>
                        <TextField {...params} />}
                />
            </Grid>
            <Grid item xs={3} md={1.2}>
                <TextField id="outlined-sum" fullWidth label="Sum" variant="outlined" />
            </Grid>
            <Grid item xs={2} md={0.5}>
                {/*<Button fullWidth variant="outlined" focusRipple={true}  sx={{height: 55}}>TAGS</Button>*/}
                <IconButton aria-label="delete" sx={{height: 55, width: 55}}>
                    <BookmarksIcon />
                </IconButton>
            </Grid>
            <Grid item xs={1} md={0.5}>
                <IconButton aria-label="delete" sx={{height: 55, width: 55}}>
                    <DeleteIcon />
                </IconButton>
                {/*<Button fullWidth variant="outlined" focusRipple={true}  sx={{height: 55}}>DEL</Button>*/}
            </Grid>
        </Grid>
    );
};
export default OperationRow;