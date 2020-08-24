import api from "./service";


export const getAllAccountSummaryBalanceData = () => dispatch => {
  dispatch({ type: "GET_LOADING_STATUS" });
  return api
    .getData("https://demo4846532.mockable.io/mocktable/0")
    .getResponseData("")
    .then(res => {
        return dispatch({
          type: "ACCOUNT_DATA_ALL",
          value: res.data
        });
     
    })
    .catch(err => {
      // return dispatch({
      //   type: "ACCOUNT_SUMMARY_BALANCE_DATA_ERROR",
      //   value: "error"
      // });
    });
};
