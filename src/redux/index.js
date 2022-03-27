import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import movie from './reducers/movie'

const reducers = combineReducers({
    movie
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
))

export default store