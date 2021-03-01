import { Grid, Row} from 'react-flexbox-grid';
import './loaderStyles.css';
import Logo from './logo.svg';

export const Loader = () => {
  return (
    <Grid fluid>
        <Row center="sm" style={{justifyContent: 'center'}}>
        <img className="rotate" src={Logo} alt="Loading" />
        </Row>
    </Grid>
  );
  }
  
  