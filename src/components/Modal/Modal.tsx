import { ReactNode, useEffect } from 'react';
import { checkWindowOverflow } from '../../utils/utils';
import classes from './Modal.module.scss';

interface Props {
  isModalOpen: boolean;
  setModalState: Function;
  textTitle: string;
  childrenBody: ReactNode;
}

export default function Modal({ isModalOpen, setModalState, textTitle, childrenBody }: Props) {

  const classModalVisibility = isModalOpen ? classes.modal_visible : classes.modal_hidden;

  const toggleModal = () => {
    setModalState(!isModalOpen);
  };

  useEffect(() => {
    checkWindowOverflow(isModalOpen);
  }, [isModalOpen]);


  return (
    <div className={`${classes.overlay} ${classModalVisibility}`}>
      <div className={classes.modal}>
        <div className={classes.modal_header}>
          <h4 className={classes.modal_header__title}>{textTitle}</h4>
          <button className={classes.close_btn} onClick={() => toggleModal()}></button>
        </div>
        <div className={classes.modal_body}>
          {childrenBody}
        </div>
      </div>
    </div>
  );
}
