import React, { useState } from 'react';
import { RepositoryViewProps } from './RepositoryView';
import { PeopleIcon } from '@primer/octicons-react';
import { AvatarGroup } from 'primereact/avatargroup';
import { Avatar } from 'primereact/avatar';
import { useEffect } from 'react';
import api from '../../api';

const perPage = 5;
const getFieldsRepo = (data: string | any[]): string[] => {
  const array: string[] = [];
  if (data) {
    for (let i = 0; i < data.length; i++) {
      array.push(data[i].avatar_url);
    }
  }
  return array;
};

const ContributorsAvatars: React.FC<RepositoryViewProps> = ({ data }) => {
  const [contributors, setContributors] = useState<string[]>([]);

  useEffect(() => {
    api.getRepoField(`${data.owner?.login}`, data.name, 'contributors', perPage).then((data) => {
      const array = getFieldsRepo(data);
      setContributors(array);
    });
  }, []);

  return (
    <div>
      <p className="title-contributors">
        <PeopleIcon size={24} className="p-mr-2" />
        {`Авторы: ${data.contributors}`}
      </p>
      <AvatarGroup className="p-mb-3">
        {contributors.map((img: string) => {
          return <Avatar key={img} image={img} size="large" shape="circle" />;
        })}
        {data.contributors > contributors.length && (
          <Avatar label="..." shape="circle" size="large" style={{ color: '#000' }} />
        )}
      </AvatarGroup>
    </div>
  );
};

export default ContributorsAvatars;
