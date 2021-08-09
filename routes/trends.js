import googleTrends from "google-trends-api";

/**
 * Gets trends data for the given keyword/keywords.
 * Queries the data for charts.
 *
 * @param {Request} req - The HTTP request.
 * @param {Response} res - The HTTP response.
 * @returns {{xAxis: string[], yAxis: number[][], average: number[]} | Error} The data for the charts.
 */
export async function trends(req, res) {
  const word = req.body.word;
  if (!Array.isArray(word))
    return res.status(400).send({ message: "Array of word(s) is required!!" });
  else if (word.length === 0)
    return res.status(400).send({ message: "Atleast one word is required!!" });
  else if (word.length > 5)
    return res.status(400).send({ message: "Maximun 5 words are allowed!!" });
  else {
    word.forEach((word) => {
      if (word.length === 0 || !word.trim())
        return res.status(400).send({ message: "Word(s) cannot be empty" });
    });
  }

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
    return res.status(500).send({ err });
  }
}
