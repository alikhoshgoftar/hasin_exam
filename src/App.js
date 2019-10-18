import React from "react";
import { Provider } from 'react-redux'
import store from './redux/store'
import Routing from './config/Routing'
import "./styles/Base.css"

export default function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}