import React, { Component, Profiler } from 'react';
import { todos } from '../todos.json';
import profile from '../profile.jpg';


class Clientes extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state={
            showForm: false,
            todos
        }
    }

    removeTodo(index){
        console.log(index);
        if(window.confirm('Are you sure you want to delete it?')){
            this.setState({
                todos:this.state.todos.filter((todo,i)=> {
                    return i!==index
                })
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(document.getElementById("title").value);
        console.log(document.getElementById("apellidos").value);
        console.log(document.getElementById("region").value);
        console.log(document.getElementById("idcliente").value);
        console.log(document.getElementById("email").value);

        this.state.todos.push(
            {  
                "title": document.getElementById("title").value,
                "apellidos": document.getElementById("apellidos").value,

                "email": document.getElementById("email").value,
                "idcliente": document.getElementById("idcliente").value,
                "priority": document.getElementById("region").value
            }
        );
    
        this.setState({
            todos:this.state.todos
        })




    }


    showForm = () => {
        console.log("Nuevo Cliente");
        return (
            <div className="card" >
                    <div className="modal-content">
                        <div className="card-header bg-dark">

                            <h4 className="card-title bg-dark">Nuevo Cliente</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>

                                <label htmlFor="title" className="text-dark" ref={this.titulo}>Nombre del Cliente : </label>
                                <input  id="title" className="text-dark" type="text" name='nombre'/>

                                <label className="text-dark" >Apellidos del Cliente : </label>
                                <input  id="apellidos" className="text-dark" type="text" name='apellidos'/>

                                <label className="text-dark">  Región: </label>

                                <select id="region" className="text-dark" name="region">
                                    <option name="low">low</option>
                                    <option name="medium">medium</option>
                                    <option name="high">high</option>
                                </select>

                                <label  className="text-dark"> ID_Cliente (8digitos) : </label>
                                <input  id="idcliente" className="text-dark" type="text" name='idcliente'/>

                                <label  className="text-dark"> Email : </label>
                                <input  id="email" className="text-dark" type="text" name='email'/>
                                
                                &nbsp;&nbsp;&nbsp;
                                <button className = "btn btn-lg btn-success align-content-center" name="Submit" >Create</button>

                            </form>
                        </div>

                        <div className="card-footer">
                                <button className="btn btn-block btn-danger align-content-center" onClick={() => this.setState({showForm: false}) } >Close Panel</button>
                        </div>
                    </div>
                </div>
        );
    }


    render(){
        console.log(this.state.todos);

        const todos = this.state.todos.map((todo,i) => {
        return(
                <div>
                    <div className = "card">
                        <div className = "class-header">
                            <h3 className="text-light bg-dark" ><mark>{todo.idcliente}</mark> {todo.apellidos}</h3>
                            <span className="badge badge-pill badge-danger ml-1"> <p className="text-dark">Región:{todo.region} </p></span>
                        </div>
                        <div className= "card-body border">
                            <div className = "container">
                                <div className = "row">
                                    <div className = "col">
                                        <img src={profile} alt="profile Pic" width="150" height="200" />
                                    </div>
                                    <div className = "col">
                                        <p className="text-dark "><b>Nombre: </b>{todo.nombre}</p>

                                        <p className="text-dark"><b>Correo: </b>{todo.email}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={this.removeTodo.bind(this,i)}> Delete</button>
                        </div>
                        
                    </div>
                    &nbsp;&nbsp;
                </div>   






        )
        })
        return(
            <div className="container">
                <div className="row mt-4">
                    {todos}
                    <div className = "card mt-4 bg-dark ">
                        <button className="btn-group-lg btn-light btn-outline-primary" onClick={() => this.setState({showForm: true}) }> Nueva Tarea</button>
                        {this.state.showForm ? this.showForm() : null}
                    </div>

                </div>
            </div>
        )
        
    }
}
    
export default Clientes;