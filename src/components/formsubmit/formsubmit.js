/* eslint-disable */
import React, { Component } from 'react';
import { Button, Form, Container, Icon } from 'semantic-ui-react';
import InputMask from 'react-input-mask';

class FormSubmit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
    }
  }

  sendContact = () => {
    const cState = this.state
    const bodyStr = JSON.stringify(cState)
    const self = this
    fetch('http://localhost:3001/contact/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cState)
    }).then(function(res){
      return res.json();
    })
    .then(function(data){
      alert( data.msg )
      self.setState({
        name: '',
        email: '',
        phone: '',
      })
    })
    .catch(function(res){
      alert('К сожалению, что-то пошло не так. Попробуйте повторить отправку позже.')
      console.log(res, 'Error!');
    });

  }
  handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }
  render() {
    const {name, email, phone} = this.state
    return (
      <Form name='form' id='form' onSubmit={this.sendContact} >
        <Form.Input placeholder="Имя" name='name' value={name} onChange={this.handleInputChange} required />
        <Form.Input label={'Телефон'} placeholder="+7(___)___-__-__" mask='+7\(999)999-99-99' maskChar='' name='phone' value={phone} onChange={this.handleInputChange} required />
        <Form.Input placeholder="E-mail" name='email' type='email' value={email} onChange={this.handleInputChange} required />
        <Button className='Button_2' type='submit'>Отправить</Button>
      </Form>
    );
  }
}

export default FormSubmit;
