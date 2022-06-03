/**
 * Options and configuration for the line chart.
 */
export const lineOptions = {
  type: "line",
  data: {
    labels: undefined,
    datasets: undefined,
  },
  options: {
    scales: {},
    maintainAspectRatio: false,
    responsive: true,
    plugins: {},
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
      },
    },
  },
};
