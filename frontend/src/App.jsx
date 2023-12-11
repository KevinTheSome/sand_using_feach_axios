import { useState,useEffect } from 'react'
import axios from 'axios';

function App() {
  const [data , setData] = useState([]);
  const [loginData , setLoginData] = useState([]);
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    try {
      fetch("http://localhost/sand_using_feach/backend/")
    .then(response => response.json())
    .then(data => setData(data))
    setIsLoading(false);
    } catch (error) {
      console.error(error)
    }
  },[])
  
  function Login() {
    
    try {
    axios.post("http://localhost/sand_using_feach/backend/login.php",{
      password : password , username: username
    })
    .then(response => response)
    .then(data => setLoginData(data["data"]))
    } catch (error) {
      console.error(error)
    }

    setUsername("");
    setPassword("");
  }

  return (
    <>
    {isLoading ? <h1>Loading...</h1> :
      <div>
        <h1>{data.h1}</h1>
        <div className="log_in_shit">
          <input type="text" placeholder='username' value={username} onChange={(e) =>{setUsername(e.target.value)}}/>
          <input type="password" placeholder='password' value={password} onChange={(e) =>{setPassword(e.target.value)}}/>
          <br />
          <button onClick={Login}>Log In</button>
        </div>
        <h2>{loginData.msg}</h2>
      </div>
    }
    </>
  )
}

export default App
