import { useEffect, useRef } from 'react';
import useClickOutside from "../../hooks/useClickOutside";
import { checkWindowOverflow } from '../../utils/utils';
import classes from './Modal.module.scss';

interface Props {
  isModalOpen: boolean;
  setModalState: Function;
}

export default function Modal({ isModalOpen, setModalState }: Props) {

  const modalEl = useRef(null);
  const classModalVisibility = isModalOpen ? classes.modal_visible : classes.modal_hidden;

  const toggleModal = () => {
    setModalState(!isModalOpen);
  };

  useEffect(() => {
    checkWindowOverflow(isModalOpen);
  }, [isModalOpen]);

  useClickOutside(modalEl, () => setModalState(false));

  return (
    <div className={`${classes.overlay} ${classModalVisibility}`}>
      <div ref={modalEl} className={classes.modal}>
        <div className={classes.modal_header}>
          <h4>Modal heading</h4>
          <button className={classes.close_btn} onClick={() => toggleModal()}></button>
        </div>
        <div className={classes.modal_body}>Woohoo, you're reading this text in a modal!</div>
        <div className={classes.modal_footer}>
          modal_footer
        </div>
      </div>
    </div>
  );
}
