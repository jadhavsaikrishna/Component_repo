import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ComponentA from './components/ComponentA';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React App</h1>
        <ComponentA />
      </div>
    </Provider>
  );
};

export default App;
