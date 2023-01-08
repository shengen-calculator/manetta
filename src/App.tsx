import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigator from './component/Navigator';
import Content from './Content';
import Header from './component/Header';
import Copyright from './component/Copyright';
import theme from "./theme";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from "./page/auth/LoginPage";
import RegistrationPage from "./page/auth/RegistrationPage";
import PrivateRoute, {ProtectedRouteProps} from "./component/PrivateRoute";
import OperationsPage from "./page/operation/OperationsPage";
import TagsPage from "./page/tag/TagsPage";
import AccountsPage from "./page/account/AccountsPage";
import Progress from "./component/Progress";
import {ApplicationState, AuthenticationState} from "./redux/reducers/types";
import {connect} from "react-redux";
import LogOutPage from "./page/auth/LogOutPage";

const drawerWidth = 256;

interface Props {
  auth: AuthenticationState
}

const Paperbase: React.FC<Props> = ({auth}) => {
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('lg'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: auth.role !== "NOT_AUTHORIZED",
    pathname: '/login',
  };

  return (
      <ThemeProvider theme={theme}>
        <Router>
          <Box sx={{display: 'flex', minHeight: '100vh'}}>
            <CssBaseline/>
            <Box
                component="nav"
                sx={{width: {lg: drawerWidth}, flexShrink: {sm: 0}}}
            >
              {isSmUp ? null : (
                  <Navigator
                      PaperProps={{style: {width: drawerWidth}}}
                      variant="temporary"
                      open={mobileOpen}
                      onClose={handleDrawerToggle}
                  />
              )}
              <Navigator
                  PaperProps={{style: {width: drawerWidth}}}
                  sx={{display: {lg: 'block', xs: 'none'}}}
              />
            </Box>
            <Box sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
              <Header onDrawerToggle={handleDrawerToggle}/>
              <Progress />
              <Box component="main" sx={{flex: 1, py: 6, px: 4, bgcolor: '#eaeff1'}}>
                <Routes>
                  <Route path="/" element={
                    <PrivateRoute
                        {...defaultProtectedRouteProps}
                        outlet={<Content/>}/>
                  }/>
                  <Route path="/login" element={<LoginPage/>}/>
                  <Route path="/logout" element={<LogOutPage/>}/>
                  <Route path="/register" element={<RegistrationPage/>}/>
                  <Route path="/operations" element={
                    <PrivateRoute
                        {...defaultProtectedRouteProps}
                        outlet={<OperationsPage/>}/>
                  }/>
                  <Route path="/tags" element={
                    <PrivateRoute
                        {...defaultProtectedRouteProps}
                        outlet={<TagsPage/>}/>
                  }/>
                  <Route path="/accounts" element={
                    <PrivateRoute
                        {...defaultProtectedRouteProps}
                        outlet={<AccountsPage/>}/>
                  }/>
                  {/*<Route path='nested' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Layout />} />}>*/}
                  {/*  <Route path='one' element={<Protected />} />*/}
                  {/*  <Route path='two' element={<Protected />} />*/}
                  {/*</Route>*/}
                </Routes>
              </Box>
              <Box component="footer" sx={{p: 2, bgcolor: '#eaeff1'}}>
                <Copyright/>
              </Box>
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    auth: state.authentication
  }
};

export default connect(
    mapStateToProps
)(Paperbase);
