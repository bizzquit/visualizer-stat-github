import React from 'react';
import './App.css';
import Navbar from '../Navbar';
import UserCard from '../UserCard';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';

const user: boolean = true;

export default () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-around mt-3 mb-3 flex-lg-wrap">
        {user ? <UserCard /> : <h2>Начните поиск</h2>}
      </div>
    </>
  );
};
