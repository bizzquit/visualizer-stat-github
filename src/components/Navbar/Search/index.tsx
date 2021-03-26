import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

type SearchProps = {
  onSubmit: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onEnterKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      onSubmit(value);
    }
  };

  const onHandlerChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const onHandlerClick = () => {
    onSubmit(value);
  };
  return (
    <div>
      <InputText
        type="search"
        className="p-ml-5"
        placeholder="введите логин..."
        aria-label="Search"
        onChange={onHandlerChange}
        onKeyPress={onEnterKeyDown}
      />
      <Button className="p-ml-2" label="Искать" onClick={onHandlerClick} />
    </div>
  );
};

export default Search;
