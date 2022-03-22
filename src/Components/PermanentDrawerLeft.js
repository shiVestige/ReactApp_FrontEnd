import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import Main from './Main';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import DashboardIcon from '@mui/icons-material/Dashboard';
import IconButton from '@mui/material/IconButton';
import StorageSharpIcon from '@mui/icons-material/StorageSharp';
import DataSaverOffSharpIcon from '@mui/icons-material/DataSaverOffSharp';
import DataSaverOnSharpIcon from '@mui/icons-material/DataSaverOnSharp';
import FormatAlignJustifySharpIcon from '@mui/icons-material/FormatAlignJustifySharp';
import FormatAlignLeftSharpIcon from '@mui/icons-material/FormatAlignLeftSharp';
import FileCopySharpIcon from '@mui/icons-material/FileCopySharp';
import CallMissedOutgoingSharpIcon from '@mui/icons-material/CallMissedOutgoingSharp';
import AirlineSeatReclineNormalSharpIcon from '@mui/icons-material/AirlineSeatReclineNormalSharp';
import PrimarySearchAppBar from '../Components/AppBar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';

import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
  import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

const drawerWidth = 240;

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const PermanentDrawerLeft = () =>{
  return (
    <Box sx={{ display: 'flex',}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {/* <PrimarySearchAppBar /> */} 
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />Admin
            </IconButton>
        <Divider /> 

        <Router>
      <Box sx={{ width: 260 }}>
        <Paper elevation={0}>
          <List aria-label="main mailbox folders">
            <ListItemLink to="/inbox" primary="Database" icon={<DashboardIcon  />} />
            <ListItemLink to="/drafts" primary="SQL Analyst" icon={<StorageSharpIcon />} />
            <ListItemLink to="/inbox" primary="data Filter" icon={<DataSaverOffSharpIcon />} />
            <ListItemLink to="/drafts" primary="data Filter Builder" icon={<DataSaverOnSharpIcon />} />
            <ListItemLink to="/inbox" primary="Forms" icon={<StorageSharpIcon />} />
            <ListItemLink to="/drafts" primary="Form Builder" icon={<DraftsIcon />} />
            <ListItemLink to="/inbox" primary="File System" icon={<InboxIcon />} />
            <ListItemLink to="/drafts" primary="Migration Jobs  " icon={<DraftsIcon />} />
            <ListItemLink to="/drafts" primary="Client Information" icon={<DraftsIcon />} />
            <ListItemLink to="/inbox" primary="Governance" icon={<InboxIcon />} />
            <ListItemLink to="/drafts" primary="Help" icon={<DraftsIcon />} />  
            
          </List>
        </Paper>
      </Box>
    </Router>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        <Typography>
          <Main />
        </Typography>
        
      </Box>
    </Box>
  );
}
export default PermanentDrawerLeft;