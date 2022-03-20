import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
// sagas
import getBlogPostsSaga from './saga/getBlogPostsSaga'

// create the saga middleware

const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

// then run the saga
sagaMiddleware.run(getBlogPostsSaga)

export default store