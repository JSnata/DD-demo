import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

function ConfirmationDialogRaw(props) {
  const { onClose, open, callback, title, content, ...other } = props;

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    callback();
    onClose();
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>{content}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button color="error" variant="contained" onClick={handleOk}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function ConfirmationDialog({
  id,
  title,
  content,
  openDialog,
  setOpenDialog,
  callback = () => {},
}) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <ConfirmationDialogRaw
      id={id}
      title={title}
      content={content}
      keepMounted
      open={open}
      onClose={handleClose}
      callback={callback}
    />
  );
}
