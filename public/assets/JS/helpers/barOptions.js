import { colors } from "./colors.js";
import { theme } from "../themes/changeTheme.js";

export const barOptions = {
  type: "bar",
  data: {
    labels: undefined,
    datasets: [
      {
        label: "Searches",
        data: undefined,
        backgroundColor: colors[theme],
        borderColor: colors[theme],
      },
    ],
  },
  options: {
    scales: {},
    plugins: {},
  },
};
