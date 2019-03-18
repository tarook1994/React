import React, { Component } from 'react';
import PropTypes from 'prop-types'

import classes from './Person.css';
import AuthContext from '../../../Context/auth-context'


class Person extends Component {

  static contextType = AuthContext;


  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={classes.Person}>
        {
          this.context.authenticated ? <p>Authenticated</p> : <p>Please login</p>

        }
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );

  }

}

Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
}

export default Person;
