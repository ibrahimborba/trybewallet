import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './StyledHeader';

class Header extends Component {
  calcTotal = () => {
    const { expenses } = this.props;
    const totalValue = expenses.reduce((acc, expense) => {
      const convertValue = expense.value * expense.exchangeRates[expense.currency].ask;
      const sum = acc + convertValue;
      return sum;
    }, 0);
    return (Math.floor(totalValue * 100) / 100).toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <StyledHeader>
        <h1>
          trybe
          <b>wallet</b>
        </h1>
        <div>
          <h2>{ email }</h2>
          <h2><b>{ `R$ ${this.calcTotal()}` }</b></h2>
        </div>
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Header;
