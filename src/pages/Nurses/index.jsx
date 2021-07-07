import React, { useState, useEffect } from 'react';
import NurseCard from '../../components/NurseCard';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';
import CustomInput from '../../components/CustomInput';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import './styles.css';
import MenuItem from '@material-ui/core/MenuItem';
import CustomSelect from "../../components/CustomSelect";
import api from '../../services/api';
import axios from 'axios';

const Index = () => {
  const [nurses, setNurses] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [name, setName] = useState({ value: '', invalidity: '' });
  const [cpf, setCpf] = useState({ value: '', invalidity: '' });
  const [password, setPassword] = useState({ value: '', invalidity: '' });
  const [refresh, setRefresh] = useState(false);


  useEffect(() => {
    const getNurses = () => {
      api
      .get("/user/")
      .then((response) => {
        const newNurses = response.data;
        console.log(newNurses)
        setNurses(newNurses)
      })
      .catch((error) => {
        console.log(error)
      });
    }

    getNurses();
  }, [refresh])

  
  const saveNurse = () => {
    api
    .post("/user/", {name: name.value, cpf: cpf.value, password: password.value})
    .then((response) => {
      setRefresh(!refresh)
    })
    .catch((error) => {
      console.log(error)
    });
    toggleAddModal();
  }

  const toggleAddModal = () => {
    setName({ value: '', invalidity: '' })
    setCpf({ value: '', invalidity: '' })
    setPassword({ value: '', invalidity: '' })
    setAddModal(!addModal);
  };

  const changeName = (e) => {
    const { value } = e.target;
    setName({ ...name, value });
  }

  const changeCpf = (e) => {
    const { value } = e.target;
    setCpf({ ...cpf, value });
  }

  const changePassword = (e) => {
    const { value } = e.target;
    setPassword({ ...password, value });
  }

  const getModal = () => {
    return (
      <CustomModal open={addModal} setOpen={toggleAddModal}>
        <>
          <div style={{ position: 'absolute', top: -10, right: -10 }}>
            <IconButton
              style={{ background: '#ee0c2a', padding: 0 }}
              size="small"
              onClick={() => toggleAddModal()}
            >
              <CancelIcon style={{ fontSize: 30, color: '#fff', margin: 0 }} />
            </IconButton>
          </div>
          <div className="addModal">
            <strong>CADASTRO DE ENFERMEIRO</strong>
            <div style={{ margin: '10px 0' }}>
              <CustomInput
                label="Nome"
                value={name.value}
                error={name.invalidity}
                onChange={changeName}
              />
              <CustomInput
                label="CPF"
                value={cpf.value}
                error={cpf.invalidity}
                onChange={changeCpf}
              />
              <CustomInput
                label="Senha"
                value={password.value}
                error={password.invalidity}
                onChange={changePassword}
                type="password"
              />
            </div>
            <CustomButton onClick={saveNurse}>CADASTRAR</CustomButton>
          </div>
        </>
      </CustomModal>
    );
  }

  return (
    <div className="home">
      {getModal()}
      <div className="headerHome">
        <h2>ENFERMEIROS</h2>
        <CustomButton onClick={() => toggleAddModal()}>
          ADICIONAR ENFERMEIRO <AddCircleOutlineIcon className="iconButton" />
        </CustomButton>
      </div>
      <div className="headerNurses">
        <div>
        <div style={{ flex: 2 }}>
          <span>Nome</span>
        </div>
        </div>
      </div>
      <div className="patients">
        {nurses.map(patient => {
          const { name, cpf, password, id } = patient;
          return (
            <NurseCard key={id} name={name} cpf={cpf} password={password} id={id} changeRefresh={() => setRefresh(!refresh)}/>
          );
        })}
      </div>
    </div>
  );
}

export default Index;