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
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ this.calcTotal() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Header;
