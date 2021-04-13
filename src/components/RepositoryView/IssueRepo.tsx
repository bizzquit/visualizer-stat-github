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

export const meanSingle = (array: number[]) => {
  return array.map((el: any) => days(el.created_at, el.closed_at));
};

export const halfMeanAll = (array: number[], mean: number) => {
  return array.map(() => mean);
};

export const meanAll = (data: string[], setState: React.Dispatch<React.SetStateAction<number>>) => {
  const array: number[] = data.map((el: any) => days(el.created_at, el.closed_at));
  if (array.length > 1) {
    const sum = array.reduce((acc, curr) => acc + curr);
    const result: number = Math.floor(sum / array.length);
    setState(result);
  } else {
    setState(array[0]);
  }
};

const IssueRepo: React.FC<RepositoryViewProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [labelsIssue, setLabelsIssue] = useState<number[]>([]);
  const [closedIssue, setClosedIssue] = useState<number[]>([]);
  const [halfClosedIssue, setHalfClosedIssue] = useState<number[]>([]);
  const [timeClosedIssue, setTimeClosedIssue] = useState(0);

  useEffect(() => {
    const YEAR: number = 365;
    api.getRepoIssuesAndPull(`${data.owner?.login}`, data.name, 'issues', 'closed').then((data) => {
      const filterData = data.filter((el: any) => days(el.created_at, el.closed_at) < YEAR);
      setClosedIssue(meanSingle(filterData));
      meanAll(filterData, setTimeClosedIssue);
      setHalfClosedIssue(halfMeanAll(filterData, timeClosedIssue));
      setLabelsIssue(labelsArray(filterData));
      setLoading(true);
    });
  }, []);

  const chartData = {
    labels: labelsIssue,
    datasets: [
      {
        type: 'line',
        label: 'Среднее',
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
          <h4>Среднее время закрытия задач: {timeClosedIssue} дн.</h4>
          <div className="card">
            <Chart type="bar" data={chartData} options={lightOptions} />
          </div>
        </>
      )}
    </div>
  );
};

export default IssueRepo;
