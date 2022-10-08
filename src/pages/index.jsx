import React from "react"
import Link from "next/link"
import UnComponente from "../components/UnComponente"

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/OtraPagina">Otra Pagina</Link>
      <UnComponente text={"Esto es un texto enviado mediante props"} />
    </>
  )
}

export default Home
