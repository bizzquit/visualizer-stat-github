import React from 'react';

export default () => {
  return (
    <div
      className="container d-flex flex-column"
      style={{
        width: '30%',
        borderRight: '1px solid rgba(108, 117, 125, 0.3)',
      }}
    >
      <img
        src="https://avatars.githubusercontent.com/u/36944165?v=4"
        className="card-img-top mt-3 m-auto"
        alt="avatar user"
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          border: '1px solid rgba(108, 117, 125, 0.3)',
        }}
      />
      <div className="card-body">
        <h5 className="card-title name  fw-bold">{'Имя юзера'}</h5>
        <span className="card-title info-field d-block fst-italic">{'логин юзера'}</span>
        <span className="card-title info-field d-block fw-bold">
          Email:
          <i className="fw-normal container-fluid">{'111@loc.loc'}</i>
        </span>
        <span className="card-title info-field d-block fw-bold">
          Организация:
          <i className="fw-normal container-fluid">{'АО "ПФ "СКБ КОНТУР" '}</i>
        </span>
        <span className="card-title info-field d-block fw-bold">
          Локация: <i className="fw-normal container-fluid">{'Рашн федерэйшн'}</i>{' '}
        </span>
        <span className="card-title info-field d-block fw-bold">
          Сайт: <i className="fw-normal container-fluid">{'kontur.ru'}</i>{' '}
        </span>
        <a href="/" className="btn btn-primary">
          Пока просто оставил :)
        </a>
      </div>
    </div>
  );
};
