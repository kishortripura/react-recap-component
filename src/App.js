import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const friends =[{name:'Kishor Tripura', age:'22Years Old'}, {name:'Andrew Tripura', age:'22Years Old'}, {name:'Surrendra Tripura', age:'22Years Old'}]

// const mens=['Subroto Tripura', 'Vincent Tripura', 'Angbadhu Tripura']

function App() {
 
  const [users, setUsers] = useState([])
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setUsers(data))
  }, [])

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      {users.map(user => <Recap name={user.name}></Recap>)}

      <Recap name={'Kishor Tripura'} age='22Years Old'></Recap>
      <Recap name={'Andrew Bodola Tripura'} age='22Yeras Old'></Recap>
      <Recap name={'Surrendra Tripura'} age='22Yeras Old'></Recap>
      
      
      {/* <Recap name={mens[0]}></Recap>
      <Recap name={mens[1]}></Recap>
      <Recap name={mens[2]}></Recap> */}

      <div>
     { friends.map(friendClub => <div name={friendClub.name}></div>)}
      </div>
    </div>
  );
}
const recaptStyle = {
      backgroundColor: 'skyblue',
      border: '5px solid black',
      borderRedius: '10px',
      margin: '10px',
      padding: '30px'
}
const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
  border: '5px solid black',
  borderRedius: '10px',
  margin: '5px',
  padding: '5px'
}

function Recap(props) {
  const [count, setCount] = useState(0);
  const downloadcv = () => setCount(count + 1);
    return(
        <div style={recaptStyle}>
          <h1>Hello World!</h1>
          <h4>Welcome to my World!</h4>
          <h3>{props.name}</h3>
          <h4>{props.age || ('20 Years Old')}</h4>
          <button style ={buttonStyle} onClick={downloadcv}>Download CV</button> <button style ={buttonStyle}> : {count}</button>
        </div>
    );
}

export default App;
