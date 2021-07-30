import { colors } from "../helpers/colors.js";

var myChart;
var myChart1;

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

  var lineElement = document.getElementById("lineChart").getContext("2d");
  myChart = new Chart(lineElement, {
    type: "line",
    data: {
      labels: data.xAxis,
      datasets: mapMultiLine(data, keywords),
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  var barElement = document.getElementById("barChart").getContext("2d");
  myChart1 = new Chart(barElement, {
    type: "bar",
    data: {
      labels: keywords,
      datasets: [
        {
          label: "Searches",
          data: data.average,
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
  });
}

function mapMultiLine(data, keywords) {
  const mappedData = [];

  for (var i = 0; i < keywords.length; i++) {
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
