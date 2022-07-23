import * as types from "./actiontype";
import axios from "axios";

export const CheckLogin = (userinput) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios
    .post("https://reqres.in/api/login", userinput)
    .then((r) => dispatch({ type: types.LOGIN_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.LOGIN_FAILURE }));
};
export const CheckRegister = (userinput) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });

  return axios
    .post("https://reqres.in/api/register", userinput)
    .then((r) => dispatch({ type: types.REGISTER_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.REGISTER_FAILURE }));
};
