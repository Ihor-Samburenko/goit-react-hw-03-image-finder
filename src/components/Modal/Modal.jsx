import { Component } from 'react';
import { createPortal } from 'react-dom';

import css from '..//Modal/Modal.module.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleClose);
  }

  handleClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <div onClick={this.handleClose} className={css.overlay}>
        <div className={css.modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
