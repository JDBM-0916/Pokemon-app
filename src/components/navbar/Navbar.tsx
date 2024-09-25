'use client'
import Link from 'next/link';
import { MdCatchingPokemon, MdClose, MdMenu} from 'react-icons/md';
import './Navbar.css';
import { NavbariItem } from './NavbarItem';
import { useState } from 'react';

const Navbar = () => {

  const opcionesNav = [
    { route: '/pokemons', title: 'Pokemones' },
    { route: '/berries', title: 'Bayas' },
    { route: '/items', title: 'Objetos' },
    { route: '/contest', title: 'Concursos' },
    { route: '/encounters', title: 'Encuentros' },
    { route: '/games', title: 'Juegos' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <Link href="/">
        <div className="logo">
          <p>Pokemon App</p>
          <MdCatchingPokemon className="icono-logo" />
        </div>
      </Link>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <MdClose /> : <MdMenu />}
      </div>

      {/* Opciones de navegación */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        {opcionesNav.map((opcion) => (
          <li key={opcion.route}>
            <NavbariItem key={opcion.route} {...opcion} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
