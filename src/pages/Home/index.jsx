import React from 'react';
import CustomButton from '../../components/CustomButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './styles.css';

const index = () => {
  const patients = [
    { nome: 'Redson Farias Barbosa Filho', cpf: '707.404.450-80', dataNasc: '23/04/1997', peso: 68, altura: 176, uf: 'PB' },
    { nome: 'Dimas Wesley Farias de Araújo', cpf: '706.404.451-80', dataNasc: '09/11/1996', peso: 75, altura: 180, uf: 'PB' },
    { nome: 'José Roberto da Silva', cpf: '708.404.450-80', dataNasc: '04/11/2000', peso: 60, altura: 172, uf: 'PB' }
  ]
  return (
    <div className="home">
      <div className="headerHome">
        <h2>PACIENTES</h2>
        <CustomButton>ADICIONAR PACIENTE <AddCircleOutlineIcon style={{ marginBottom: 2, marginLeft: 5, fontSize: 20 }} /></CustomButton>
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
          return (
            <div className="patientCard">
              <div className="patientNameCpfCard">
                <div>
                  <span>{patient.nome}</span>
                </div>
                <div>
                  <span>{patient.cpf}</span>
                </div>
              </div>
              <div style={{ flex: 2 }}>
                <span>{patient.dataNasc}</span>
              </div>
              <div>
                <span>{patient.peso} kg</span>
              </div>
              <div>
                <span>{patient.altura} cm</span>
              </div>
              <div>
                <span>{patient.uf}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default index;