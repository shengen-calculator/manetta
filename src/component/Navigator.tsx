import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import {ReactElement} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {ApplicationState, AuthenticationRole, AuthenticationState} from "../redux/reducers/types";
import {connect} from "react-redux";


type MenuItem = {
  id: string
  icon: ReactElement
  path: string
  role: AuthenticationRole[]
  active?: boolean
}

type Menu = {
  id: string
  role: AuthenticationRole[]
  children: MenuItem[]
}

const categories: Menu[] = [
  {
    id: 'Authentication',
    role: ["NOT_AUTHORIZED", "ADMIN", "BOOKER"],
    children: [
      {id: 'Login', icon: <DnsRoundedIcon/>, path: 'login', role: ["NOT_AUTHORIZED"]},
      {id: 'LogOut', icon: <PeopleIcon/>, path: 'logout', role: ["ADMIN", "BOOKER"]}
    ]
  },
  {
    id: 'Work',
    role: ["ADMIN", "BOOKER"],
    children: [
      {id: 'Operations', path: 'operations', icon: <SettingsIcon/>, role: ["ADMIN", "BOOKER"]},
      {id: 'Currencies', path: 'currencies', icon: <TimerIcon/>, role: ["BOOKER"]},
      {id: 'Tags', path: 'tags', icon: <PhonelinkSetupIcon/>, role: ["BOOKER"]},
      {id: 'Report', path: 'reports', icon: <SettingsEthernetIcon/>, role: ["BOOKER"]},
      {id: 'Groups', path: 'groups', icon: <PublicIcon/>, role: ["BOOKER"]},
      {id: 'Accounts', path: 'accounts', icon: <PermMediaOutlinedIcon/>, role: ["BOOKER"]},
      {id: 'Blocked amount', path: 'blocked', icon: <HomeIcon/>, role: ["BOOKER"]}
    ]
  }
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

type NavigatorProps = DrawerProps & {
  auth: AuthenticationState
}

const Navigator: React.FC<NavigatorProps> = (props: NavigatorProps) => {
  const { auth, ...other } = props;

  // @ts-ignore
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 42, color: '#fff' }}>
          MANETTA
        </ListItem>
        {categories.filter(m => ~m.role.indexOf(auth.role)).map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.filter(mi => ~mi.role.indexOf(auth.role)).map(({
                             id: childId,
                             icon,
                             path, active }) => {
              const location = useLocation();
              const selected = location.pathname.includes(path);
                return (
                    <ListItem
                    disablePadding
                    component={NavLink}
                    to={path}
                    key={childId}>
                  <ListItemButton
                      selected={selected}
                      sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>)
            })
            }
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    auth: state.authentication
  }
};

export default connect(
    mapStateToProps
)(Navigator);
