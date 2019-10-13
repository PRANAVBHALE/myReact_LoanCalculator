import { FETCH_EMI_SETTINGS_REQ, FETCH_EMI_SETTINGS_REQ_FAIL, FETCH_EMI_SETTINGS_REQ_SUCCESS } from './actionTypes';
import produce from 'immer';
export const initialState = {
    requesting: false,
    error:false,
    interestRate:"",
    monthlyAmount: "",
    currency: "USD",
    principalAmount : "",
    message:""
};



  const emiDetailReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {

      case FETCH_EMI_SETTINGS_REQ:
        return {
          ...state,
          requesting: true,
        //  error:false
        };

      case FETCH_EMI_SETTINGS_REQ_SUCCESS:
        return {
          ...state,
          requesting: false,
          error:false,
          interestRate:action.data.interestRate,
          monthlyAmount: action.data.monthlyPayment.amount,
          currency: "USD",
           principalAmount : action.data.principal.amount,
           message:""
        };

      case FETCH_EMI_SETTINGS_REQ_FAIL:
        return {
          ...state,
          requesting: false,
          error:true,

          interestRate:"",
          monthlyAmount: "",
          currency: "USD",
          principalAmount : "",
          message: action.message
          
        };
        
      default:
        return state;
    }
  });

export default emiDetailReducer;