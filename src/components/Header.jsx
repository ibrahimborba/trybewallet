import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  calcTotal = () => {
    const { expenses } = this.props;
    const totalValue = expenses.reduce((acc, expense) => {
      const convertValue = expense.value * expense.exchangeRates[expense.currency].ask;
      const sum = acc + convertValue;
      return sum;
    }, 0);
    return Math.floor(totalValue * 100) / 100;
  };

  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>
          trybe
          <b>wallet</b>
        </h1>
        <h2>{ email }</h2>
        <h2>{ this.calcTotal() }</h2>
        <h2>BRL</h2>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Header;
