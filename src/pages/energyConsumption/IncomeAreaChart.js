import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
  chart: {
    height: 450,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  }
};

// ==============================|| INCOME AREA CHART ||============================== //

const IncomeAreaChart = ({ slot, evnumber }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;
  const [energyConsumptionDayCharge,setEnergyConsumptionDayCharge ] = useState([90, 110, 140, 150, 130, 125, 120, 130, 140, 130, 135, 100]);
  const [energyConsumptionNightCharge, setEnergyConsumptionNightCharge] = useState([80, 110, 150, 160, 110, 90, 91, 170, 160, 150, 110, 80]);
  const [networkCapacity,setNetworkCapacity] = useState([200, 190, 198, 195, 197, 192, 198, 189, 199, 201, 203, 202]);
  
  const [options, setOptions] = useState(areaChartOptions);
  useEffect(() => {
    setEnergyConsumptionDayCharge([90 + evnumber/2, 110  + evnumber/2, 140+ evnumber/2, 150+ evnumber/2, 130+ evnumber/2, 125+ evnumber/2, 120+ evnumber/2, 130+ evnumber/2, 140+ evnumber/2, 130+ evnumber/2, 135+ evnumber/2, 100+ evnumber/2]);
    setEnergyConsumptionNightCharge([80 + evnumber/4, 110 + evnumber/3, 150 + evnumber/2, 160 + evnumber/3, 110 + evnumber/3, 90 + evnumber/3, 91 + evnumber/3, 170 + evnumber, 160 + evnumber, 150 + evnumber, 110 + evnumber, 80  + evnumber/4]);
    setNetworkCapacity([200, 190, 198, 195, 197, 192, 198, 189, 199, 201, 203, 202]);
  },[evnumber]);
  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.error.main, theme.palette.success.main],
      xaxis: {
        categories:
          slot === 'month'
            ? [ '5am', '7am', '9am', '11am', '1pm', '3pm', '5pm', '7pm', '9pm', '11pm', '1am', '3am']
            : [ '5am', '7am', '9am', '11am', '1pm', '3pm', '5pm', '7pm', '9pm', '11pm', '1am', '3am'],
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary
            ]
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: slot === 'month' ? 11 : 11
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      tooltip: {
        theme: 'light'
      }
    }));
  }, [primary, secondary, line, theme, slot]);

  const [series, setSeries] = useState([
    {
      name: 'Page Views',
      data: [0, 86, 28, 115, 48, 210, 136]
    },
    {
      name: 'Sessions',
      data: [0, 43, 14, 56, 24, 105, 68]
    }
  ]);

  useEffect(() => {
    setSeries([
      {
        name: 'EV consumption',
        data: slot === 'month' ? energyConsumptionDayCharge : energyConsumptionNightCharge
      },
      {
        name: 'Network capacity',
        data: slot === 'month' ?  networkCapacity : networkCapacity
      }
    ]);
  }, [slot,energyConsumptionDayCharge,energyConsumptionNightCharge]);

  return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

IncomeAreaChart.propTypes = {
  slot: PropTypes.string
};

export default IncomeAreaChart;
