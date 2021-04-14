import React, { useEffect, useState } from 'react';
import { RepositoryViewProps } from './index';
import { Chart } from 'primereact/chart';
import api from '../../api';

export const days = (dateCreated: string, dateClosed: string) => {
  const dateStart = new Date(dateCreated);
  const dateEnd = new Date(dateClosed);
  return Math.ceil((dateEnd.getTime() - dateStart.getTime()) / (1000 * 3600 * 24));
};

export const labelsArray = (array: number[]) => {
  return array.map((_, i) => ++i);
};

export const averageSingle = (array: number[]) => {
  return array.map((el: any) => days(el.created_at, el.closed_at));
};

export const halfMeanAll = (array: number[], mean: number) => {
  return array.map(() => mean);
};

export const averageAll = (data: number[]) => {
  const array: number[] = data.map((el: any) => days(el.created_at, el.closed_at));
  if (array.length > 1) {
    const sum = array.reduce((acc, curr) => acc + curr);
    return Math.floor(sum / array.length);
  } else {
    return array[0] || 0;
  }
};

const IssueRepo: React.FC<RepositoryViewProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [labelsIssue, setLabelsIssue] = useState<number[]>([]);
  const [closedIssue, setClosedIssue] = useState<number[]>([]);
  const [halfClosedIssue, setHalfClosedIssue] = useState<number[]>([]);
  const [timeClosedIssue, setTimeClosedIssue] = useState(-1);

  const YEAR: number = 365;
  let filterData: number[] = [];

  useEffect(() => {
    api.getRepoIssuesAndPull(`${data.owner?.login}`, data.name, 'issues', 'closed').then((data) => {
      filterData = data.filter((el: any) => days(el.created_at, el.closed_at) < YEAR);
      setLabelsIssue(labelsArray(filterData));
      setClosedIssue(averageSingle(filterData));
      setTimeClosedIssue(averageAll(filterData));
      setHalfClosedIssue(halfMeanAll(filterData, timeClosedIssue));

      if (timeClosedIssue >= 0) {
        setLoading(true);
      }
    });
  }, [timeClosedIssue]);

  const chartData = {
    labels: labelsIssue,
    datasets: [
      {
        type: 'line',
        label: `Ср.время закрытия ${timeClosedIssue} дн.`,
        borderColor: '#0945d9',
        borderWidth: 2,
        fill: false,
        data: halfClosedIssue,
      },
      {
        type: 'bar',
        label: 'Время закрытия(в днях)',
        backgroundColor: 'red',
        data: closedIssue,
        borderColor: '#ec4657',
        borderWidth: 2,
      },
    ],
  };

  const lightOptions = {
    legend: {
      labels: {
        fontColor: '#495057',
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: '#495057',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: '#495057',
          },
        },
      ],
    },
  };

  return (
    <div className="chart__closed-chart">
      {loading && (
        <>
          <h3>График закрытия задач(issues):</h3>
          <div className="card">
            <Chart type="bar" data={chartData} options={lightOptions} />
          </div>
        </>
      )}
    </div>
  );
};

export default IssueRepo;
