# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Para esta entrega, lo que se realizó fue la integracion de la gran mayoría de los endpoints del backend al frontend. 

Se creó un mejor flujo a través de la página, con la nueva creación de un landing page, que dependiendo si el usuario este logueado muestra una descripción simple y la opcion de iniciar sesión, o una lista de las partidas que existen. Cualquier usuario es capaz de crear partidas, pero solo los administradores son capaces de partirlas anticipadamente. Tambien hay que tener en cuenta que mediante websockets la lista de partidas se irá actualizando automáticamente. 

Si el usuario decide ir a una partida, es llevado a la vista de espera de la partida, donde tendrá la opción de unirse a la partida o volver. Ejn caso de unirse, será llevado a la vista de juego, a la espera que se una más gente. Si un segundo usuario sigue los mismos pasos, podrá ver que ya hay un usuario conectado en la lista de espera, y al momento de unirse verá al otro jugador listo para jugar. 

Si se conectan 4 jugadores, o el administrador así lo decide, la partida comenzará, y podrán jugar a través del botón de tirar dados. Como se mencionó previamente, el orden de turnos es por orden de llegada. Aquí también se encuentra implementado websockets, por lo que cada movimiento que un jugador haga, el otro podrá verlo, y no solo los movimientos, sino que también si esta compra una investigación. La partida puede jugarse hasta que solo uno quede en pie, pero si se quiere acelerar el proceso, a traves de los endpoints se puede disminuir la cantidad de creditaje, y esperar a que tenga que pagar cuando no tiene plata. 

Como se comentó en la documentación, hay features que por tiempo no pudieron ser implementadas, como cambiar creditaje en el front end por admin o mejorar investigación. También tener en cuenta que el manejo de sesion este todo trabajado con JWtoken, tanto los usuarios como los admin. Las contraseñas se encuentran hasheadas, etc. Hay una diferencia de usuarios con el admin, el admin tiene acceso a más botones como iniciar partida. 

Tanto en el back como en el front se encuentran una serie de validaciones de distinto tipo de acuerdo sea el caso, por ejemplo, que la contraseña debe tener ciertos caracteres, o verificar que el jugador que tiró el dado lo hizo en su turno. Todo este tipo de excepciones son manejadas a través de alertas. 

Finalmente, por tiempo no se pudo hacer el deploy a netfly y render, pero con la estructura actual si se permite tener varias partidas al mismo tiempo. 

Una consideracion a tener es que al recargar la pagina, los websockets dejan de funcionar, asi que porfavor NO RECARGAR LA PAGINA 

Mencionar tambien que los comentarios que parezcan de chatgpt probalbemente lo son, ya que fue utilizado en gran medida por la sintaxis y para adaptar codigo de un componente a otro. Y luego copiabamos y pegabamos este mismo codigo para volver a escribirlo, por lo que puede que hayan quedado comentarios sin su aporte signfiicativo
 

Y una contraseña que sirve para los usuarios es: Ex@mple1! 

 

 