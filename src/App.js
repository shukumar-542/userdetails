import { useEffect, useState } from 'react';
import './App.css';
import User from './Components/User/User';
import data from './data/data.json'

function App() {
  // console.log(data);
  const [users, setUser] = useState([]);
  useEffect(()=>{
    setUser(data) 
  },[]);
const [cart, setCart] = useState([])
  const handleAddFriend = (user) =>{
    const newUesr = [...cart, user];
    setCart(newUesr)
  }
  const total = cart.reduce((total, user)=>total+user.salary,0)

  return (
    <div className="App">
      <header >
      <h1>Total User : {users.length}</h1>
      <h1>Total Add : {cart.length}</h1>
      <h1>Total salary :{total}</h1>
       
         {
           users.map(user => <User user={user} handleAddFriend ={handleAddFriend}></User>)
         }
      
      </header>
    </div>
  );
}

export default App;
