import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useSignout } from '../hooks/useSignout'


export default function Navbar() {

    const {user} = useAuthContext()
    const {logout, error, isPending} = useSignout()


  return (
      <nav className={styles.navbar}>
          <ul>
              <li className={styles.title}><Link to='/'>myMoney</Link></li>

              {user && <p>Welcome {user.displayName}</p>}

              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup'>Signup</Link></li>
              <li>
                  <button className='btn' onClick={logout}>Logout</button>
              </li>
          </ul>
      </nav>
  )
}


