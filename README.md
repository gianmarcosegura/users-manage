# Buenos días

Os adjunto la prueba para la posición de desarrollador Front-End.

## Comandos:

- `npm run lint` -> Ejecuta ESLint con la configuración situada en el archivo .eslintrc extendiendo las reglas de airbnb
- `npm run lint:write` -> Ejecuta ESLint y corrige(dentro de sus posibilidades) la sintaxis.  
- `npm run prettier` -> Ejecuta Prettier con la configuración situada en .prettierrc, he incluido un archivo .prettier.md   donde explico con un ejemplo cada regla añadira al archivo de configuración de Prettier.
- `npm run prettier:write` -> Ejecuta Prettier y formatea el código acorde a la configuración aplicada en el archivo .prettier.md

### Listo algunas funcionalidades de la aplicación

- Adaptado a dispositivos móviles
- Control de LogIn y LogOut, si es usuario no dispone del token, no puede acceder a la aplicación.
- Cambio de Themes en la aplicación con unos botones en la parte superior.
- Notificaciones de acciones realizadas satisfactoriamente, por ejemplo: eliminar usuario, modificar usuario, logado correctamente o sesión cerrrada correctamente.
- Validadores de campos.
- Nota: Borres o modifiques un usuario, el back seguirá siendo el mismo (Así funciona https://reqres.in/api/). 
  La aplicación guardará todos los estados hasta que se actualize la página.

### Librerías utilizadas

He utilizado axios para realizar las peticiones HTTP

He añadido la librería Husky. Esta librería usa git hooks y en el hook "precommit" ejecuta tanto ESLint como Prettier y en caso de no superar las reglas de sintaxis de ESLint los archivos se quedan en el Staging Area. 

He utilizado styled-componentes, sass y tambíen he adaptado la aplicación a dispositivos móviles.
He añadido unos botones en la parte superior de la aplicación para poder cambiar los temas de la aplicación.

### Más Información

Añadido un markdown sobre prettier y las reglas que le he aplicado explicando que hace cada regla.
