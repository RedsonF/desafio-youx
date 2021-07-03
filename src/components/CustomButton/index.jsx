import Button from '@material-ui/core/Button';
import './styles.css';

const index = ({children}) => {

  return (
    <Button className="customButton">
      {children}
    </Button>
  );
};

export default index;
