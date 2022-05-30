import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledHeader, StyledToogle } from './StyledHeader';

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
    const { name, changeTheme, currentTheme } = this.props;
    return (
      <StyledHeader>
        <h1>
          trybe
          <b>wallet</b>
        </h1>
        <div>
          <h2>{ name }</h2>
          <h2>
            Total
            <b>{ `R$ ${this.calcTotal()}` }</b>
          </h2>
          <StyledToogle htmlFor="themes" className="switch">
            <input id="themes" type="checkbox" onClick={changeTheme} />
            {
              currentTheme === 'light'
                ? <span className="slider round material-icons">light_mode</span>
                : <span className="slider round material-icons">dark_mode</span>
            }
          </StyledToogle>
        </div>
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  currentTheme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Header;
