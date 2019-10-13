import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'   
import loggerMiddleware from 'redux-logger'
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)


  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  sagaMiddleware.run(rootSaga)


  return store
}