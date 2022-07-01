import { ReactNode } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Translation } from '../../../languages/components/Translation';

interface Props {
  isModalOpen: boolean;
  setModalState: Function;
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

export default function Modal({ isModalOpen, setModalState, childrenBody }: Props) {

  const handleClose = () => {
    setModalState(!isModalOpen);
  };

  return (
    <Dialog 
      sx={ModalWrapper} 
      open={isModalOpen} 
      onClose={handleClose}
    >
      <DialogTitle>
        <Translation>modal-title</Translation>
      </DialogTitle>
      <DialogContent>
        {childrenBody}
      </DialogContent>
    </Dialog>
  );
}
