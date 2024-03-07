# __LAB 5.1: Front__

## __Capítulo 2: Crear un proyecto para el front end.__

### 1. Configuración Inicial
Antes de comenzar, asegúrate de tener **Node.js** y **npm** instalados en tu máquina. Si aún no los tienes, descárgalos e instálalos desde [Node.js official website](https://nodejs.org/).

### 2. Creación del Proyecto React
1. **Genera un nuevo proyecto React**:
   - Abre la terminal y ejecuta el siguiente comando para crear un nuevo proyecto React usando **Create React App**:
     ```bash
     npx create-react-app react-hello-world
![SCRON 1](https://github.com/JuanDavidGarciaPulido/CVDS_LAB5.1-Front_2024-1/assets/90209924/04c1c01f-36fe-411f-8b14-e8fc06808b51)

     ```
   - Esto creará una carpeta llamada `react-hello-world` con la estructura básica de un proyecto React.

![SCRON 2](https://github.com/JuanDavidGarciaPulido/CVDS_LAB5.1-Front_2024-1/assets/90209924/89f236b6-3e91-4516-9acd-45d93df31ccf)


2. **Navega al directorio del proyecto**:
   ```bash
   cd react-hello-world
   ```

![SCRON 3](https://github.com/JuanDavidGarciaPulido/CVDS_LAB5.1-Front_2024-1/assets/90209924/c604dfd6-c7db-42e8-b057-c5c89c27d324)


### 3. Consumiendo el Servicio Spring Boot
1. **Crea un componente React**:
   - En la carpeta `src`, crea un nuevo archivo llamado `HelloWorld.js`.
   - Dentro de este archivo, crea un componente funcional que renderice un mensaje "Hello World".

2. **Realiza una solicitud HTTP al servicio Spring Boot**:
   - En el mismo archivo `HelloWorld.js`, utiliza la función `fetch` o una librería como **axios** para hacer una solicitud GET al servicio Spring Boot.
   - La URL de la solicitud debe ser la misma que definimos en nuestro controlador Spring Boot (por ejemplo, `http://localhost:8080/clients`).

![SCRON 4](https://github.com/JuanDavidGarciaPulido/CVDS_LAB5.1-Front_2024-1/assets/90209924/ccab230f-6b79-48f4-b36c-8d89ee7615ed)


3. **Renderiza la respuesta en tu componente**:
   - Cuando recibas la respuesta del servicio, muestra el mensaje "Hello World" en tu componente React.


### 4. Ejecución del Proyecto React
1. **Inicia el servidor de desarrollo**:
   - Ejecuta el siguiente comando en la terminal:
     ```bash
     npm start
     ```
   - Esto abrirá automáticamente tu aplicación React en el navegador en [http://localhost:3000](http://localhost:3000).

![SCRON 5](https://github.com/JuanDavidGarciaPulido/CVDS_LAB5.1-Front_2024-1/assets/90209924/652a409f-1ce4-4842-93bf-6b6eb7b29ca2)


2. **Verifica que el mensaje "Hello World" se muestre correctamente**:
   - Si todo funciona correctamente, deberías ver el mensaje "Hello World" en tu aplicación React.

![SCRON 6](https://github.com/JuanDavidGarciaPulido/CVDS_LAB5.1-Front_2024-1/assets/90209924/cf257b6c-9004-4f09-9947-0699e4e77663)


### 5. Empaquetado y Despliegue
1. **Empaqueta tu aplicación React**:
   - Cuando estés listo para desplegar tu aplicación, ejecuta:
     ```bash
     npm run build
     ```

![SCRON 7](https://github.com/JuanDavidGarciaPulido/CVDS_LAB5.1-Front_2024-1/assets/90209924/35f1b16c-1e18-456d-b1b3-7f74e80a86a5)


   - Esto creará una carpeta `build` con los archivos optimizados para producción.

  ![SCRON 8](https://github.com/JuanDavidGarciaPulido/CVDS_LAB5.1-Front_2024-1/assets/90209924/dce1fb72-2b79-4e74-aa2c-6f9871d39788)
 

2. **Integra tu aplicación React con Spring Boot**:
   - Copia los archivos de la carpeta `build` generada en el directorio de recursos de tu proyecto Spring Boot (por ejemplo, `src/main/resources/static`).
   - Ahora, cuando ejecutes tu aplicación Spring Boot, también servirá la aplicación React.

¡Listo! Ahora tienes un proyecto React que consume el servicio "Hello World" de Spring Boot.


