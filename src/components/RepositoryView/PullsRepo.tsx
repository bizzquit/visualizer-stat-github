import React, { useEffect, useState } from 'react';
import { RepositoryViewProps } from './index';
import api from '../../api';
import { Chart } from 'primereact/chart';
import { ProgressSpinner } from 'primereact/progressspinner';
import { days, halfMeanAll, labelsArray, averageAll, averageSingle } from './IssueRepo';

const PullsRepo: React.FC<RepositoryViewProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [labelsPull, setLabelsPull] = useState<number[]>([]);
  const [closedPull, setClosedPull] = useState<number[]>([]);
  const [halfClosedPull, setHalfClosedPull] = useState<number[]>([]);
  const [timeClosedPull, setTimeClosedPull] = useState(-1);

  useEffect(() => {
    const YEAR: number = 365;
    api.getRepoIssuesAndPull(`${data.owner?.login}`, data.name, 'pulls', 'closed').then((data) => {
      const filterData = data.filter((el: any) => days(el.created_at, el.closed_at) < YEAR);
      setLabelsPull(labelsArray(filterData));
      setClosedPull(averageSingle(filterData));
      setTimeClosedPull(averageAll(filterData));
      setHalfClosedPull(halfMeanAll(filterData, timeClosedPull));
      if (timeClosedPull >= 0) {
        setLoading(true);
      }
    });
  }, [timeClosedPull]);

  const chartData = {
    labels: labelsPull,
    datasets: [
      {
        type: 'line',
        label: `Ср.время закрытия ${timeClosedPull} дн.`,
        borderColor: '#ec4657',
        borderWidth: 2,
        fill: false,
        data: halfClosedPull,
      },
      {
        type: 'bar',
        label: 'Время закрытия(в днях)',
        backgroundColor: '#0945d9',
        data: closedPull,
        borderColor: '#0945d9',
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
      {!loading ? (
        <ProgressSpinner />
      ) : (
        <>
          <h3>Закрытие пулл реквестов(pull requests):</h3>
          {timeClosedPull ? (
            <div className="card">
              <Chart type="bar" data={chartData} options={lightOptions} />
            </div>
          ) : (
            <h4>Нет закрытых пулл реквестов</h4>
          )}
        </>
      )}
    </div>
  );
};

export default PullsRepo;
