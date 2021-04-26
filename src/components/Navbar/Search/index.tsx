import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { SearchCardProps } from '../../../interfaces/types';

import './styles.css';

const Search: React.FC<SearchCardProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onEnterKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      onSubmit(value);
    }
  };

  const onHandlerChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value.trim());
  };

  const onHandlerClick = () => {
    onSubmit(value);
  };

  return (
    <>
      <InputText
        type="search"
        className="p-ml-5 input-search"
        placeholder="введите логин..."
        aria-label="Search"
        onChange={onHandlerChange}
        onKeyPress={onEnterKeyDown}
      />
      <Button className="p-ml-2" label="Искать" onClick={onHandlerClick} />
    </>
  );
};

export default Search;
