#Aplicación de Recetas:

A-Proyecto: El proyecto se trata de una App Web desarrollada en Rreact que permite a los usuarios registrarse, iniciar sesion y compartir recetas. Cada usuario registrado y logeado puede crear, modificar y eliminar recetas.

B-Instalación: 
1-Clonar el repositorio desde GitHub
2-Ejecutar npm install para instalar dependencias
3-Instalar i react-router-rom (ruteo), npm i firebase (backend)
4-Crear Archivo .env donde se incluiran las credenciales de firebase

C-Estructura:
dentro de SRC:
-components:piezas reutilizables
-config: credenciales firabase a completar en env.
-context: autenticacion, contexto global
-router: logica de path de cada pagina
-services: api
-styles: components , views
-views: vistas de las paginas
-main: punto de entrada de la app

Por fuera se creo archivo .env (credenciales firebase, que sera ignorado por git)

D-Manejo de Autenticación (AuthContext)
La App usa manejo global de autenticación. Gracias al uso de AuthContext se garantiza que solo los usurios registrados accedan al CRUD de recetas.
Este contexto centraliza:
-el estado del usuario
-la persistencia de la sesión
-las funciones de login y logout
-control de acceso a rutas y funcionalidades restringidas


