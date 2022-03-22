import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { orange } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';
import TableViewIcon from '@mui/icons-material/TableView';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ClientInfo = () =>{
    return (
      <Card style={{boxShadow:'10px 10px 8px 10px rgb(237,235,230)',height: '300px',borderRadius: '25px'}}>
      <CardContent>
        <Typography variant="h6" >
          <b>Client Information</b>
        </Typography>
        <Box >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} m={2}>
      <Grid container item spacing={3}>
          <Grid item xs={4}>
          <SwitchAccountIcon color="primary"  /> Customer
          </Grid>
          <Grid item xs={4}>
          <DoNotDisturbOnTotalSilenceIcon  sx={{ color: orange[500] }}/> Total
          </Grid>
          <Grid item xs={4}>
          <TableViewIcon sx={{ color: pink[500] }}  /> Database 
          </Grid>
      </Grid>

        <Grid container item spacing={3}>
            <Grid item xs={4}>
            <Typography  >
              <b>0123</b>
            </Typography>
            <LinearProgress color="primary" />
            </Grid>
            <Grid item xs={4}>
            <Typography >
              <b>0123</b>
            </Typography>
            <LinearProgress color="success" />
            </Grid>
            <Grid item xs={4}>
            <Typography  >
              <b>0123</b>
            </Typography>
            <LinearProgress  color="secondary"  />
            </Grid>
        </Grid>

      </Grid>


      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} m={2}>
      <Grid container item spacing={3}>
          <Grid item xs={4}>
          <SwitchAccountIcon color="primary"  /> Tables
          </Grid>
          <Grid item xs={4}>
          <DoNotDisturbOnTotalSilenceIcon  sx={{ color: orange[500] }}/> Forms
          </Grid>
          {/* <Grid item xs={4}>
          <TableViewIcon sx={{ color: pink[500] }}  /> Tables
          </Grid> */}
      </Grid>

        <Grid container item spacing={3}>
            <Grid item xs={4}>
            <Typography  >
              <b>0123</b>
            </Typography>
            <LinearProgress color="primary" />
            </Grid>
            <Grid item xs={4}>
            <Typography >
              <b>0123</b>
            </Typography>
            <LinearProgress color="success" />
            </Grid>
            {/* <Grid item xs={4}>
            <Typography  >
              <b>0123</b>
            </Typography>
            <LinearProgress  color="secondary"  />
            </Grid> */}
        </Grid>

      </Grid>
    </Box>
      </CardContent>
    </Card>
    );
}
export default ClientInfo;