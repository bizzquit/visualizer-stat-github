import React, { useState } from 'react';
import { RepositoryViewProps } from './RepositoryView';
import { PeopleIcon, StarIcon } from '@primer/octicons-react';
import { AvatarGroup } from 'primereact/avatargroup';
import { Avatar } from 'primereact/avatar';
import { useEffect } from 'react';
import api from '../../api';

const getFieldsRepo = (data: string | any[]): string[] => {
  const array: string[] = [];
  if (data) {
    for (let i = 0; i < data.length; i++) {
      array.push(data[i].avatar_url);
    }
  }
  return array;
};

const StarsAndContributorsAvatars: React.FC<RepositoryViewProps> = ({ data }) => {
  const [contributors, setContributors] = useState<string[]>([]);
  const [stargazers, setStargazers] = useState<string[]>([]);
  const perPage = 5;

  useEffect(() => {
    api.getRepoField(`${data.owner?.login}`, data.name, 'stargazers', perPage).then((data) => {
      const array = getFieldsRepo(data);
      setStargazers(array);
    });
    api.getRepoField(`${data.owner?.login}`, data.name, 'contributors', perPage).then((data) => {
      const array = getFieldsRepo(data);
      setContributors(array);
    });
  }, []);

  return (
    <section className="p-d-inline-flex">
      <div className="p-mr-5">
        <h4>
          <StarIcon size={24} className="p-mr-2" />
          {`Звёзды: ${data.stargazers_count}`}
        </h4>
        <AvatarGroup className="p-mb-3">
          {stargazers.map((img: string) => {
            return <Avatar key={img} image={img} size="large" shape="circle" />;
          })}
          {data.stargazers_count > stargazers.length && (
            <Avatar label="..." shape="circle" size="large" style={{ color: '#000' }} />
          )}
        </AvatarGroup>
      </div>
      <div>
        <h4>
          <PeopleIcon size={24} className="p-mr-2" />
          {`Авторы: ${data.contributors}`}
        </h4>
        <AvatarGroup className="p-mb-3">
          {contributors.map((img: string) => {
            return <Avatar key={img} image={img} size="large" shape="circle" />;
          })}
          {data.contributors > contributors.length && (
            <Avatar label="..." shape="circle" size="large" style={{ color: '#000' }} />
          )}
        </AvatarGroup>
      </div>
    </section>
  );
};

export default StarsAndContributorsAvatars;
