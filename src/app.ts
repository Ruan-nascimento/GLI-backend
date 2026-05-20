import express from "express";
import cors from "cors";
import routes from "./routes/user.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", routes);

export { app };