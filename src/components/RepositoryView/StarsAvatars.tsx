import React, { useState } from 'react';
import { RepositoryViewProps } from './RepositoryView';
import { StarIcon } from '@primer/octicons-react';
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

const StarsAvatars: React.FC<RepositoryViewProps> = ({ data }) => {
  const [stargazers, setStargazers] = useState<string[]>([]);

  useEffect(() => {
    api.getRepoField(`${data.owner?.login}`, data.name, 'stargazers', perPage).then((data) => {
      const array = getFieldsRepo(data);
      setStargazers(array);
    });
  }, []);

  return (
    <div className="p-mr-5">
      <p className="title-stars">
        <StarIcon size={24} className="p-mr-2" />
        {`Звёзды: ${data.stargazers_count}`}
      </p>
      <AvatarGroup className="p-mb-3">
        {stargazers.map((img: string) => {
          return <Avatar key={img} image={img} size="large" shape="circle" />;
        })}
        {data.stargazers_count > stargazers.length && (
          <Avatar label="..." shape="circle" size="large" style={{ color: '#000' }} />
        )}
      </AvatarGroup>
    </div>
  );
};

export default StarsAvatars;
