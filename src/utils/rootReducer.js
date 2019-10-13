
import { combineReducers } from 'redux';
import emiDetailReducer from '../containers/emiCalculator/reducer';

  export const rootReducer = combineReducers({
    emiDetail: emiDetailReducer, //future reducer goes here
  });


  export default rootReducer