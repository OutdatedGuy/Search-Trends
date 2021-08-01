import { lineChart, barChart } from "../chart/drawChart.js";
import { scales, plugins } from "../themes/chartTheme.js";
import { colors } from "../helpers/colors.js";

export let theme = "light";

export function changeTheme() {
  const darkMode = document.getElementById("dark-mode");
  theme = darkMode.checked ? "dark" : "light";

  if (lineChart !== undefined) {
    lineChart.options.scales = scales[theme];
    lineChart.options.plugins = plugins[theme];

    const lineCol = lineChart.data.datasets;
    for (let i = 0; i < lineCol.length; i++) {
      lineCol[i].backgroundColor = colors[theme][i];
      lineCol[i].borderColor = colors[theme][i];
    }

    lineChart.update();
  }

  if (barChart !== undefined) {
    barChart.options.scales = scales[theme];
    barChart.options.plugins = plugins[theme];

    barChart.data.datasets[0].backgroundColor = colors[theme];
    barChart.data.datasets[0].borderColor = colors[theme];

    barChart.update();
  }

  const html = document.querySelector("html");
  html.style.backgroundColor = `var(--${theme}-mode-bg)`;
  html.style.color = `var(--${theme}-mode-text)`;

  const inputBox = document.getElementsByClassName("input");
  for (let i = 0; i < inputBox.length; i++) {
    inputBox[i].style.backgroundColor = `var(--input-${theme}-bg)`;
    inputBox[i].style.color = `var(--input-${theme}-text)`;
    inputBox[i].style.borderColor = `1px solid var(--input-${theme}-bg)`;
  }
}
