import { drawChart } from "../chart/drawChart.js";

/**
 * Gets trends value for a given keyword/keywords.
 * - Trend value is within 1 year range.
 * - After getting the trends, it will draw the chart by calling the drawChart function.
 */
export async function getTrends() {
  const keywords = [];
  const element = document.getElementsByClassName("word");
  // console.log(element.length);
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
  // console.log(data);

  drawChart(data, keywords);
}
