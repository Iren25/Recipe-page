import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar():JSX.Element {
  return (
    <nav className={styles.container}>
        <NavLink to="meals-categories" className={styles.link}>Categories of meals</NavLink>
        <NavLink to="ingredient-search" className={styles.link}>Ingredient search</NavLink>
        <NavLink to="/" className={styles.link}>Home</NavLink>
    </nav>
  );
}
