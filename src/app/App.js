import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from "./store";
import EditableTable from "./Pages/Products";

function App() {
  return (
    <Provider store={store}>
      <EditableTable />
    </Provider>
  );
}

export default App;
