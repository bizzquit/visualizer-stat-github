import React from 'react';
import logo from '../../img/404-img.png';
import './styles.css';

const Error404: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="code-error">404</h1>
        <div className="p-mr-3 block__text-error">
          <h4>Пользователь не найден....</h4>
          <p> уточни логин для поиска</p>
        </div>
      </div>
      <img src={logo} alt="Logo" className="image-404 p-mt-6" />
    </>
  );
};

export default Error404;
