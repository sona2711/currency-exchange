import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { HistoryProvider } from './context/HistoryContext';
import { store } from './redux/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <HistoryProvider>
    <Router>
      <App />
    </Router>
  </HistoryProvider>
</Provider>
);


reportWebVitals();
