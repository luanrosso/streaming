import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

interface Props {
  id: string | number;
  repository: any;
}

export function DialogConfirm({ id, repository }: Props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleConfirm = async () => {
    await repository.delete(id);
    setOpen(false);
    window.location.reload();
  };

  return (
    <>
      <Button variant='contained' size='large' color='error' fullWidth onClick={handleClickOpen}>
        Excluir
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Confirmação</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Você realmente deseja deletar esse elemento?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='error' onClick={handleCancel}>
            Cancelar
          </Button>
          <Button color='success' onClick={handleConfirm} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
