import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import "../styles/views/Register.css"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState(null)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      await login(formData.email, formData.password)
      navigate("/")
    } catch {
      setError("Error al loguear usuario. Puede que el Usuario ya exista o la Clave sea incorrecta")
    }
  }

  return (
    <>
      <Header />
      <main className="register">
        <section className="register-card">
          <h1>Ingresar</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              required
              value={formData.password}
              onChange={handleChange}
            />

            <button type="submit">Ingresar</button>
            {error && <p className="error">{error}</p>}
          </form>
        </section>
      </main>
    </>
  )
}

export { Login }

