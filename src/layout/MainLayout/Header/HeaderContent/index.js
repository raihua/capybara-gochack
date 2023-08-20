// material-ui
import { Box, useMediaQuery } from '@mui/material';

// project import
import { Typography } from '@mui/material';


// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {!matchesXs && <Typography variant="h5">ElectroForesight Dashboard</Typography>}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      

    </>
  );
};

export default HeaderContent;
