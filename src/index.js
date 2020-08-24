/*
 src/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from  "./pages/Dashboard/Dashboard"
import TransactionSummary from  "./pages/TransactionSummary/TransactionSummary"
import HeaderMain from "./commonComponents/headermain/Header";
import Footer from "./commonComponents/footermain/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
 <Provider store={configureStore()}>
   <Router basename="/letsWork">
        <div>
          <HeaderMain />
          <Switch>
          <Route  path={"/TransactionSummary"} component={TransactionSummary} />
            <Route path={"/"} component={Dashboard} />
          
          </Switch>
          <Footer />
        </div>
      </Router>
 </Provider>,
 document.getElementById('root')
);
registerServiceWorker();