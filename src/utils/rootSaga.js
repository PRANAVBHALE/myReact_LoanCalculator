import { fork  } from "redux-saga/effects";
import emiSettingsSaga from "../containers/emiCalculator/saga";

export default function* rootSaga () {
    yield [
        yield fork (emiSettingsSaga),  //future saga goes here
    ];
}