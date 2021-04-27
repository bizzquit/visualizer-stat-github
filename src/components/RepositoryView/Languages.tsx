import React, { useEffect, useState } from 'react';
import { RepositoryViewProps } from './RepositoryView';
import api from '../../api';
import { Tag } from 'primereact/tag';

const viewLanguages = (langArr: { [x: string]: string }, field: string) => {
  return langArr ? langArr[field] : 0;
};

const Languages: React.FC<RepositoryViewProps> = ({ data }) => {
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    data.owner?.login &&
      api.getRepoField(`${data.owner.login}`, data.name, 'languages').then((data) => {
        setLanguages(data);
      });
  }, []);

  return (
    <section>
      {data.language && (
        <Tag value={data.language} className="p-mr-2">
          <span className="p-ml-2 text">{viewLanguages(languages, data.language)}</span>
        </Tag>
      )}

      {data.languages &&
        data.languages.map((lang: string, index: number) => {
          return (
            <Tag key={index + lang} className="p-mr-2" severity="info" value={lang}>
              <span className="p-ml-2 text">{viewLanguages(languages, lang)}</span>
            </Tag>
          );
        })}
    </section>
  );
};

export default Languages;
