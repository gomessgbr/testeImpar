import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertModal({ showModal, handleClose }) {
  return (
    <>
      <Dialog open={showModal} onClose={handleClose}>
        <DialogTitle>Alerta</DialogTitle>
        <DialogContent>
          <DialogContentText>Funcionalidade não implementada</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
