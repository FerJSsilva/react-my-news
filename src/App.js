import React from 'react';
import { Provider } from 'react-redux';
import Container from './components/layout/Container';
import Header from './components/layout/Header';
import NewsList from './components/NewsList';
import store from './redux/store';
import './assets/style.css';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <NewsList />
      </Container>
    </Provider>
  );
}

export default App;
