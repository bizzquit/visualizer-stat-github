import React, { useState } from 'react';
import { User } from '../../../interfaces/api-types';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import { SelectButton } from 'primereact/selectbutton';

import './styles.css';

type UserCardProps = {
  user: User;
};

const exampleTheme = {
  background: 'transparent',
  text: 'rgba(255, 255, 255, 0.6)',
  grade4: 'hsl(123,95%,22%)',
  grade3: 'hsl(114,70%,42%)',
  grade2: 'hsl(116,65%,47%)',
  grade1: 'hsl(113,85%,65%)',
  grade0: '#eee',
};

const years = [
  { name: '2016', value: 2016 },
  { name: '2017', value: 2017 },
  { name: '2018', value: 2018 },
  { name: '2019', value: 2019 },
  { name: '2020', value: 2020 },
  { name: '2021', value: 2021 },
];

const thisYear: number = new Date().getFullYear();

const CalendarActivityUser: React.FC<UserCardProps> = ({ user }) => {
  const [year, setYear] = useState(thisYear);

  return (
    <>
      <h4>Активность пользователя:</h4>
      <SelectButton
        value={year}
        options={years}
        onChange={(e) => setYear(e.value)}
        optionLabel="name"
        className="p-mb-3"
      />
      <GitHubCalendar
        username={user.login}
        showTotalCount={false}
        years={[year]}
        fullYear={true}
        blockMargin={5}
        blockSize={16}
        theme={exampleTheme}
      >
        <ReactTooltip delayShow={30} html />
      </GitHubCalendar>
    </>
  );
};

export default CalendarActivityUser;
