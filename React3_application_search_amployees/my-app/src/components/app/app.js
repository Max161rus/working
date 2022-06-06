import SearchPanel from '../search-pannel/search-panel';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';


function App(){

    const data = [
        {name: "John C.", salary: "800", increase: true, id: "1"}, 
        {name: "Alex M.", salary: "300", increase: true, id: "2"}, 
        {name: "Carl W.", salary: "5000", increase: true, id: "3"}
    ];

    return(
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <Employeeslist data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;