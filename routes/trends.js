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
  // Get the keyword(s) from the request.
  const word = req.body.word;

  // Check if the keyword is valid.
  if (!Array.isArray(word))
    return res.status(400).send({ message: "Array of word(s) is required!!" });
  else if (word.length === 0)
    return res.status(400).send({ message: "Atleast one word is required!!" });
  else if (word.length > 5)
    return res.status(400).send({ message: "Maximun 5 words are allowed!!" });
  else if (!word.every((ele) => typeof ele === "string"))
    return res.status(400).send({ message: "All words should be strings!!" });
  else {
    word.forEach((keyword, index) => {
      if (keyword.length === 0 || !keyword.trim())
        return res.status(400).send({ message: "Word(s) cannot be empty" });
      word[index] = keyword.trim();
    });
  }

  // Get the start date (i.e. 1 year ago from today).
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  try {
    // Get the data from Google Trends.
    let result = await googleTrends.interestOverTime({
      keyword: word,
      startTime: startDate,
    });
    // console.log(result);
    result = JSON.parse(result);

    // Separate the data into x-axis and y-axis.
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
