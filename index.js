import express from "express";
import { trends } from "./routes/trends.js";

const app = express();
const port = process.env.PORT || 1412;
app.listen(port, () => {
  console.log(`Server listening on port http://127.0.0.1:${port}`);
});
app.use(express.static("public"));
app.use(express.json());

app.post("/trends", trends);
