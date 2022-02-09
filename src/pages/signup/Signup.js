import { useState } from 'react';

// styles
import styles from './Signup.module.css'
import {useSignup} from '../../hooks/useSignup'


const Signup = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {error, isPending, signup} = useSignup()
  

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
    
  }

  return (
      <form onSubmit={handleSubmit} className={styles['signup-form']}>

        <label>
          <span>Display Name:</span>
          <input 
            type="text"
            value={displayName}
            onChange={(e) => {setDisplayName(e.target.value)}}
          />
        </label>

        <label>
          <span>Email:</span>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Password:</span>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {!isPending && <button className='btn'>Submit</button>}
        {isPending && <button className='btn' disabled>loading</button>}
        {error && <p>{error}</p>}
      </form>
  )
};

export default Signup;
