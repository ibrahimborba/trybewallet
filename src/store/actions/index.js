// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSE = 'GET_EXPENSE';
export const DEL_EXPENSE = 'DEL_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

const BRL = {
  code: 'BRL',
  codein: 'BRL',
  name: 'Real Brasileiro/Real Brasileiro',
  high: '1.0000',
  low: '1.0000',
  varBid: '',
  pctChange: '',
  bid: '1.0000',
  ask: '1.0000',
  timestamp: '',
  create_date: '',
};

export const actionUserEmail = (email) => ({
  type: USER_EMAIL,
  payload: email,
});

export const actionCurrenciesCodes = (currencies) => ({
  type: GET_CURRENCIES,
  payload: [...currencies],
});

export const actionFetchCurrCodes = () => async (dispatch) => {
  const CURRENCY_API = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(CURRENCY_API);
  const currencies = await response.json();
  const currenciesCodes = Object.keys(currencies)
    .filter((code) => code !== 'USDT');
  currenciesCodes.unshift('BRL');
  dispatch(actionCurrenciesCodes(currenciesCodes));
};

export const actionCurrenciesRate = (expense, id, rates) => ({
  type: GET_EXPENSE,
  payload: {
    id,
    ...expense,
    exchangeRates: rates,
  },
});

export const actionFetchCurrRate = (expense, id) => async (dispatch) => {
  const CURRENCY_API = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(CURRENCY_API);
  const currencies = await response.json();
  delete currencies.USDT;
  currencies.BRL = BRL;
  dispatch(actionCurrenciesRate(expense, id, currencies));
};

export const actionDelExpense = (id) => ({
  type: DEL_EXPENSE,
  payload: id,
});

export const actionEditExpense = (expense, id) => ({
  type: EDIT_EXPENSE,
  payload: {
    id,
    ...expense,
  },
});
