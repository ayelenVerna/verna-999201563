import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import "../styles/views/Register.css"
import { useAuth } from "../context/AuthContext"
import { Popup } from "../components/Popup"

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState(null)
  const [popupMessage, setPopupMessage] = useState("") 

  const { register } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      await register(formData.email, formData.password)

      setPopupMessage("Usuario creado con éxito")

      setTimeout(() => {
        navigate("/") 
      }, 3000) 

    } catch {
      setError(
        "Error al crear usuario. Puede que el usuario ya exista o la contraseña no sea válida."
      )
    }
  }

  return (
    <>
      <Header />
      <main className="register">
        <section className="register-card">
          <h1>Crear cuenta</h1>

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

            <button type="submit">Registrarse</button>
            {error && <p className="error">{error}</p>}
          </form>
        </section>
      </main>

      {/* Pop-up */}
      <Popup message={popupMessage} onClose={() => setPopupMessage("")} />
    </>
  )
}

export { Register }

