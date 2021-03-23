import { Chart } from 'primereact/chart';

interface UserReposStatProps {
  data: { [key: string]: number };
}

export default ({ data }: UserReposStatProps) => {
  let chartLabels = [] as string[];
  let chartData = [] as number[];

  Object.entries(data)
    .sort((a, b) => b[1] - a[1])
    .forEach(([ lang, count ]) => {
      chartLabels.push(lang);
      chartData.push(count);
    });


  return (
    <>
      <h3>Используемые языки</h3>
      <Chart
        type="pie"
        height="80"
        data={{
          labels: chartLabels,
          datasets: [
            {
              data: chartData,
              backgroundColor: chartColors,
            }
          ]
        }}
        options={{
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </>
  );
};

const chartColors = [
  "#42a5f5",
  "#5c6bc0",
  "#9ccc65",
  "#ffca28",
  "#ef5350",
  "#ffa726",
  "#d4e157",
  "#26c6da",
  "#7e57c2",
  "#ab47bc",
  "#ff7043",
  "#ec407a",
  "#66bb6a",
  "#26a69a",
  "#78909c",
  "#bdbdbd",
  "#8d6e63",
];
