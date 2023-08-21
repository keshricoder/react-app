import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { PersistGate } from "redux-persist/integration/react"; 
import store from "./store"; 
import ContactPage from './pages/contacts';
import ChartsMapPage from './pages/charts-map';
import Chart from 'chart.js/auto';
import { CategoryScale, LinearScale, PointElement, LineController, LineElement,Title, Tooltip, Legend, } from 'chart.js';

const App = () => {

  Chart.register(CategoryScale, LinearScale, PointElement, LineController, LineElement, Title, Tooltip, Legend);
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <Router>
          <Routes>
            <Route path="/react-app" element={<ContactPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/charts" element={<ChartsMapPage />} />
          </Routes>
        </Router>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
