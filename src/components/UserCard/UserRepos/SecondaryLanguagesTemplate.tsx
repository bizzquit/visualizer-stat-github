import { ProgressSpinner } from 'primereact/progressspinner';
import React from 'react';

const SecondaryLanguageTemplate = (rowData: { contributors: number, languages: string[] }) => {
  const { languages } = rowData;
  return (
    <>
      {
        languages !== undefined
          ? (<div className="secondary-lang-col">
              {
                languages && languages.length
                  ? languages.map((lang, index) => (
                      <React.Fragment key={lang}>
                        {lang}
                        {index < languages.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))
                  : '—'
              }
          </div>)
          : (<ProgressSpinner style={{width: '12px', height: '12px'}} />)
      }
    </>
  );
};

export default SecondaryLanguageTemplate;
