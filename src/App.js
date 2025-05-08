import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;