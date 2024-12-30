import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { router } from "./routes/v1/index";

const app = express();
app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send('<h1 style="color: red">Hello, world!</h1>');
});

app.listen(process.env.port || 3000, () => {
  console.log("🔩Server started on port 3000");
});
