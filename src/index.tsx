import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '../src/components/GlobalStyles';
import "./translations/i18n";
import Axios from "axios";
import { store } from "./redux/store";
import { Provider } from "react-redux";

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <GlobalStyles>
        <App />
      </GlobalStyles>
     </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
