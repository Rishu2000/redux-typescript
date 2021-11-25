import React from 'react';
import './App.css';
import AddArticle from './components/AddArticle';

const App: React.FC = () => {
  return (
    <main className="App">
      <h1>My Articles</h1>
      <AddArticle/>
    </main>
  )
}

export default App;
