import { colors } from "../helpers/colors.js";
import { barOptions } from "../helpers/barOptions.js";
import { lineOptions } from "../helpers/lineOptions.js";
import { theme } from "../themes/changeTheme.js";
import { scales, plugins } from "../themes/chartTheme.js";

/**
 * Variable to store the line chart object.
 */
export let lineChart;

/**
 * Variable to store the bar chart object.
 */
export let barChart;

/**
 * Draws a line chart and a bar chart with give data.
 * @param {{xAxis: string[], yAxis: number[][], average: number[]}} data - The data to be used for the chart.
 * @param {string[]} keywords - Labels for bar chart.
 */
export function drawChart(data, keywords, err) {
  // If chart already exists, remove it.
  if (lineChart !== undefined && barChart !== undefined) {
    lineChart.destroy();
    barChart.destroy();
  }

  if (err) return;

  // Create line chart.
  let lineElement = document.getElementById("lineChart").getContext("2d");
  lineOptions.data.labels = data.xAxis;
  lineOptions.data.datasets = mapMultiLine(data, keywords);
  lineOptions.options.scales = scales[theme];
  lineOptions.options.plugins = plugins[theme];
  lineChart = new Chart(lineElement, lineOptions);

  // Create bar chart.
  let barElement = document.getElementById("barChart").getContext("2d");
  barOptions.data.labels = keywords;
  barOptions.data.datasets[0].data = data.average;
  barOptions.data.datasets[0].backgroundColor = colors[theme];
  barOptions.data.datasets[0].borderColor = colors[theme];
  barOptions.options.scales = scales[theme];
  barOptions.options.plugins = plugins[theme];
  barChart = new Chart(barElement, barOptions);
}

/**
 * Sepeartes data for multiline chart.
 * @param {{yAxis: number[][]}} data - Multiline values.
 * @param {string[]} keywords - Labels for line chart.
 * @returns {{label: string, data: number[], backgroundColor: string, borderColor: string, borderWidth: number, lineTension: number}[]} The separated data for the multiline chart.
 */
function mapMultiLine(data, keywords) {
  const mappedData = [];

  for (let i = 0; i < keywords.length; i++) {
    const value = [];
    data.yAxis.forEach((element) => {
      value.push(element[i]);
    });

    mappedData.push({
      label: keywords[i],
      data: value,
      backgroundColor: [colors[theme][i]],
      borderColor: [colors[theme][i]],
      borderWidth: 2,
      lineTension: 0.3,
    });
  }

  return mappedData;
}
