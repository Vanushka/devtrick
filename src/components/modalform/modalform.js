import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './modalform.css';
import { Button, Modal, Form } from 'semantic-ui-react';

const ModalExampleCloseIcon = () => (
  <Modal trigger={<a href>Оставить заявку</a>} closeIcon>
    <Modal.Content>
      <div class="modal-inside">
        <p>
          Оставить заявку
        </p>
        <Form>
          <Form.Field>
            <label>Имя</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Телефон</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input />
          </Form.Field>
          <Button type='submit'>Оставить заявку</Button>
        </Form>
      </div>
    </Modal.Content>
  </Modal>
)

export default ModalExampleCloseIcon
