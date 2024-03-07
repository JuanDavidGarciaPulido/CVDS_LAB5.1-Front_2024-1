# __LAB 5.1: Front__

## Capítulo 2: Crear un proyecto para el front end.

### 1. Configuración Inicial
Antes de comenzar, asegúrate de tener **Node.js** y **npm** instalados en tu máquina. Si aún no los tienes, descárgalos e instálalos desde [Node.js official website](https://nodejs.org/).

### 2. Creación del Proyecto React
1. **Genera un nuevo proyecto React**:
   - Abre la terminal y ejecuta el siguiente comando para crear un nuevo proyecto React usando **Create React App**:
     ```bash
     npx create-react-app react-hello-world
     ```
   - Esto creará una carpeta llamada `react-hello-world` con la estructura básica de un proyecto React.

2. **Navega al directorio del proyecto**:
   ```bash
   cd react-hello-world
   ```

### 3. Consumiendo el Servicio Spring Boot
1. **Crea un componente React**:
   - En la carpeta `src`, crea un nuevo archivo llamado `HelloWorld.js`.
   - Dentro de este archivo, crea un componente funcional que renderice un mensaje "Hello World".

2. **Realiza una solicitud HTTP al servicio Spring Boot**:
   - En el mismo archivo `HelloWorld.js`, utiliza la función `fetch` o una librería como **axios** para hacer una solicitud GET al servicio Spring Boot.
   - La URL de la solicitud debe ser la misma que definimos en nuestro controlador Spring Boot (por ejemplo, `http://localhost:8080/clients`).

3. **Renderiza la respuesta en tu componente**:
   - Cuando recibas la respuesta del servicio, muestra el mensaje "Hello World" en tu componente React.

### 4. Ejecución del Proyecto React
1. **Inicia el servidor de desarrollo**:
   - Ejecuta el siguiente comando en la terminal:
     ```bash
     npm start
     ```
   - Esto abrirá automáticamente tu aplicación React en el navegador en [http://localhost:3000](http://localhost:3000).

2. **Verifica que el mensaje "Hello World" se muestre correctamente**:
   - Si todo funciona correctamente, deberías ver el mensaje "Hello World" en tu aplicación React.

### 5. Empaquetado y Despliegue
1. **Empaqueta tu aplicación React**:
   - Cuando estés listo para desplegar tu aplicación, ejecuta:
     ```bash
     npm run build
     ```
   - Esto creará una carpeta `build` con los archivos optimizados para producción.

2. **Integra tu aplicación React con Spring Boot**:
   - Copia los archivos de la carpeta `build` generada en el directorio de recursos de tu proyecto Spring Boot (por ejemplo, `src/main/resources/static`).
   - Ahora, cuando ejecutes tu aplicación Spring Boot, también servirá la aplicación React.

¡Listo! Ahora tienes un proyecto React que consume el servicio "Hello World" de Spring Boot.
