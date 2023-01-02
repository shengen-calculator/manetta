import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  onDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
        <AppBar color="primary" position="sticky" elevation={0}>
            <Toolbar>
                <Grid container spacing={1} alignItems="center">
                    <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={onDrawerToggle}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs />
                </Grid>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  );
};
export default Header;
