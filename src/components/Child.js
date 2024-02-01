import React, { useState } from 'react'

const Child = ({isLoggedIn, setIsLoggedIn}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    function handleLogin(e){
        e.preventDefault();
        if(username && password){
            setIsLoggedIn(true)
        }
    }
  return (
    <div>
        {
            isLoggedIn ? <p>You are logged in!</p> :
            <form onSubmit={handleLogin}>
        Username:<input type='text' name='username' 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}/>
        Password:<input type='password' name='password' 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}/>
        <button>Login</button>
      </form>
        }
      

    </div>
  )
}

export default Child
