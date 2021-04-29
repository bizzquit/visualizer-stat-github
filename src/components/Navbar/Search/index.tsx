import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { SearchCardProps } from '../../../interfaces/types';
import { Toast } from 'primereact/toast';

import './styles.css';

const Search: React.FC<SearchCardProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(true);
  const toast = useRef<Toast>(null);

  const errorInput = () => {
    toast.current?.show({
      severity: 'error',
      summary: 'Надо хоть что-то ввести.',
      detail: 'Минимум 1 символ',
      life: 3000,
    });
  };

  const onEnterKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    setError(true);

    if (!value) {
      return errorInput();
    }
    if (event.key === 'Enter') {
      onSubmit(value);
    }
  };

  const onHandlerClick = () => {
    setError(true);
    if (!value) {
      return errorInput();
    }
    onSubmit(value);
  };

  const onHandlerChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    error && setError(false);
    setValue(event.target.value.trim());
  };

  return (
    <>
      {error && <Toast ref={toast} position="top-left" className="p-mt-6 p-ml-3" />}
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
