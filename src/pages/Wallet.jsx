/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Input from '../components/Input';
import { StyledWalletForm, StyledWalletTable } from './StyledWallet';
import {
  actionFetchCurrCodes,
  actionFetchCurrRate,
  actionDelExpense,
  actionEditExpense,
} from '../store/actions';

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  newOrEdit: 'new',
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionFetchCurrCodes());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  saveNewExpense = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const expenseID = Date.now();
    const {
      value, description, currency, method, tag,
    } = this.state;
    const expense = {
      value, description, currency, method, tag,
    };
    dispatch(actionFetchCurrRate(expense, expenseID));
    this.setState(INITIAL_STATE);
  };

  getCurrencyName = (currency) => {
    const nameSplited = currency.split('/');
    return nameSplited[0];
  };

  calcExchange = (value, rate) => Math.round((value * rate) * 100) / 100;

  delExpense = (id) => {
    const { dispatch } = this.props;
    dispatch(actionDelExpense(id));
  };

  editExpense = (id) => {
    this.setState({ newOrEdit: 'edit', id });
  };

  saveEditedExpense = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const {
      value, description, currency, method, tag, id,
    } = this.state;
    const expense = {
      value, description, currency, method, tag,
    };
    dispatch(actionEditExpense(expense, id));
    this.setState(INITIAL_STATE);
  };

  render() {
    const { email, currencies, expenses } = this.props;
    const { value, description, newOrEdit } = this.state;
    return (
      <section>
        <Header email={email} expenses={expenses} />
        <StyledWalletForm>
          <Input
            type="number"
            name="value"
            label="Valor"
            onChange={this.handleChange}
            value={value}
            required
          />
          <Input
            type="text"
            name="description"
            label="Descrição"
            onChange={this.handleChange}
            value={description}
            required
          />
          <label htmlFor="currency">
            Moeda
            <select
              name="currency"
              id="currency"
              onChange={this.handleChange}
            >
              { currencies.map((currCode) => (
                <option key={currCode} value={currCode}>{currCode}</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método
            <select
              name="method"
              id="method"
              onChange={this.handleChange}
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria
            <select
              name="tag"
              id="tag"
              onChange={this.handleChange}
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          {
            newOrEdit === 'new'
              ? (
                <button
                  type="submit"
                  onClick={this.saveNewExpense}
                >
                  Adicionar despesa
                </button>
              )
              : (
                <button
                  type="submit"
                  onClick={this.saveEditedExpense}
                >
                  Editar despesa
                </button>
              )
          }
        </StyledWalletForm>
        <div style={{ overflowX: 'auto' }}>
          <StyledWalletTable>
            <thead>
              <tr>
                <th>Editar</th>
                <th>Valor</th>
                <th>Descrição</th>
                <th>Moeda</th>
                <th>Método</th>
                <th>Categoria</th>
                <th>Câmbio</th>
                <th>Valor convertido</th>
                <th>Moeda de conversão</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              { expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.editExpense(expense.id)}
                    >
                      Editar
                    </button>
                  </td>
                  <td>{ parseFloat(expense.value).toFixed(2) }</td>
                  <td>{ expense.description }</td>
                  <td>
                    {this.getCurrencyName(
                      expense.exchangeRates[expense.currency].name,
                    )}
                  </td>
                  <td>{ expense.method }</td>
                  <td>{ expense.tag }</td>
                  <td>
                    { parseFloat(Math.round(
                      expense.exchangeRates[expense.currency].ask * 100,
                    ) / 100).toFixed(2) }
                  </td>
                  <td>
                    {this.calcExchange(
                      expense.value,
                      expense.exchangeRates[expense.currency].ask,
                    )}
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.delExpense(expense.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledWalletTable>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps)(Wallet);
