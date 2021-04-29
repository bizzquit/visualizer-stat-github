import React, { useEffect, useState } from 'react';
import { RepositoryViewProps } from './RepositoryView';
import { Chart } from 'primereact/chart';
import api from '../../api';
import { NumbersDaysInYear } from '../../constants/numberDaysInYear ';

export const getDiffInDays = (startDate: string, endDate: string) => {
  return Math.floor((+new Date(endDate) - +new Date(startDate)) / (1000 * 3600 * 24));
};

export const labelsArray = (array: number[]) => {
  return array.map((_, i) => ++i);
};

export const averageSingle = (array: number[]) => {
  return array.map((el: any) => getDiffInDays(el.created_at, el.closed_at));
};

export const halfMeanAll = (array: number[], mean: number) => {
  return array.map(() => mean);
};

export const averageAll = (data: number[]) => {
  const array: number[] = data.map((el: any) => getDiffInDays(el.created_at, el.closed_at));
  if (array.length > 1) {
    const sum = array.reduce((acc, curr) => acc + curr);
    return Math.floor(sum / array.length);
  } else {
    return array[0] || 0;
  }
};

const lightOptions = {
  legend: {
    labels: {
      fontColor: 'white',
    },
    position: 'right',
  },
  scales: {
    xAxes: [
      {
        ticks: {
          fontColor: 'white',
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: 'white',
        },
      },
    ],
  },
};

const IssueRepo: React.FC<RepositoryViewProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [labelsIssue, setLabelsIssue] = useState<number[]>([]);
  const [closedIssue, setClosedIssue] = useState<number[]>([]);
  const [halfClosedIssue, setHalfClosedIssue] = useState<number[]>([]);
  const [timeClosedIssue, setTimeClosedIssue] = useState(-1);

  useEffect(() => {
    api.getRepoIssuesAndPull(`${data.owner?.login}`, data.name, 'issues', 'closed').then((data) => {
      const filterData: number[] = data.filter(
        (el: { created_at: string; closed_at: string }) =>
          getDiffInDays(el.created_at, el.closed_at) < NumbersDaysInYear
      );

      setLabelsIssue(labelsArray(filterData));
      setClosedIssue(averageSingle(filterData));
      setTimeClosedIssue(averageAll(filterData));
      setHalfClosedIssue(halfMeanAll(filterData, timeClosedIssue));
      setLoading(true);
    });
  }, [timeClosedIssue]);

  const chartData = {
    labels: labelsIssue,
    datasets: [
      {
        type: 'line',
        label: `Ср.время закрытия ${timeClosedIssue} дн.`,
        borderColor: '#0945d9',
        backgroundColor: '#0945d9',
        borderWidth: 0,
        fill: false,
        data: halfClosedIssue,
      },
      {
        type: 'bar',
        label: 'Время закрытия(в днях)',
        backgroundColor: '#ec4657',
        data: closedIssue,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chart__closed-chart">
      {!loading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <h3>Закрытие задач(issues):</h3>
          {timeClosedIssue ? (
            <div className="card">
              <Chart type="bar" data={chartData} options={lightOptions} />
            </div>
          ) : (
            <p>Нет закрытых задач</p>
          )}
        </>
      )}
    </div>
  );
};

export default IssueRepo;
