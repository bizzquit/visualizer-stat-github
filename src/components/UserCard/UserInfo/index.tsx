import React from 'react';

interface IFieldUser<TValue> {
  [key: string]: TValue;
}

export default ({ user }: any) => {
  const fieldsUser: IFieldUser<string> = {
    bio: '',
    login: 'Ник: ',
    company: 'Компания: ',
    followers: 'Подписчики: ',
    following: 'Подписки: ',
    location: 'Нахождение: ',
    Email: 'email: ',
  };

  const fieldsArray: JSX.Element[] = [];
  console.log(user);
  const renderDiff = () => {
    for (const key in fieldsUser) {
      if (user[key]) {
        fieldsArray.push(
          <span key={key + user.id} className={`card-title d-block fw-bold`}>
            {fieldsUser[key]}
            <i className="fw-normal">{user[key]}</i>
          </span>
        );
      }
    }
    return fieldsArray.map((field) => field);
  };

  return (
    <div
      className="container d-flex flex-column"
      style={{
        width: '30%',
        borderRight: '1px solid rgba(108, 117, 125, 0.3)',
      }}
    >
      <div className="card-body">
        <h4 className="card-title text-center fw-bold">{user.name}</h4>
        <img
          src={user.avatar_url}
          className="card-img-top mt-3 m-auto align-content-sm-center"
          alt="avatar user"
          style={{
            borderRadius: '50%',
            border: '1px solid rgba(108, 117, 125, 0.3)',
          }}
        />
        <hr />
        {renderDiff()}
      </div>
    </div>
  );
};
