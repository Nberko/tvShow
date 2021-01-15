import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './root'
import thunk from 'redux-thunk';

export const history = createBrowserHistory()

const configureStore = (preloadedState) => {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk,
      ),
    ),
  )

  return store
}

export default configureStore;