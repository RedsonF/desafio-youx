import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Index = () => {

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1, fontWeight: 'bold', padding: '0 10px' }}>
          YOUX
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Index;
