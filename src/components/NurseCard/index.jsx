import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';
import CustomInput from '../../components/CustomInput';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './styles.css';

const Index = (props) => {
  const [nurseModal, setPatientModal] = useState(false);
  const [nurseDeleteModal, setNurseDeleteModal] = useState(false);
  const [name, setName] = useState({ value: '', invalidity: '' });
  const [cpf, setCpf] = useState({ value: '', invalidity: '' });
  const [password, setPassword] = useState({ value: '', invalidity: '' });


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
    if (!nurseDeleteModal) {
      toggleNurseModal();
    }
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
            <CustomButton color="red">EXCLUIR</CustomButton>
          </div>
        </div>
      </CustomModal>
    );
  }

  return (
    <>
      {getModal()}
      {getDeleteModal()}
      <div className="nurseCard" onClick={() => toggleNurseModal()}>
          <div style={{ flex: 2 }}>
            <span>{props.name}</span>
          </div>
          <div>
            <span>{props.cpf}</span>
          </div>
          <div>
            <span>{props.password.split('').map(item => "*")}</span>
          </div>
      </div>
    </>
  );
};

export default Index;
