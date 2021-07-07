import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';
import CustomInput from '../../components/CustomInput';
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import './styles.css';
import api from "../../services/api";

const Index = (props) => {
  const role = localStorage.getItem("myrole");

  const [nurseModal, setPatientModal] = useState(false);
  const [nurseDeleteModal, setNurseDeleteModal] = useState(false);
  const [name, setName] = useState({ value: '', invalidity: '' });
  const [cpf, setCpf] = useState({ value: '', invalidity: '' });
  const [password, setPassword] = useState({ value: '', invalidity: '' });

  const deleteNurse = () => {
    api
    .delete(`/user/${props.id}`)
    .then((response) => {
      props.changeRefresh();
    })
    .catch((error) => {
      console.log(error)
    });
    toggleNurseDeleteModal(false);
  }

  const toggleNurseModal = () => {
    if (!nurseModal) {
      setName({ value: props.name, invalidity: '' });
      setCpf({ value: props.cpf, invalidity: '' });
      setPassword({ value: props.password, invalidity: '' });

    }
    setPatientModal(!nurseModal);
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

  const toggleNurseDeleteModal = () => {
    setNurseDeleteModal(!nurseDeleteModal);
  };

  const getModal = () => {
    return (
      <CustomModal open={nurseModal} setOpen={toggleNurseModal}>
        <div className="patientModal">
          <strong>ENFERMEIRO</strong>
          <div style={{ alignSelf: 'flex-end', marginTop: 20 }}>
            <CustomButton onClick={toggleNurseDeleteModal} size="small" color="red">
              EXCLUIR <DeleteForeverIcon fontSize="small" />
            </CustomButton>
          </div>
          <div style={{ margin: '10px 0', width: '100%' }}>
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
          <div className="buttonsPatientModal">
            <CustomButton onClick={toggleNurseModal} color="outlined">CANCELAR</CustomButton>
            <CustomButton>SALVAR</CustomButton>
          </div>
        </div>
      </CustomModal>
    );
  }

  const getDeleteModal = () => {
    return (
      <CustomModal open={nurseDeleteModal} setOpen={toggleNurseDeleteModal}>
        <div className="patientModal">
          <strong>EXCLUIR ENFERMEIRO</strong>
          <div className="msgPatientDeleteModal">
            <span>Tem certeza que deseja exlcuir o enfermeiro(a) {name.value}?</span>
          </div>
          <div className="buttonsPatientModal">
            <CustomButton onClick={toggleNurseDeleteModal} color="outlined">CANCELAR</CustomButton>
            <CustomButton onClick={deleteNurse} color="red">EXCLUIR</CustomButton>
          </div>
        </div>
      </CustomModal>
    );
  }

  return (
    <>
      {getModal()}
      {getDeleteModal()}
      <div className="nurseCard">
      <div style={{ position: "absolute", top: -5, right: -5 }}>
      {role === 'DOCTOR' && (
        <IconButton
            style={{ background: "#ee0c2a", padding: 0 }}
            size="small"
            onClick={() => toggleNurseDeleteModal()}
          >
            <DeleteForeverIcon style={{ fontSize: 20, color: "#fff", margin: 0 }} />
          </IconButton>
      )}
          
        </div>
          <div style={{ flex: 2 }}>
            <span>{props.name}</span>
          </div>
      </div>
    </>
  );
};

export default Index;
