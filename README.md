# Aplicación de Recetas

a-Descripción del proyecto
Este proyecto consiste en una aplicación web desarrollada en React que permite a los usuarios registrarse, iniciar sesión y compartir recetas. Cada usuario autenticado puede crear, editar y eliminar recetas, las cuales se almacenan en una base de datos en la nube.
La aplicación implementa un CRUD completo y utiliza autenticación para restringir el acceso a las funcionalidades principales.

b-Tecnologías utilizadas
React
Vite
JavaScript (ES6+)
Firebase (Authentication y Firestore)
React Router DOM
CSS

c-Instalación y ejecución en entorno local:

1-Clonar el repositorio desde GitHub.
2-Ingresar a la carpeta del proyecto.
3-Ejecutar el comando npm install para instalar las dependencias. npm run install
4-Instalar las dependencias adicionales utilizadas en el proyecto: react-router-dom y firebase.
5-Crear un archivo .env en la raíz del proyecto e incluir las credenciales propias de Firebase.
6-Ejecutar la aplicación en modo desarrollo con el comando npm run dev.
ej: La aplicación estará disponible en http://localhost:5173
.

d-Estructura del proyecto
Dentro de la carpeta src el proyecto se organiza de la siguiente manera:
components: contiene los componentes reutilizables de la aplicación.
config: contiene la configuración y credenciales de Firebase, obtenidas desde variables de entorno.
context: contiene el contexto global de autenticación AuthContext.
router: contiene la lógica de ruteo y la definición de paths de cada vista.
services: contiene las funciones de conexión y comunicación con Firebase.
styles: contiene los archivos CSS organizados por componentes y vistas.
views: contiene las vistas principales de la aplicación.
main.jsx: es el punto de entrada de la aplicación.

Fuera de la carpeta src se creó el archivo .env, el cual contiene las credenciales de Firebase y se encuentra ignorado por Git.

f-Manejo de autenticación
La aplicación utiliza un manejo global de autenticación mediante AuthContext. Gracias a este contexto se garantiza que solo los usuarios registrados y autenticados puedan acceder al CRUD de recetas.
El AuthContext centraliza el estado del usuario autenticado, la persistencia de la sesión, las funciones de registro, login y logout, y el control de acceso a rutas y funcionalidades restringidas.

Proyecto desarrollado como Trabajo Práctico Final del curso de React – UTN

