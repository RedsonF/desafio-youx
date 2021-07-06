import React, { useState } from 'react';
import NurseCard from '../../components/NurseCard';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';
import CustomInput from '../../components/CustomInput';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import './styles.css';

const Index = () => {
  const patients = [
    { name: 'Redson Farias Barbosa Filho', cpf: '707.404.450-80', password: '1212adsad' },
    { name: 'Dimas Wesley Farias de Araújo', cpf: '706.404.451-80', password: 'blablabla' },
    { name: 'José Roberto da Silva', cpf: '708.404.450-80', password: '21022020' },
  ]
  const [addModal, setAddModal] = useState(false);
  const [name, setName] = useState({ value: '', invalidity: '' });
  const [cpf, setCpf] = useState({ value: '', invalidity: '' });
  const [password, setPassword] = useState({ value: '', invalidity: '' });

  const toggleAddModal = () => {
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
            <CustomButton>CADASTRAR</CustomButton>
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
        <div>
          <span>CPF</span>
        </div>
        <div>
          <span>Senha</span>
        </div>
        </div>
      </div>
      <div className="patients">
        {patients.map(patient => {
          const { name, cpf, password } = patient;
          return (
            <NurseCard key={cpf} name={name} cpf={cpf} password={password} />
          );
        })}
      </div>
    </div>
  );
}

export default Index;