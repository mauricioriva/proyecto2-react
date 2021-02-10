import { Component } from 'react'
import './App.css';
import Navigation from './components/Navigation';
import Clientes from './components/Clientes';
import { todos } from './todos.json';


class App extends Component {
  constructor(){
    super();
    this.state={
      title : 'Lista de  Clientes',
      nclientes : 10,
      todos
    }
  }

  




  render(){

    return (
    <div className="App">
      <header className="App-header">
        <Navigation title={this.state.title} nclientes={todos.length}/>
        
        

        <Clientes/>
      
        <div className="card-footer">
          <p>
            Facultad de Ciencias.
          </p>
      
        </div>

      </header>
    </div>
    
  );

  }
  
}

export default App;