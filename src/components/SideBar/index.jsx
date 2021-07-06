import React from "react";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import "./styles.css";

const Index = (props) => {

  const history = useHistory();

  const redirectToPatients = () => {
    history.push('/patients')
  }

  const redirectToNurses = () => {
    history.push('/nurses')
  }

  const redirectToLogin = () => {
    history.push('/login')
  }

  return (
    <div id="sideBar">
      <div>
        <div className="contentSideBar" onClick={redirectToPatients}>
          <AssignmentIndIcon />
          <span>Pacientes</span>
        </div>
        <div className="contentSideBar" onClick={redirectToNurses}>
          <AccountCircleIcon />
          <span>Enfermeiros</span>
        </div>
      </div>
      <div className="contentSideBar" onClick={redirectToLogin}>
        <ExitToAppIcon />
        <span>Sair</span>
      </div>
    </div>
  );
};

export default Index;
