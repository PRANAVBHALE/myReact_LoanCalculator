import { call, takeLatest, put } from 'redux-saga/effects';
import { FETCH_EMI_SETTINGS_REQ, FETCH_EMI_SETTINGS_REQ_FAIL, FETCH_EMI_SETTINGS_REQ_SUCCESS } from './actionTypes';
import * as api from './api';

function* getEmiSettings(action) { 

    const {loanAmount,duration} = action.payload
   
    const response = yield call(() => api.getEmi(loanAmount,duration));
   
      if(response.data.status !== "error"){
        
        let {data} = response

        yield put({type:FETCH_EMI_SETTINGS_REQ_SUCCESS ,data})
      }else{
      
        let {message} = response.data

        yield put({ type: FETCH_EMI_SETTINGS_REQ_FAIL,message});
      }
    } 

export default function* emiSettingsSaga() {
    yield takeLatest(FETCH_EMI_SETTINGS_REQ , getEmiSettings)
  }