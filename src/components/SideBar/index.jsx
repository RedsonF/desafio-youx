import React, { useContext } from "react";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import { Context } from '../../context/authContext';

import "./styles.css";

const Index = (props) => {
  const history = useHistory();
  const { logout, authenticated } = useContext(Context);
  const role = localStorage.getItem("myrole");

  const redirectToPatients = () => {
    history.push('/patients')
  }

  const redirectToNurses = () => {
    history.push('/nurses')
  }

  const handleSubmit = () => {
    logout();
  }

  const display = () => {
    return authenticated ? '' : 'none';
  }

  return (
    <div id="sideBar" style={{ display: display() }}>
      <div>
        <div className="contentSideBar" onClick={redirectToPatients}>
          <AssignmentIndIcon />
          <span>Pacientes</span>
        </div>
        {role !== 'NURSE' && (
          <div className="contentSideBar" onClick={redirectToNurses}>
          <AccountCircleIcon />
          <span>Enfermeiros</span>
        </div>
        )}
      </div>
      <div className="contentSideBar" onClick={handleSubmit}>
        <ExitToAppIcon />
        <span>Sair</span>
      </div>
    </div>
  );
};

export default Index;
