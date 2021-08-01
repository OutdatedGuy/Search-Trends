import { drawChart } from "../chart/drawChart.js";

export let myChart;
export let myChart1;

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
