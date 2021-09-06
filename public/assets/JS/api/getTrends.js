import { drawChart } from "../chart/drawChart.js";
import { checkError } from "../helpers/checkError.js";

/**
 * Gets trends value for a given keyword/keywords.
 * - Trend value is within 1 year range.
 * - After getting the trends, it will draw the chart by calling the drawChart function.
 *
 * @returns {boolean} If data is successfully retrieved, it will return true.
 */
export async function getTrends() {
  // Gets the keywords from the input field.
  const keywords = [];
  const element = document.getElementsByClassName("word");
  for (let i = 0; i < element.length; i++) {
    keywords.push(element[i].value.trim());
  }

  const word = {
    word: keywords,
  };

  // POST request configuration.
  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(word),
  };

  // Gets the trends data from the server.
  const res = await fetch("/trends", arg);
  const data = await res.json();
  // console.log(data);

  const err = checkError(res.status, data.message);

  // Draws the chart.
  drawChart(data, keywords, err);

  return !err;
}
