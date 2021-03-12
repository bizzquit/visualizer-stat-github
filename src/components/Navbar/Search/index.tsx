import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        value={value}
        placeholder="Search"
        aria-label="Search"
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Искать
      </button>
    </form>
  );
};
