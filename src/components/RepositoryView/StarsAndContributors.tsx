import React from 'react';
import { RepositoryViewProps } from './index';
import { PeopleIcon, StarIcon } from '@primer/styled-octicons';
import { AvatarGroup } from 'primereact/avatargroup';
import { Avatar } from 'primereact/avatar';

const StarsAndContributors: React.FC<RepositoryViewProps | any> = ({
  data,
  starImg,
  contribImg,
}) => {
  return (
    <>
      <div>
        <h4>
          <StarIcon size={24} className="p-mr-2" />
          {`Звёзды: ${data.stargazers_count}`}
        </h4>
        <AvatarGroup className="p-mb-3">
          {starImg.map((img: string) => {
            return <Avatar key={img} image={img} size="large" shape="circle" />;
          })}
          {data.stargazers_count > starImg.length && (
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
          {contribImg.map((img: string) => {
            return <Avatar key={img} image={img} size="large" shape="circle" />;
          })}
          {data.contributors > contribImg.length && (
            <Avatar label="..." shape="circle" size="large" style={{ color: '#000' }} />
          )}
        </AvatarGroup>
      </div>
    </>
  );
};

export default StarsAndContributors;
