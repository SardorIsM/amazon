import { useState } from 'react'
import { auth, provider } from '../../firebase/config';
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(err => console.log(err.message))
  }

  const loginWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(response => console.log(response))
      .catch(err => console.log(err.message))
  }

  return (
    <div>
      <Link to="/">HOME</Link>
      <form onSubmit={loginUser}>
        <input type="email" required onChange={e => {setEmail(e.target.value)}}/>
        <input type="password" required minLength={8} onChange={e => {setPassword(e.target.value)}}/>
        <button type='submit'>Login</button>
      </form>
      <button onClick={loginWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login