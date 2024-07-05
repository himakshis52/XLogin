import { useState } from "react";



const LoginApp = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault();

        if(username === 'user' && password === 'password'){
            setMessage('Welcome, user!')
        }else{
            setError('Invalid username or password')
        }
    }
    
    return(
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <h2>Login Page</h2>
            {message ? 
            (
                <div>{message}</div>
            )
            :

      (
      
      <form onSubmit={handleSubmit} style={{ width: '300px'}}>
      {error && <p>{error}</p>}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <label htmlFor="username" style={{ width: '100px' }}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <label htmlFor="password" style={{ width: '100px' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex' }}>
          <button type="submit">Submit</button>
        </div>
        
      </form>)
}
    </div>
    )
}


export default LoginApp;