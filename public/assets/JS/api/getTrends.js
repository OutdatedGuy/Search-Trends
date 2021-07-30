import { colors } from "../helpers/colors.js";
import { barOptions } from "../helpers/barOptions.js";
import { lineOptions } from "../helpers/lineOptions.js";

let myChart;
let myChart1;

export async function getTrends() {
  const keywords = [];
  const element = document.getElementsByClassName("word");
  console.log(element.length);
  for (let i = 0; i < element.length; i++) {
    keywords.push(element[i].value);
  }

  const word = {
    word: keywords,
  };

  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(word),
  };

  const res = await fetch("/trends", arg);
  // let data = await res.text();
  const data = JSON.parse(await res.text());
  console.log(data);

  drawChart(data, keywords);
}

function drawChart(data, keywords) {
  if (myChart !== undefined && myChart1 !== undefined) {
    myChart.destroy();
    myChart1.destroy();
  }

  let lineElement = document.getElementById("lineChart").getContext("2d");
  lineOptions.data.labels = data.xAxis;
  lineOptions.data.datasets = mapMultiLine(data, keywords);
  myChart = new Chart(lineElement, lineOptions);

  let barElement = document.getElementById("barChart").getContext("2d");
  barOptions.data.labels = keywords;
  barOptions.data.datasets[0].data = data.average;
  myChart1 = new Chart(barElement, barOptions);
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
      backgroundColor: [colors[i]],
      borderColor: [colors[i]],
      borderWidth: 1,
      lineTension: 0.5,
    });
  }
  return mappedData;
}
