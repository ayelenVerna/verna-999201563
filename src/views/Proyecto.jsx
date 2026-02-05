import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import "../styles/views/Proyecto.css"

const Proyecto = () => {
  return (
    <>
      <Header />

      <main className="proyecto">
        <h1>Sobre el proyecto</h1>

        <section>
          <h2>Descripción general</h2>
          <p>
            Esta aplicación es una App de recetas desarrollada como Trabajo
            Práctico Final del curso de React dictado en la UTN. Permite a los
            usuarios registrarse, iniciar sesión y administrar recetas a través
            de un CRUD completo con persistencia de datos.
          </p>
        </section>

        <section>
          <h2>Tecnologías utilizadas</h2>
          <ul>
            <li>React + Vite (instalación de dependencias con <code>npm install</code>)</li>
            <li>React Router DOM para la navegación entre vistas</li>
            <li>Firebase Authentication para el registro e inicio de sesión</li>
            <li>Firestore Database para el almacenamiento de recetas</li>
            <li>CSS nativo para el diseño y estilado de la interfaz</li>
          </ul>
        </section>

        <section>
          <h2>Estructura del proyecto</h2>
          <p>
            El proyecto se encuentra organizado siguiendo una arquitectura
            modular, separando responsabilidades para mejorar la mantenibilidad
            y escalabilidad. Dentro de la carpeta <strong>src</strong> se
            encuentran:
          </p>

          <ul>
            <li>
              <strong>components:</strong> componentes reutilizables como Header,
              Footer, RecipeModal, ProtectedRoute y Popup
            </li>
            <li>
              <strong>views:</strong> vistas principales de la aplicación (Home,
              Login, Register, Proyecto y NotFound)
            </li>
            <li>
              <strong>context:</strong> AuthContext para el manejo global de la
              autenticación
            </li>
            <li>
              <strong>router:</strong> configuración de rutas con React Router
            </li>
            <li>
              <strong>services:</strong> lógica de conexión con Firebase
            </li>
            <li>
              <strong>config:</strong> configuración de credenciales de Firebase
            </li>
            <li>
              <strong>styles:</strong> archivos CSS organizados por vistas y
              componentes
            </li>
          </ul>
        </section>

        <section>
          <h2>AuthContext y manejo de sesión</h2>
          <p>
            Para el manejo de la autenticación se utilizó un AuthContext global conectado a Firebase. 
            Este contexto almacena el estado del usuario logueado y se utiliza junto con React Router 
            DOM para controlar el acceso a rutas privadas dentro de la aplicación.
          </p>
        </section>

        <section>
          <h2>Decisiones técnicas</h2>
          <ul>
            <li>Uso de Context API para evitar prop drilling</li>
            <li>Separación de lógica y presentación</li>
            <li>Implementación de componentes reutilizables</li>
            <li>Protección de rutas mediante React Router</li>
          </ul>
        </section>

        <section>
          <h2>Dificultades y soluciones</h2>
          <p>
            Una de las principales dificultades fue la configuración inicial de
            Firebase, ya que un error en las credenciales impedía el correcto
            funcionamiento de la aplicación. Este inconveniente se resolvió
            revisando la configuración y validando los datos proporcionados por
            Firebase.
          </p>
          <p>
            Otro desafío fue el manejo de la sesión al recargar la página, lo
            que provocaba la pérdida de acceso a rutas protegidas. Este problema
            se solucionó mediante la implementación del AuthContext, que
            mantiene el estado del usuario autenticado.
          </p>
          <p>
            Además, se detectaron inconvenientes relacionados con el ruteo de
            algunas vistas, los cuales fueron corregidos ajustando los paths
            correspondientes. El uso de la consola del navegador fue clave
            para identificar y resolver estos errores.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}

export { Proyecto }

