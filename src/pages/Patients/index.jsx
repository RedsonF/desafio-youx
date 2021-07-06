import React, { useState } from 'react';
import PatientCard from '../../components/PatientCard';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';
import CustomInput from '../../components/CustomInput';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import './styles.css';

const Index = () => {
  const patients = [
    { name: 'Redson Farias Barbosa Filho', cpf: '707.404.450-80', date: '23/04/1997', weight: 68, height: 176, uf: 'PB' },
    { name: 'Dimas Wesley Farias de Araújo', cpf: '706.404.451-80', date: '09/11/1996', weight: 75, height: 180, uf: 'PB' },
    { name: 'José Roberto da Silva', cpf: '708.404.450-80', date: '04/11/2000', weight: 60, height: 172, uf: 'PB' },
  ]
  const [addModal, setAddModal] = useState(false);
  const [name, setName] = useState({ value: '', invalidity: '' });
  const [cpf, setCpf] = useState({ value: '', invalidity: '' });
  const [date, setDate] = useState({ value: '', invalidity: '' });
  const [weight, setWeight] = useState({ value: '', invalidity: '' });
  const [height, setHeight] = useState({ value: '', invalidity: '' });
  const [uf, setUf] = useState({ value: '', invalidity: '' });

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

  const changeDate = (e) => {
    const { value } = e.target;
    setDate({ ...date, value });
  }

  const changeWeight = (e) => {
    const { value } = e.target;
    setWeight({ ...weight, value });
  }

  const changeHeight = (e) => {
    const { value } = e.target;
    setHeight({ ...height, value });
  }

  const changeUf = (e) => {
    const { value } = e.target;
    setUf({ ...uf, value });
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
            <strong>CADASTRO DE PACIENTE</strong>
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
                label="Data de nascimento"
                value={date.value}
                error={date.invalidity}
                onChange={changeDate}
              />
              <CustomInput
                label="Peso(kg)"
                value={weight.value}
                error={weight.invalidity}
                onChange={changeWeight}
                type="number"
              />
              <CustomInput
                label="Altura(cm)"
                value={height.value}
                error={height.invalidity}
                onChange={changeHeight}
                type="number"
              />
              <CustomInput
                label="UF"
                value={uf.value}
                error={uf.invalidity}
                onChange={changeUf}
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
        <h2>PACIENTES</h2>
        <CustomButton onClick={() => toggleAddModal()}>
          ADICIONAR PACIENTE <AddCircleOutlineIcon className="iconButton" />
        </CustomButton>
      </div>
      <div className="headerPatients">
        <div style={{ flex: 3 }}>
          <span>Paciente</span>
        </div>
        <div style={{ flex: 2 }}>
          <span>Data de nascimento</span>
        </div>
        <div>
          <span>Peso</span>
        </div>
        <div>
          <span>Altura</span>
        </div>
        <div>
          <span>UF</span>
        </div>
      </div>
      <div className="patients">
        {patients.map(patient => {
          const { name, cpf, date, weight, height, uf } = patient;
          return (
            <PatientCard key={cpf} name={name} cpf={cpf} date={date} weight={weight} height={height} uf={uf} />
          );
        })}
      </div>
    </div>
  );
}

export default Index;