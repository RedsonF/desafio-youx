import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const index = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ textAlign: 'center', flexGrow: 1 }}>
          YOUX
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default index;
