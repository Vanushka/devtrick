import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './modalform.css';
import './media.css';
import { Modal } from 'semantic-ui-react';
import FormSubmit from '../formsubmit/formsubmit';

const ModalExampleCloseIcon = () => (
  <Modal trigger={<div>Оставить заявку <br /> на проект</div>} closeIcon>
    <Modal.Content>
      <div className="modal-inside">
        <p>
          Оставить заявку
        </p>
        <FormSubmit />
      </div>
    </Modal.Content>
  </Modal>
)

export default ModalExampleCloseIcon
