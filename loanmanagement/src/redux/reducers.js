import {
  CHANGE_ROUTE,
  EMAIL_SIGNIN_CREDENTIALS,
  LOAN_DETAILS,
} from "./constants.js";

const initialstate = {
  route: "localPage",
};

export const searchRoute = (state = initialstate, action = {}) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return Object.assign({}, state, { route: action.payload });
    default:
      return state;
  }
};

const initialstate2 = {
  email: "",
};

export const emailDetails = (state = initialstate2, action = {}) => {
  switch (action.type) {
    case EMAIL_SIGNIN_CREDENTIALS:
      return Object.assign({}, state, { email: action.payload });
    default:
      return state;
  }
};
const initialstate3 = {
  loanArray: [],
};

export const loanDetails = (state = initialstate3, action = {}) => {
  switch (action.type) {
    case LOAN_DETAILS:
      return { ...state, loanArray: [...state.loanArray, action.payload] };

    default:
      return state;
  }
};
