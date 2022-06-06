
import './App.css';

function WhoAmi ({name, surname, link}) {
 
  return(
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}



function App() {
  return (
    <div className="App">
        <WhoAmi name={() => {return "John"}} surname="Smith"  link="facebook.com"/>
        <WhoAmi name={() => {return "Alex"}} surname="Shepard"  link="vk.com"/>
        
    </div>
  );
}

export default App;
