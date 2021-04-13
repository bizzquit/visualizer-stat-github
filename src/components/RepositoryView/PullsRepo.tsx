import React, { useEffect, useState } from 'react';
import { RepositoryViewProps } from './index';
import api from '../../api';
import { Chart } from 'primereact/chart';
import { days, halfMeanAll, labelsArray, meanAll, meanSingle } from './IssueRepo';

const PullsRepo: React.FC<RepositoryViewProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [labelsPull, setLabelsPull] = useState<number[]>([]);
  const [closedPull, setClosedPull] = useState<number[]>([]);
  const [halfClosedPull, setHalfClosedPull] = useState<number[]>([]);
  const [timeClosedPull, setTimeClosedPull] = useState(0);

  useEffect(() => {
    const YEAR: number = 365;
    api.getRepoIssuesAndPull(`${data.owner?.login}`, data.name, 'pulls', 'closed').then((data) => {
      const filterData = data.filter((el: any) => days(el.created_at, el.closed_at) < YEAR);
      setLabelsPull(labelsArray(filterData));
      setClosedPull(meanSingle(filterData));
      meanAll(filterData, setTimeClosedPull);
      setHalfClosedPull(halfMeanAll(filterData, timeClosedPull));
      setLoading(true);
    });
  }, []);

  const chartData = {
    labels: labelsPull,
    datasets: [
      {
        type: 'line',
        label: 'Среднее',
        borderColor: '#0945d9',
        borderWidth: 2,
        fill: false,
        data: halfClosedPull,
      },
      {
        type: 'bar',
        label: 'Время закрытия(в днях)',
        backgroundColor: 'red',
        data: closedPull,
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
          <h3>График закрытия пулл реквестов(pull requests):</h3>
          <h4>Среднее время закрытия пулл реквестов: {timeClosedPull} дн.</h4>
          <div className="card">
            <Chart type="bar" data={chartData} options={lightOptions} />
          </div>
        </>
      )}
    </div>
  );
};

export default PullsRepo;
