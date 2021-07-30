export const lineOptions = {
  type: "line",
  data: {
    labels: undefined,
    datasets: undefined,
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
          borderColor: "rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(255, 255, 255, 1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 1)",
        }
      },
      x: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
          borderColor: "rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(255, 255, 255, 1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 1)",
        }
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255)",
        },
      },
    },
  },
};
