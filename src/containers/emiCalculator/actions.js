import { FETCH_EMI_SETTINGS_REQ } from "./actionTypes";


export function fetchEmiSettings(loanAmount,duration) {

    return {
      type: FETCH_EMI_SETTINGS_REQ,
      payload : {loanAmount,duration}
    };
  }