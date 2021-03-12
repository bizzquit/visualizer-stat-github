import React, { useState } from 'react';
import Search from './Search';

type NavbarProps = {
  onSubmit: (value: string) => void,
}

export default ({ onSubmit }: NavbarProps) => {
  return (
    <nav className="navbar navbar-light bg-secondary">
      <div className="container">
        <Search onSubmit={onSubmit}/>
      </div>
    </nav>
  );
};
