import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Page from './components/page/Page';

/*const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);*/

class App extends Component {
  render() {
    const { store } = this.props;
    return (
        <Provider store={store}>
          <Page/>
        </Provider>
    )
  }  
}

export default App;
