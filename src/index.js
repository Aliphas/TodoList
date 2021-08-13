import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './store/state';

const StoreContext = React.createContext(state)
export const useStore = () => { 
  return React.useContext(StoreContext)
}

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={state}>
      <App useStore={useStore}/>
    </StoreContext.Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default StoreContext
