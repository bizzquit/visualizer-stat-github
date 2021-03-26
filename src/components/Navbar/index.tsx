import React from 'react';
import Search from './Search';
import { SearchCardProps } from '../../interfaces/types';

import './styles.css';

const Navbar: React.FC<SearchCardProps> = ({ onSubmit }) => {
  return (
    <div className="p-d-flex p-ai-center toolbar">
      <Search onSubmit={onSubmit} />
    </div>
  );
};

export default Navbar;
