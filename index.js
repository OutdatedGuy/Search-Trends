import googleTrends from "google-trends-api";
import express from "express";

const app = express();
const port = process.env.PORT || 1412;
app.listen(port, () => {
  console.log(`Server listening on port http://127.0.0.1:${port}`);
});
app.use(express.static("public"));
app.use(express.json());

app.post("/trends", async (req, res) => {
  const word = req.body.word;
  if (word === undefined) return res.status(400).send("Word is required");
  else if (word === "" || word === " ")
    return res.status(400).send("Word cannot be empty");

  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  try {
    let result = await googleTrends.interestOverTime({
      keyword: word,
      startTime: startDate,
    });
    // console.log(result);
    result = JSON.parse(result);

    const yAxis = [],
      xAxis = [];
    result.default.timelineData.forEach(function (item) {
      yAxis.push(item.value);
      xAxis.push(item.formattedAxisTime);
    });

    const average = result.default.averages;
    // console.log(average);

    // console.log({ xAxis, yAxis });
    return res.status(200).send({ xAxis, yAxis, average });
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
});
