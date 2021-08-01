export const scales = {
  light: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.2)",
        borderColor: "rgba(0, 0, 0, 1)",
        backgroundColor: "rgba(0, 0, 0, 1)",
      },
      ticks: {
        color: "rgba(0, 0, 0, 1)",
      },
    },
    x: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.2)",
        borderColor: "rgba(0, 0, 0, 1)",
        backgroundColor: "rgba(0, 0, 0, 1)",
      },
      ticks: {
        color: "rgba(0, 0, 0, 1)",
      },
    },
  },
  dark: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 1)",
      },
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
      },
    },
  },
};

export const plugins = {
  light: {
    legend: {
      labels: {
        color: "rgba(0, 0, 0)",
      },
    },
  },
  dark: {
    legend: {
      labels: {
        color: "rgba(255, 255, 255)",
      },
    },
  },
};
