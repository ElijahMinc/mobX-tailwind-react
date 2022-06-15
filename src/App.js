
import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { observer } from "mobx-react-lite"
import { usersState } from '.';

const App = observer(() => {
  const [emailValue, setEmailValue] = useState('')
  const [passValue, setPassValue] = useState('')


  useEffect(() =>{
    usersState.getUsers()

  }, [])

  return (
    <div className={styles.parent}>
      <h1 className={styles.parent__title}>Hello TailWind</h1>
      <input className={styles.parent__input} placeholder='Email' value={emailValue} onChange={(e) => setEmailValue(e.target.value)}/>
      <input className={styles.parent__input} placeholder='Password' value={passValue} onChange={(e) => setPassValue(e.target.value)}/>
      <button className={styles.parent__btn} onClick={() => {

      }}>Login</button>
      {usersState.usersArray.map(user => (
          <div key={user.id}>

            <h2>{user.title}</h2>
            <input type="checkbox" checked={user.completed} value={user.completed} onChange={() => usersState.setCheckedUser(user)} />
          </div>
      ))}
      
    </div>
  );
})

export default App;
