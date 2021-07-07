import React, { useState, useContext } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useHistory } from 'react-router-dom';
import { Context } from '../../context/authContext';

import "./styles.css";

const Index = () => {
  const history = useHistory();
  const { login } = useContext(Context);

  const [name, setName] = useState({ value: "", invalidity: "" });
  const [password, setPassword] = useState({ value: "", invalidity: "" });

  const changeName = (e) => {
    const { value } = e.target;
    setName({ ...name, value });
  };

  const changePassword = (e) => {
    const { value } = e.target;
    setPassword({ ...password, value });
  };

  const handleSubmit = async () => {
    const invalidityName = name.value ? '' : 'Digite o nome';
    const invalidityPassword = password.value ? '' : 'Digite a senha';

    setName({ ...name, invalidity: invalidityName });
    setPassword({ ...password, invalidity: invalidityPassword });

    if (!invalidityName && !invalidityPassword) {
      const msg = await login(name.value, password.value);
      // setErrorMsg(msg);
      if (!msg) history.push('/patients');
    }
  };

  return (
    <div id="login">
      <div id="contentLogin">
        <span>LOGIN</span>
        <CustomInput
          label="Nome"
          value={name.value}
          error={name.invalidity}
          onChange={changeName}
        />
        <CustomInput
          label="Senha"
          value={password.value}
          error={password.invalidity}
          onChange={changePassword}
          type="password"
        />
        <CustomButton onClick={handleSubmit}>ENTRAR</CustomButton>
      </div>
    </div>
  );
};

export default Index;
