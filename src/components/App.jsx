import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';

export class App extends Component {
  // state = {
  //   contacts: [],
  //   name: '',
  // };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return <Form onSubmit={this.formSubmitHandler} />;
  }
}

export default App;
