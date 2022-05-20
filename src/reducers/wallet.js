/* eslint-disable default-param-last */
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCIES, GET_EXPENSE, DEL_EXPENSE, EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
        currencies: [...action.payload],
      };
    case GET_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case DEL_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses].filter((expense) => expense.id !== action.payload),
      };
    case EDIT_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses].map((expense) => (
          expense.id === action.payload.id ? { ...expense, ...action.payload } : expense
        )),
      };
    default:
      return state;
  }
};

export default walletReducer;
