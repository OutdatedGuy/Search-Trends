import { colors } from "../helpers/colors.js";
import { barOptions } from "../helpers/barOptions.js";
import { lineOptions } from "../helpers/lineOptions.js";
import { theme } from "../themes/changeTheme.js";

export let lineChart;
export let barChart;

export function drawChart(data, keywords) {
  if (lineChart !== undefined && barChart !== undefined) {
    lineChart.destroy();
    barChart.destroy();
  }

  let lineElement = document.getElementById("lineChart").getContext("2d");
  lineOptions.data.labels = data.xAxis;
  lineOptions.data.datasets = mapMultiLine(data, keywords);
  lineChart = new Chart(lineElement, lineOptions);

  let barElement = document.getElementById("barChart").getContext("2d");
  barOptions.data.labels = keywords;
  barOptions.data.datasets[0].data = data.average;
  barChart = new Chart(barElement, barOptions);
}

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
      borderWidth: 1,
      lineTension: 0.3,
    });
  }
  return mappedData;
}
