import { useState } from 'react';

// material-ui
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography
} from '@mui/material';

// project import
import IncomeAreaChart from './IncomeAreaChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/DashboardAnalyticEcommerce';


// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [noEVs, setnoEVs] = useState(100); //83000
  const [battery, setbattery] = useState(100); //kwh 60
  const [consumer, setconsumer] = useState(100); //kwh 12

  const chagenoEVs = (change) => {
    let newnoEVs = change=='add'?noEVs + 10 : noEVs - 10;
    setnoEVs(newnoEVs);
  }
  const chagebattery = (change) => {
    let newbattery = change=='add'?battery + 10 : battery - 10;
    setbattery(newbattery);
  }
  const chageconsumer = (change) => {
    let newconsumer = change=='add'?consumer + 10 : consumer - 10;
    setconsumer(newconsumer);
  }
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">EV NO Influence Factors</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total noEVs" count={noEVs}/>
        <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => chagenoEVs('add')}
                color={"success"}
              >
                increase
              </Button>
              <Button
                size="small"
                onClick={() => chagenoEVs('reduce')}
                color={"warning"}
              >
                decrease
              </Button>
            </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="battery capacity (KWh)" count={battery}/>
        <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => chagebattery('add')}
                color={"success"}
              >
                increase
              </Button>
              <Button
                size="small"
                onClick={() => chagebattery('reduce')}
                color={"warning"}
              >
                decrease
              </Button>
            </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="consumer (KWh per hosuehold)" count={consumer}/>
        <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => chageconsumer('add')}
                color={"success"}
              >
                increase
              </Button>
              <Button
                size="small"
                onClick={() => chageconsumer('reduce')}
                color={"warning"}
              >
                decrease
              </Button>
            </Stack>
      </Grid>


      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Energy Consumption/Productive</Typography>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart noEVs={noEVs} consumer={consumer} battery={battery}/>
          </Box>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
