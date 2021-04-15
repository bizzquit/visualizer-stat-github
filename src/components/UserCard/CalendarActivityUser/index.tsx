import React, { useEffect, useState } from 'react';
import { User } from '../../../interfaces/api-types';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

type UserCardProps = {
  user: User;
};

const CalendarActivityUser: React.FC<UserCardProps> = ({ user }) => {
  const [year, setYear] = useState(2021);

  useEffect(() => {
    setYear(year);
  }, [year]);
  return (
    <>
      <h4>Активность пользователя:</h4>
      <GitHubCalendar username={user.login} showTotalCount={true} years={[year]} fullYear={true}>
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
    </>
  );
};

export default CalendarActivityUser;
