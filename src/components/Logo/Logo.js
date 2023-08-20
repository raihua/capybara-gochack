// material-ui
import logo from '../../assets/images/capybaralogo.jpg';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {


  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * 
     *
     */
    <>
    <div >    
      <img src={logo} style={{ alignSelf: 'center' }} alt="Mantis" width="100" />
    </div>

    </>
  );
};

export default Logo;
