# NextJs & ReactJS

## Instalación y comandos iniciales

Después de clonar el proyecto con `git clone <enlace>` hay que instalar las dependencias con el comando:

```bash
npm install
```

Y luego correr el proyecto en nuestro entorno de desarrollo local:

```bash
npm run dev
```

El proyecto se abrirá en localhost en el puerto 3000 `http://localhost:3000/`

## Instrucciones básicas de React y Next

La configuración es sencilla, para crear una pagina nueva solo debemos hacer un archivo con el nombre de la pagina nueva en la carpeta `src/pages`

Para navegar entre las paginas vamos a usar el componente `Link` que nos provee **Next** funciona de form parecida al componente `Link` que nos provee `react-router`

```jsx
import React from "react"
// Se importa aqui
import Link from "next/link"
import UnComponente from "../components/UnComponente"

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      // Aqui
      <Link href="/OtraPagina">Otra Pagina</Link>
      <UnComponente text={"Esto es un texto enviado mediante props"} />
    </>
  )
}

export default Home
```
