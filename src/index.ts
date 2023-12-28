import express from "express";

const cors = require("cors");

import { searchRoutes } from "./routes/searchRoutes";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/search", searchRoutes);

app.listen(port, async () => {
  console.log(`Listening on port ${port}.`);
});
