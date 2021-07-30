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
      },
    },
  },
};
