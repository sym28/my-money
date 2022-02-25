// styles
import styles from './Home.module.css'

import { TransactionForm } from './TransactionForm'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import { TransactionList } from './TransactionList'

 const Home = () => {
   const {user} = useAuthContext()

   const {documents, error} = useCollection('transactions', user.uid)

  return (
  <div className={styles.container}>

    <div className={styles.content}>
      {error ? {error} : null}
      {documents ? <TransactionList transactions={documents} /> : null}
    </div>

    <div className={styles.sidebar}>
      <TransactionForm uid={user.uid}></TransactionForm>
    </div>

  </div>
  )
}

export default Home;
