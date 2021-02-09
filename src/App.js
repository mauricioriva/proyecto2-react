import { Component } from 'react'
import './App.css';
import Navigation from './components/Navigation';
import { todos } from './todos.json'
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state={
      title:'Clientes',
      clientes: [],
      todos
    }
  }

  getClientes(){
    axios.get("url") //URL para traer todos los clientes, siempre llamar despues de una modificacion
      .then(res => {
        const clientes = res.data;
        this.setState({ clientes });
      })
  }

  removeCliente(id){
    if(window.confirm('Are you sure you want to delete it?')){
      axios.delete(`url/${id}`) //URL para eliminar un cliente
        .then(res => {
          this.getClientes();
          console.log(res);
        })
    }
  }

  render(){
    this.getClientes();
    const todos = this.state.todos.map((todo,i) =>{
      return(
      <div className="col-md-4" key={i}>
        <div className="card mt-4">
          <div className="card-header">
            <h3 className="text-dark">{todo.title}</h3>
            <span className="text-danger badge badge-danger ml-2">
              {todo.priority}
            </span>
          </div>
          <div className="card-body">
            <p className="text-dark">{todo.description}</p>
            <p><mark>{todo.responsable}</mark></p>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={this.removeCliente.bind(this,i)}>Delete</button>
          </div>
        </div>
      </div>
    )
    });

    return (
      <div className="App">
        <header className="App-header">
          <Navigation title={this.state.title} ntareas={todos.length}/>

          <div className ="container">
  		      <div className = "row mt-4">
  			       {todos}
  		      </div>
  	      </div>

        </header>
      </div>

    );
  }
}

export default App;
