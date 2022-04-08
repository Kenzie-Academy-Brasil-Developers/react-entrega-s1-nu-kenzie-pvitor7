import './App.css';
import { useState } from 'react';
import Form from './components/Form'
import List from './components/List'
import NuKenzie from './img/NuKenzie.svg'

function App() {

  const [listTransactions, setTransactions] = useState([]);

  function deleteCard(id) {
  
    console.log(listTransactions)
    console.log(id)
    // const newList = listTransactions.splice(id, 1,'')
    const newList = listTransactions.filter((element) => element.id != id)
    console.log(newList);
    setTransactions([...newList]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={NuKenzie} />
        <button className="inicio">Inicio</button>
      </header>

      <div className="App-content">
        <Form currentList={listTransactions} newSet={setTransactions} />
        <List lista={listTransactions} deleteCard={deleteCard} />
      </div>
    </div>
  );
}

export default App;