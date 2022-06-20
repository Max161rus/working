import { Component } from 'react';

import SearchPanel from '../search-pannel/search-panel';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: "800", increase: true, rise: true, id: "1"}, 
                {name: "Alex M.", salary: "300", increase: true, rise: false, id: "2"}, 
                {name: "Carl W.", salary: "5000", increase: true, rise: false, id: "3"}
            ]
        }
        this.maxId = 4;
    }

   deleteItem = (id) => {
       this.setState(({data}) => {
        //    const index = data.findIndex(elem => elem.id === id)
           
        //    const before = data.slice(0, index);
        //    const after = data.slice(index + 1);

        //    const newArr = [...before, ...after];

        const newArr = data.filter(item => item.id !== id)

           return {
               data: newArr
           }
       })
   }

   addItem = (name, salary) => {
        const newItem = {
            name: name, 
            salary: salary, 
            increase: true, 
            id: this.maxId++
        }
        
        this.setState(({data}) => {
            const newArr = [...data, newItem]
           return {
            data: newArr
           }
        });
   }

   onToggleIncrease = (id) => {
        console.log(`Increase this ${id}`)
   }

   onToggleRise = (id) => {
        console.log(`Rise this ${id}`)
   }
    

render(){
    return(
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <Employeeslist 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>
            <EmployeesAddForm onAdd={this.addItem}/>
        </div>
    )
}
    
}

export default App;