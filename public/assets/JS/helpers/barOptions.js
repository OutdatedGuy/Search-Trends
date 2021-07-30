import { colors } from "./colors.js";

export const barOptions = {
  type: "bar",
  data: {
    labels: undefined,
    datasets: [
      {
        label: "Searches",
        data: undefined,
        backgroundColor: colors,
        borderColor: colors,
      },
    ],
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
