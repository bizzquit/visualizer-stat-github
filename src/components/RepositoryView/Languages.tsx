import React, { useEffect, useState } from 'react';
import { RepositoryViewProps } from './index';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import api from '../../api';

const Languages: React.FC<RepositoryViewProps> = ({ data }) => {
  const [languages, setLanguages] = useState<any>();

  useEffect(() => {
    api.getRepoField(`${data.owner?.login}`, data.name, 'languages').then((data) => {
      setLanguages(data);
    });
  }, []);

  return (
    <div>
      {data.language && (
        <Button
          type="button"
          label={data.language}
          className="p-mr-2 p-button-danger p-button-rounded"
        >
          <Badge value={languages ? languages[data.language] : 0} />
        </Button>
      )}

      {data.languages &&
        data.languages.map((lang: string, index: number) => {
          return (
            <Button
              key={index + lang}
              type="button"
              label={lang}
              className="p-mr-2 p-button-rounded"
            >
              <Badge value={languages ? languages[lang] : 0} />
            </Button>
          );
        })}
    </div>
  );
};

export default Languages;
