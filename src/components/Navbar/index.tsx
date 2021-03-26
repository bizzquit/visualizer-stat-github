import React from 'react';
import Search from './Search';
import { Toolbar } from 'primereact/toolbar';

type NavbarProps = {
  onSubmit: (value: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onSubmit }) => {
  const leftContents = <Search onSubmit={onSubmit} />;

  return (
    <Toolbar
      left={leftContents}
      style={{
        backgroundColor: 'var(--bluegray-300)',
        borderBottom: '1px solid var(--bluegray-500)',
      }}
    />
  );
};

export default Navbar;
