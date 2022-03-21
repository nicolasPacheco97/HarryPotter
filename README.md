# HarryPotter

Las instrucciones para levantar el proyecto y correr pruebas unitarias.

1.- Clonar el repositorio con git clone.
2.- Dirigirse a la carpeta de harry_potter_app
3.- Correr la instarucción npm install, para bajar las paqueterías necesarias.
4.- En caso de no tener el intalado json-server, npm install -g json-server
5.- npx json-server --watch data/db.json --port 8000 para correr el back end (de forma local abrirá un puerto en localhost:8000 para que se hagan las peticiones).
6.- npm start para iniciar la aplicación en react.


• ¿Qué es lo que más te gustó de tu desarrollo?
En escencia, este desarrollo es similar a lo que día con día desarrollo laborando. La maquetación y el entendimiento de los requerimientos es parte fundamental para un desarrollador FrontEnd así como buscar los métodos eficaces para la comunicación con las APIS. A mi criterio, fue un reto bastante bueno que me demostró que aún llevando tiempo en el negocio es importante entender bien los reuqerimientos para evitar el retrabajo, el maquetar algo desde el principio genera satisfacción cuando este concluye.

• Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?
Definitivamente poder mejorar la experiencia del usuario, un loader para la petición de los servicios, una pantalla de error en caso de que los servicios fallaran, o bien agregar validaciones al formulario para tener un feedback al instante. Incluyo, también, el poder agregar más campos al mismo formulario para que la respuesta en pantalla pudiera ser distinta.
Otro punto que me parece destacable es el tema de los test. Queda de tarea personal poder realizarlos.

• Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste.
Algo que para mi fue nuevo es el hecho de poder entender la funcionalidad del json-server, tenía conocimiento que un simulador de backend, pero básicamente tuve que entender bien esta librería para poder utilizarla en el proyecto. Si bien las peticiones al final son tema de FrontEnd, el saber qué y cómo será la respuesta del mismo significó un buen reto para mi. Además se tuvo que investigar cómo era posible desplegar el servicio para que lo pudiera consumir la aplicación ya en la nube.
