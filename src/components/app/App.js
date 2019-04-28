/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h1>Hello there!</h1>
      </div>
    );
  }
}
