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
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import {ReactElement} from "react";
import {NavLink,matchRoutes, useLocation} from "react-router-dom";


type MenuItem = {
  id: string
  icon: ReactElement
  path: string
  active?: boolean
}

type Menu = {
  id: string
  children: MenuItem[]
}

const categories: Menu[] = [
  {
    id: 'Authentication',
    children: [
      { id: 'Login', icon: <DnsRoundedIcon />, path: 'login'},
      { id: 'Registration', icon: <SettingsInputComponentIcon />, path: 'registration' },
      { id: 'LogOut', icon: <PeopleIcon />, path: 'logout'}
    ],
  },
  {
    id: 'Work',
    children: [
      { id: 'Operations', path: 'operations', icon: <SettingsIcon /> },
      { id: 'Currencies', path: 'login', icon: <TimerIcon /> },
      { id: 'Tags', path: 'tags', icon: <PhonelinkSetupIcon /> },
      { id: 'Report', path: 'login', icon: <SettingsEthernetIcon /> },
      { id: 'Groups', path: 'login', icon: <PublicIcon /> },
      { id: 'Accounts', path: 'login', icon: <PermMediaOutlinedIcon /> },
      { id: 'Blocked amount', path: 'login', icon: <HomeIcon />}
    ],
  },
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

const Navigator: React.FC<DrawerProps> = (props: DrawerProps) => {
  const { ...other } = props;

  // @ts-ignore
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          MANETTA
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({
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
export default Navigator;
