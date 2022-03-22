import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MigrationJob from './MigrationJob';
import ClientInfo from './ClientInformation';
import Dashboard from './Dashboard';
import Auditlog from './AuditLog';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Main = () =>{
  return (
    <Box >
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid item xs={6}>
              <Dashboard />
        </Grid>
        <Grid item xs={6}>
              <MigrationJob />
        </Grid>
        <Grid item xs={6}>
        <ClientInfo />
        </Grid>
        <Grid item xs={6}>
        <Auditlog />
        </Grid>
      </Grid>
    </Box>
  );
}
export default Main;