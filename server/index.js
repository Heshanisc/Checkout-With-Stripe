import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import compression from "compression";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import routes from "./routes/index.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(compression());

app.use(cookieParser());

app.use(bodyParser.json());

const server = http.createServer(app);

const SERVER_PORT = process.env.PORT || 8080;

server.listen(SERVER_PORT, () => {
  console.log(`Server is running on  http://localhost:${SERVER_PORT}`);
});

mongoose.connect(process.env.MONGODB_URL);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB", err);
});

app.use("/", routes());

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
