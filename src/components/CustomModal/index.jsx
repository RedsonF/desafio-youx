import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import DeleteButton from 'components/DeleteButton';

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #d4d4d4',
      borderRadius: '10px',
      boxShadow: theme.shadows[5],
      padding: 20,
    },
  })
);

export default function TransitionsModal({
  open,
  setOpen,
  children,
}) {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={setOpen}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper} style={{ position: 'relative' }}>
          {/* <div style={{ position: 'absolute', top: -8, right: -8 }}>
            <DeleteButton close onClick={setOpen} />
          </div> */}
          {children}
        </div>
      </Fade>
    </Modal>
  );
}
