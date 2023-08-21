import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import styles from './Layout.module.css'

export default function Layout():JSX.Element {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  );
}
