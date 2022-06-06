
import { Component } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world!</h2>
}


class Field extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const holder = "Enter here"
    const styledField = {
      width: "300px"
  }
    return <input 
            placeholder={holder} 
            type="text" 
            style={styledField}/>
    }
  
}

function Btn(){
  const text = "Log in";
  const logged = false;
  
  return <button>{logged ? "Enter" : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header};
export default App;
