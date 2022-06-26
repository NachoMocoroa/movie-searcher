import { ReactNode } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  isModalOpen: boolean;
  setModalState: Function;
  textTitle: string;
  childrenBody: ReactNode;
}

const ModalWrapper = (() => ({
  '& .MuiDialogTitle-root': {
    padding: '2rem 2.5rem 1rem 2.5rem',
    fontWeight: '500',
    fontSize: '2.5rem',
    lineHeight: '1.6',
    color: '#333333',
  },
}));

export default function Modal({ isModalOpen, setModalState, textTitle, childrenBody }: Props) {

  const handleClose = () => {
    setModalState(!isModalOpen);
  };

  return (
    <Dialog 
      sx={ModalWrapper} 
      open={isModalOpen} 
      onClose={handleClose}
    >
      <DialogTitle>{textTitle}</DialogTitle>
      <DialogContent>
        {childrenBody}
      </DialogContent>
    </Dialog>
  );
}
