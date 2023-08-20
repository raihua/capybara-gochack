import PropTypes from 'prop-types';


// material-ui



// project import
import Logo from './Logo';


// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {

  return (
      <Logo />
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
