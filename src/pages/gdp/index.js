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
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';


// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [gdp, setGdp] = useState(1.553);

  const changeGDP = (change) => {
    let newGdp = change === 'add' ? gdp * 1.05 : gdp * 0.95;
    setGdp(newGdp);
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Influence Factors</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="GDP(USTrillions)(Not %)" count={gdp.toFixed(2)} />
        <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => changeGDP('add')}
                color={"success"}
              >
                increase
              </Button>
              <Button
                size="small"
                onClick={() => changeGDP('reduce')}
                color={"warning"}
              >
                decrease
              </Button>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <MainCard>
          <Typography>
            AutoRegressive Integrated Moving Average has been used to predict the total evs.
            This demonstrates how GDP($US) might affect it.
          </Typography>
        </MainCard>
      </Grid>



      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Impact of GDP($US) on total electrical vehicle sales </Typography>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart gdp={gdp} />
          </Box>
        </MainCard>
      </Grid>
    </Grid>
  );
};


export default DashboardDefault;
