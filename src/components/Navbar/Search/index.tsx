import React, { useState } from 'react';
import { Button } from 'primereact/button';

type SearchProps = {
  onSubmit: (value: string) => void;
};

export default ({onSubmit}: SearchProps) => {
  const [value, setValue] = useState('');

  return (
    <div className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        value={value}
        placeholder="Логин"
        aria-label="Search"
        onChange={(event) => setValue(event.target.value)}
      />
      <Button label="Искать" onClick={() => onSubmit(value)} />
    </div>
  );
};
