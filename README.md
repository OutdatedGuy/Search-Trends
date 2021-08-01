# Search Trends

- Search trends with the help of [Google Trends](https://trends.google.com/trends/) API
- Compare multiple (upto 5) trends
- Get line and bar graphs(charts) drawn with [Chart.js](https://www.chartjs.org/)

# Technologies Used

- [Chart.js](https://www.chartjs.org/)
- [google-trends-api](https://www.npmjs.com/package/google-trends-api)
- [express](https://expressjs.com/)

# API

- An NPM package called [google-trends-api](https://www.npmjs.com/package/google-trends-api)
- Package is runned over the server side

Syntax:
```js
import googleTrends from "google-trends-api";

googleTrends.interestOverTime({
  keyword: "string",
});
```

# Graphing

- Chart.js script called over [CDN](https://cdn.jsdelivr.net/npm/chart.js)
- Script is runned over the client side

Syntax:
```html
<canvas id="myChart" width="400" height="400"></canvas>
<script>
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, { configurations });
</script>
```
