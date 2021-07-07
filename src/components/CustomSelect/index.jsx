import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './styles.css';

const Index = (props) => {
  return (
    <FormControl
      variant="outlined"
      fullWidth
      className="customFormControl"
      error={props.error !== ''}
    >
      <InputLabel style={{ top: 0 }} id="demo-simple-select-outlined-label">
        {props.label}
      </InputLabel>
      <Select
        className="customSelect"
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={props.value}
        onChange={props.onChange}
        label={props.label}
      >
        {props.children}
      </Select>
    </FormControl>
  );
};

export default Index;
