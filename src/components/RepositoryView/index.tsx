import React, { useEffect, useState } from 'react';
import { Repository } from '../../interfaces/api-types';
import Header from './Header';
import StarsAndContributors from './StarsAndContributors';
import Languages from './Languages';

import './styles.css';

import Api from '../../api';

const api = Api.getInstance();

export type RepositoryViewProps = {
  data: Repository;
};

const getFieldsRepo = (data: any, col: number = 5) => {
  const array: string[] = [];
  if (data) {
    for (let i = 0; i < data.length && i < col; i++) {
      array.push(data[i].avatar_url);
    }
  }
  return array;
};

const RepositoryView: React.FC<RepositoryViewProps> = ({ data }) => {
  const [contributors, setContributors] = useState<any>([]);
  const [stargazers, setStargazers] = useState<any>([]);

  const getInfo = () => {
    api.getRepoField(`${data.owner?.login}`, data.name, 'contributors').then((data) => {
      const array = getFieldsRepo(data);
      setContributors(array);
    });
    api.getRepoField(`${data.owner?.login}`, data.name, 'stargazers').then((data) => {
      const array = getFieldsRepo(data);
      setStargazers(array);
    });
  };

  useEffect(() => {
    getInfo();
  }, [data.name]);

  return (
    <section className="repo-info-container">
      <Header data={data} />
      <div>
        <StarsAndContributors data={data} starImg={stargazers} contribImg={contributors} />
        <Languages data={data} />
      </div>
    </section>
  );
};

export default RepositoryView;
