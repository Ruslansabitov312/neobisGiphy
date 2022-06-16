import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import searchGiphyReducer from './searchGiphyReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  searchGiphyReducer: searchGiphyReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
