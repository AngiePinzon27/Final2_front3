import React from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className='navbar'>

      <Link to="/"><h4>Home</h4></Link>
      <Link to="/contact"><h4>Contac</h4></Link>
      <Link to="/favs"><h4>Detail</h4></Link>
      <Link to="/favs"><h4>Favs</h4></Link>
    
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar