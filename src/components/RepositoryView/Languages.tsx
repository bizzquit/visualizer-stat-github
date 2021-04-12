import React from 'react';
import { RepositoryViewProps } from './index';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

const Languages: React.FC<RepositoryViewProps> = ({ data }) => {
  return (
    <div>
      <h4>Используемые языки</h4>
      {data.language && (
        <Button
          type="button"
          label={data.language}
          className="p-mr-2 p-button-danger p-button-rounded"
        >
          <Badge value={data.language} />
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
              <Badge value={888} />
            </Button>
          );
        })}
    </div>
  );
};

export default Languages;
