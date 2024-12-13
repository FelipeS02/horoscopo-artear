## Acerca de la resolucion

- Validacion con zod para datos
- Sistema de diseño basado en la metodologia BEM
- React + Typescript para la construccion de componentes modularizados y escalables
- Redux toolkit para el manejo de signos y status de la obtencion de los mismos
- Hooks personalizados (Ej useDebounce) para la optimizacion de componentes y obtencion de datos desde la store
- Vite + Million.JS para obtener un compilado mucho mas rapido durante el desarrollo
- React-scan implementado dentro del widget de Million.JS para depurar re-renderizados innecesario en los componentes
- Aprovechando el ecosistema Vite, testeo de funcionalidades y componentes con Vitest + react-testing-library
- Utilizacion de Lenis para optimizar la legibilidad de los elementos y ofrecer una experienciamas fluida para el usuario
- Creacion del diseño de la aplicacion en [Figma](https://www.figma.com/design/EgDrjJmk3m5rCJ2VMFTMjX/Untitled?node-id=0-1&t=M6xCBSqs1TDe1AKU-1) (basado en la prueba para moviles enviada inicialmente)

## Instalacion

### Instalar dependencias

``` bash
npm i
```

### Cargar variables de entorno

``` js
VITE_API_KEY=qazwsx
VITE_API_URL=http://localhost:3001
```

### Iniciar la aplicacion

``` bash
npm run dev
```

#### O testear componentes

``` bash
npm run test
```
