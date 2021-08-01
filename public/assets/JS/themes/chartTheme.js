/**
 * Configuration for charts axes.
 * Conatins separate colors for light and dark theme.
 */
export const scales = {
  // Color for light theme
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
  // Color for dark theme
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

/**
 * Configuration for chart labels.
 * Conatins separate colors for light and dark theme.
 */
export const plugins = {
  // Color for light theme
  light: {
    legend: {
      labels: {
        color: "rgba(0, 0, 0)",
      },
    },
  },
  // Color for dark theme
  dark: {
    legend: {
      labels: {
        color: "rgba(255, 255, 255)",
      },
    },
  },
};
