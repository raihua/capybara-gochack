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

const IncomeAreaChart = ({noEVs, battery, consumer }) => {
  const theme = useTheme();
  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);
  const [Energy, setEnergy] = useState(1);
  const [consumers, setconsumers] = useState(2);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary[700]],
      xaxis: {
        categories:
          ['2028', '2030', '2032', '2034', '2036', '2038', '2040', '2042', '2044', '2046', '2048', '2050'],
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
              secondary,
            ]
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: 11
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
  }, [primary, secondary, line, theme]);

  const [series, setSeries] = useState([]);

  useEffect(() => {
    setEnergy(Math.round((noEVs*battery)/100000));
    setconsumers(Math.round((consumer*9)));
    setSeries([
      {
        name: 'Energy Produced',
        data: [9*Energy, 16*Energy, 25*Energy, 36*Energy, 49*Energy, 64*Energy,  81*Energy, 100*Energy, 121*Energy, 142*Energy, 160*Energy, 190*Energy]
      },
      {
        name: 'Energy Consumed',
        data: [9*consumers, 16*consumers, 25*consumers, 36*consumers, 49*consumers, 64*consumers,  81*consumers, 100*consumers, 121*consumers, 142*consumers,  160*consumers,  190*consumers] 
      }
    ]);
  }, [consumer, consumers, noEVs, battery, Energy]);

  return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

export default IncomeAreaChart;
