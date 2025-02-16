import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={"w-full bg-red-500 text-white flex items-center justify-start gap-5"}>
    <Link to={"/tvshows"}>Tv Shows</Link>
    <Link to={"/movies"}>Movies</Link>
  </header>
  )
}

export default Header