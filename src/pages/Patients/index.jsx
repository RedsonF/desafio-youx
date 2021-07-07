import React, { useState, useEffect, useContext } from 'react';
import PatientCard from '../../components/PatientCard';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';
import CustomInput from '../../components/CustomInput';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import MenuItem from '@material-ui/core/MenuItem';
import CustomSelect from "../../components/CustomSelect";
import api from '../../services/api';
import axios from 'axios';

import './styles.css';

const Index = () => {

  const [patients, setPatients] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [name, setName] = useState({ value: '', invalidity: '' });
  const [cpf, setCpf] = useState({ value: '', invalidity: '' });
  const [birth_date, setDate] = useState({ value: '', invalidity: '' });
  const [weight, setWeight] = useState({ value: '', invalidity: '' });
  const [height, setHeight] = useState({ value: '', invalidity: '' });
  const [uf, setUf] = useState({ value: '', invalidity: '' });
  const [refresh, setRefresh] = useState(false);
  const [ufs, setUfs] = useState([])

  useEffect(() => {
    const getPatients = () => {
      api
      .get("/patient/")
      .then((response) => {
        const newPatients = response.data;
        console.log(newPatients)
        setPatients(newPatients)
      })
      .catch((error) => {
        console.log(error)
      });
    }
    const getUfs = () => {
      axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        const newUfs = response.data.map(item => item.sigla).sort()
        setUfs(newUfs)
      })
      .catch((error) => {
        console.log(error)
      });
      
    }
    getPatients();
    getUfs();
  }, [refresh])

  const savePatient = () => {
    api
    .post("/patient/", {name: name.value, cpf: cpf.value, birth_date: birth_date.value, weight: weight.value, height: height.value, uf: uf.value})
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
    setDate({ value: '', invalidity: '' })
    setWeight({ value: '', invalidity: '' })
    setHeight({ value: '', invalidity: '' })
    setUf({ value: '', invalidity: '' })

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
    let { value } = e.target;
    if (value.length === 2 || value.length === 5) value = value + '/'
    if (value.length > 10) return
    setDate({ ...birth_date, value });
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
                value={birth_date.value}
                error={birth_date.invalidity}
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
              <CustomSelect
              label="UF"
              value={uf.value}
              error={uf.invalidity}
              onChange={changeUf}
              >
                {console.log(ufs)}
                {ufs.map(item => { return <MenuItem key={item} value={item}>{item}</MenuItem>} ) }
              </CustomSelect>
            </div>
            <CustomButton onClick={savePatient}>CADASTRAR</CustomButton>
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
          const { name, cpf, birth_date, weight, height, uf, id } = patient;
          return (
            <PatientCard key={id} name={name} cpf={cpf} birth_date={birth_date} weight={weight} height={height} uf={uf} id={id} changeRefresh={() => setRefresh(!refresh)}/>
          );
        })}
      </div>
    </div>
  );
}

export default Index;