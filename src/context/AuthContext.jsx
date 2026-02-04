import { createContext, useContext, useEffect, useState } from "react"
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth"
import { auth } from "../config/firebase"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const register = async (email, password) => {
    await setPersistence(auth, browserSessionPersistence)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = async (email, password) => {
    await setPersistence(auth, browserSessionPersistence)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => signOut(auth)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
export { AuthProvider }
