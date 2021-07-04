import React from 'react';
import TextField from '@material-ui/core/TextField';
import './styles.css';

const Index = (props) => {
  return (
    <div className="customInput">
      <TextField
        inputProps={{ ...props }}
        label={props.label}
        fullWidth
        variant="outlined"
        margin="dense"
        disabled={props.disabled}
        error={props.error !== ''}
      />
    </div>
  );
};

export default Index;
