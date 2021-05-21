import {
  CHANGE_ROUTE,
  EMAIL_SIGNIN_CREDENTIALS,
  LOAN_DETAILS,
} from "./constants.js";

export const setRoute = (text) => {
  return {
    type: CHANGE_ROUTE,
    payload: text,
  };
};

export const setEmailCredentials = (text) => {
  return {
    type: EMAIL_SIGNIN_CREDENTIALS,
    payload: text,
  };
};

export const setLoanDetails = (text) => {
  return {
    type: LOAN_DETAILS,
    payload: text,
  };
};
