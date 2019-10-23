import React from 'react';
import Container from './layout/Container';
import Header from './layout/Header';
import NewsList from './components/NewsList';
import './assets/style.css';

function App() {
  return (
    <Container>
      <Header />
      <NewsList />
    </Container>
  );
}

export default App;
