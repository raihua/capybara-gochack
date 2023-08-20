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

const IncomeAreaChart = ({ gdp }) => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);
  const [factor, setFactor] = useState(1);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary.main, theme.palette.primary[700]],
      xaxis: {
        categories: [
          '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020',
          '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030',
          '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040',
          '2041', '2042', '2043', '2044', '2045', '2046', '2047', '2048', '2049', '2050'
        ],
        labels: {
          style: {
            colors: Array(40).fill(secondary)
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: 40
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
    setFactor(gdp);
    const TotalEvSalesValues = [
      49, 253, 293, 1322, 1771, 1369, 2284, 2216, 6718, 6900, 20665, 39353,
      67251.49646, 103112.3242, 144361.177, 195559.1298, 249872.1911,
      314455.5603, 381639.5496, 457896.0179, 537547.7182, 624209.7982,
      715592.2503, 811857.8442, 913950.2014, 1019357.559, 1131013.844,
      1245251.18, 1365382.032, 1488114.129, 1615820.167, 1746586.902,
      1881208.114, 2019410.341, 2160494.801, 2305448.408, 2452671.201,
      2603691.337, 2756764.043, 2913240.972
    ];

    setSeries([
      {
        name: 'Total EV Sales',
        data: TotalEvSalesValues.map(value => value * factor)
      }
    ]);
  }, [factor, gdp]);


  return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

IncomeAreaChart.propTypes = {
  slot: PropTypes.string
};

export default IncomeAreaChart;
