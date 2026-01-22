import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("API rodando 🚀");
});

app.listen(3333, () => {
  console.log("🚀 Backend rodando em http://localhost:3333");
});
