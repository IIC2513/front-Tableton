# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Para esta entrega, lo que se realizo fue el desarrollo del frontend mediante el uso de React modular, y la integración de este con el backend.  

Se realizó tanto una página de Index, donde se muestran elementos como el tablero, la lista de espera (no funcional todavía) y un botón que permite ir a la vista para iniciar sesión.  

En la vista de iniciar sesión da la opcion de tanto iniciar sesión como registrarse. Ambas son 100% funcionales y están conectadas al backed. Para el manejo de sesión, se hizo uso del jsonwebtoken como se indicaba en las capsulas del curso, y toda la lógica de usuarios, jugadores, etc, estam vinculadas al uso del token en el LocalStorage. El token era pasado de front a back a través de Headers, y en el back se recuperaba la información necesaria a partir de este, principalmente el id de usuario. A partir del usuarioId, podíamos acceder a sus jugadores, estados, etc. También cabe mencionar que se hizo uso del hasheo de contraseñas con bcrypt como se hizo en las capsulas. 

Una vez iniciada la sesión, se devuelve al index, pero se aprovechó el uso de componentes y su opción de utilizarlos para ver que mostrar. Si el usuario se encuentra autenticado (iniciado sesión) se verifica a través del token y se le muestran unos botones diferentes, mostrando la opción de unirse a la partida y cerrar sesión. 

Si el usuario aprieta la opción de unirse a partida (y la partida existe: detallado en el endpoint de crear partida), será redireccionado a /partida, donde nuevamente se muestra el tablero, pero se pueden ver la posición de los jugadores en el juego a través de fichas en las casillas. En este, se da la opción de tirar dado o comprar investigación de acuerdo sea el caso. También cuenta con un botón para refrescar la vista de la posición de los jugadores, ya que como no se cuenta con webSockets, si un jugador juega, los cambios se producen en la base de datos, pero no hay nada que gatille la actualización del componente en el otro jugador. Con todo lo antes mencionado, se cumple con los endpoints de sesión y de juego integrados. Mencionar que esta vista no fue desarrollada en mayor manera por temas de tiempo. 

Finalmente, en el documento del Frontend, en la carpeta entregables/entrega3, se entrega la documentación con el detalle sobre como ejecutar el proyecto y testearlo, y también los mockups actualizados, que en verdad son los mismos, solo que no pudimos implementarlos al 100% por temas de tiempo 