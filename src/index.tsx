import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import createRootReducer from './redux/root';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { createBrowserHistory } from 'history';
import App from './App';

const history = createBrowserHistory();

const store = configureStore(createStore(createRootReducer(history)));

ReactDOM.render(
  <Provider store={store} >
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
