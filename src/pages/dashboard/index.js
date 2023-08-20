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
  const [population, setPopulation] = useState(1000);
  const [gdp, setGdp] = useState(1000);
  const [solar, setSolar] = useState(1000);

  const chagePopulation = (change) => {
    let newPopulation = change=='add'?population + 100 : population - 100;
    setPopulation(newPopulation);
  }
  const chageGDP = (change) => {
    let newGdp = change=='add'?gdp + 100 : gdp - 100;
    setGdp(newGdp);
  }
  const chageSolar = (change) => {
    let newSolar = change=='add'?solar + 100 : solar - 100;
    setSolar(newSolar);
  }
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">EV NO Influence Factors</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Population" count={population}/>
        <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => chagePopulation('add')}
                color={"success"}
              >
                increase
              </Button>
              <Button
                size="small"
                onClick={() => chagePopulation('reduce')}
                color={"warning"}
              >
                decrease
              </Button>
            </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="GDP" count={gdp}/>
        <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => chageGDP('add')}
                color={"success"}
              >
                increase
              </Button>
              <Button
                size="small"
                onClick={() => chageGDP('reduce')}
                color={"warning"}
              >
                decrease
              </Button>
            </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Solar System" count={solar}/>
        <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => chageSolar('add')}
                color={"success"}
              >
                increase
              </Button>
              <Button
                size="small"
                onClick={() => chageSolar('reduce')}
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
            <Typography variant="h5">Total Number of EV</Typography>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart population={population} solar={solar} gdp={gdp}/>
          </Box>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
