import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);
  const [playerForm, setPlayerForm] = React.useState({
    name: "",
    email: "",
    dob: null,
    org: "",
  });
  const updateField = (e) => {
    setPlayerForm({
      ...playerForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = () => {
    handleClose();
    props.addPlayer(playerForm);
  };
  return (
    <div>
      <button className="btn" onClick={() => console.log("hi")}>
        <i className="gg-add" onClick={handleClickOpen} />
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Add Participant"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Your tournament roster
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            name="name"
            value={playerForm.name}
            onChange={updateField}
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            name="email"
            value={playerForm.email}
            onChange={updateField}
          />
          <TextField
            autoFocus
            margin="dense"
            id="dob"
            label="Date of Birth"
            type="dob"
            fullWidth
            name="dob"
            value={playerForm.dob}
            onChange={updateField}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Team"
            type="team"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <style jsx>{`
        .btn {
          outline: none;
          background: transparent;
          cursor: pointer;
          border: none;
          //   color: ;
        }
        i {
          color: white;
        }
        i:hover {
          color: #32e0c4;
        }
      `}</style>
    </div>
  );
}
