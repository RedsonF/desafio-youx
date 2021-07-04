import Button from '@material-ui/core/Button';
import './styles.css';

const Index = ({ children, onClick, size, color }) => {

  const style = () => {
    let newStyle = "customButton";
    if (size === 'small') {
      newStyle = "customButton smallButton";
    }
    if (size === 'big') {
      newStyle = "customButton bigButton";
    }
    return newStyle;
  }

  const style2 = () => {
    let newColor = "";
    if (color === "red") {
      newColor = "redBackground";
    }
    else if (color === "outlined") {
      newColor = "outlined";
    }
    else if (color === "transparent") {
      newColor = "transparentBackground";
    }
    return newColor;
  }

  return (
    <Button onClick={onClick} className={`${style()} ${style2()}`}>
      {children}
    </Button>
  );
};

export default Index;
