import React from 'react';
import { Repository } from '../../interfaces/api-types';

import './styles.css';
import { GitForkIcon, PeopleIcon, StarIcon } from '@primer/octicons-react';

type RepositoryViewProps = {
  data: Repository
};

const RepositoryView: React.FC<RepositoryViewProps> = ({data}) => {
  return (
    <section className="repo-info-container">
      <header className="repo-header">
        { data.fork ? <GitForkIcon size={32} /> : null }
        { data.name }
      </header>
      <div className="owner-container">
        <img className="user-avatar" src={data.owner?.avatar_url} />
        { data.owner?.login }
      </div>
      <p>{ data.description }</p>
      <div>
        <div className="data-block">
          <StarIcon size={24} /><span className="icon-text">{ data.stargazers_count }</span>
        </div>
        <div className="data-block">
          <PeopleIcon size={24} /><span className="icon-text">{ data.contributors }</span>
        </div>
        <span className="lang-chips main-chips" title="Основной язык">{data.language}</span>
        { data.languages && data.languages.map((lang, index) => (
          <span key={index} className="lang-chips" title="Придаточный язык">{lang}</span>
        ))}
      </div>

    </section>
  );
};

export default RepositoryView;
