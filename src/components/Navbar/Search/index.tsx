import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

type SearchProps = {
  onSubmit: (value: string) => void;
};

export default ({ onSubmit }: SearchProps) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <InputText
        type="search"
        className="p-ml-5"
        placeholder="введите логин..."
        aria-label="Search"
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button className="p-ml-2" label="Искать" onClick={() => onSubmit(value)} />
    </div>
  );
};
