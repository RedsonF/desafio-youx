import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';
import CustomInput from '../../components/CustomInput';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './styles.css';

const Index = (props) => {
  const [patientModal, setPatientModal] = useState(false);
  const [patientDeleteModal, setPatientDeleteModal] = useState(false);
  const [name, setName] = useState({ value: '', invalidity: '' });
  const [cpf, setCpf] = useState({ value: '', invalidity: '' });
  const [date, setDate] = useState({ value: '', invalidity: '' });
  const [weight, setWeight] = useState({ value: '', invalidity: '' });
  const [height, setHeight] = useState({ value: '', invalidity: '' });
  const [uf, setUf] = useState({ value: '', invalidity: '' });

  const togglePatientModal = () => {
    if (!patientModal) {
      setName({ value: props.name, invalidity: '' });
      setCpf({ value: props.cpf, invalidity: '' });
      setDate({ value: props.date, invalidity: '' });
      setWeight({ value: props.weight, invalidity: '' });
      setHeight({ value: props.height, invalidity: '' });
      setUf({ value: props.uf, invalidity: '' });
    }
    setPatientModal(!patientModal);
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

  const togglePatientDeleteModal = () => {
    if (!patientDeleteModal) {
      togglePatientModal();
    }
    setPatientDeleteModal(!patientDeleteModal);
  };

  const getModal = () => {
    return (
      <CustomModal open={patientModal} setOpen={togglePatientModal}>
        <div className="patientModal">
          <strong>PACIENTE</strong>
          <div style={{ alignSelf: 'flex-end', marginTop: 20 }}>
            <CustomButton onClick={togglePatientDeleteModal} size="small" color="red">
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
          <div className="buttonsPatientModal">
            <CustomButton onClick={togglePatientModal} color="outlined">CANCELAR</CustomButton>
            <CustomButton>SALVAR</CustomButton>
          </div>
        </div>
      </CustomModal>
    );
  }

  const getDeleteModal = () => {
    return (
      <CustomModal open={patientDeleteModal} setOpen={togglePatientDeleteModal}>
        <div className="patientModal">
          <strong>EXCLUIR PACIENTE</strong>
          <div className="msgPatientDeleteModal">
            <span>Tem certeza que deseja exlcuir o paciente {name.value}?</span>
          </div>
          <div className="buttonsPatientModal">
            <CustomButton onClick={togglePatientDeleteModal} color="outlined">CANCELAR</CustomButton>
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
      <div className="patientCard" onClick={() => togglePatientModal()}>
        <div className="patientNameCpfCard">
          <div>
            <span>{props.name}</span>
          </div>
          <div>
            <span>{props.cpf}</span>
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <span>{props.date}</span>
        </div>
        <div>
          <span>{props.weight} kg</span>
        </div>
        <div>
          <span>{props.height} cm</span>
        </div>
        <div>
          <span>{props.uf}</span>
        </div>
      </div>
    </>
  );
};

export default Index;
