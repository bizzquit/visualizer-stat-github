import React from 'react';

const repos = [
  {
    id: 342808038,
    name: 'react-ts',
    html_url: 'https://github.com/bizzquit/react-ts',
    stargazers_count: 150, //stars
    forks_count: 12, //forks
    language: 'JavaScript', // https://api.github.com/repos/bizzquit/{name}/languages
    contributors_url: 'https://api.github.com/repos/bizzquit/react-ts/contributors',
    created_at: '2021-02-27T08:32:10Z',
    updated_at: '2021-03-10T11:05:12Z',
    pushed_at: '2021-03-10T11:05:09Z',
  },
  {
    id: 342808039,
    name: 'react-ts',
    html_url: 'https://github.com/bizzquit/react-ts',
    stargazers_count: 150, //stars
    forks_count: 12, //forks
    language: 'JavaScript', // https://api.github.com/repos/bizzquit/{name}/languages
    contributors_url: 'https://api.github.com/repos/bizzquit/react-ts/contributors',
    created_at: '2021-02-27T08:32:10Z',
    updated_at: '2021-03-10T11:05:12Z',
    pushed_at: '2021-03-10T11:05:09Z',
  },
  {
    id: 342808040,
    name: 'react-ts',
    html_url: 'https://github.com/bizzquit/react-ts',
    stargazers_count: 150, //stars
    forks_count: 12, //forks
    language: 'JavaScript', // https://api.github.com/repos/bizzquit/{name}/languages
    contributors_url: 'https://api.github.com/repos/bizzquit/react-ts/contributors',
    created_at: '2021-02-27T08:32:10Z',
    updated_at: '2021-03-10T11:05:12Z',
    pushed_at: '2021-03-10T11:05:09Z',
  },
];

export default () => {
  return (
    <div className="container p-d-flex p-flex-column" style={{ minWidth: '70%' }}>
      <h2 className="p-m-0 p-text-center">Список репозиториев</h2>
      {repos.map((repo) => (
        <div className="" key={repo.id} style={{ backgroundColor: 'rgba(201, 205, 208, 0.5)' }}>
          <div className="" style={{ backgroundColor: '#c9cdd0' }}>
            <a href="">
              <h5 className="">{repo.name}</h5>
            </a>
            <span className="card-text info-field d-block fw-bold">
              stars:
              <i className="fw-normal container-fluid">{repo.stargazers_count}</i>
            </span>
            <span className="card-text info-field d-block fw-bold">
              forks:
              <i className="fw-normal container-fluid">{repo.forks_count}</i>
            </span>
            <span className="fw-bold">
              обновлено: <i className="fw-normal">{repo.updated_at}</i>
            </span>
          </div>
          <div className="card-body">
            <span className="card-text info-field d-block fw-bold">
              languages:
              <i className="fw-normal container-fluid">{repo.language}</i>
            </span>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <a href="/" className="btn btn-success m-1">
              clone repo
            </a>
            <a href="/" className="btn btn-primary m-1">
              view repo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
