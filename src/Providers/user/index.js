import { createContext, useState, useContext } from 'react'
import api from '../../services/api'

const UserContext = createContext()
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem('@user: token') || '',
  })
  const signIn = (userData) => {
    api
      .post('/sessions/', userData)
      .then((res) => {
        localStorage.setItem('@user: token', res.data.access)
        // localStorage.setItem('@user: userInfo', res.data.user)

        setUser({ ...user, token: res.data.access })
      })
      .catch((err) => console.log(err))
  }
  return <UserContext.Provider value={{user, signIn}}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
