const express = require("express");

const userRoute = require("./router/signup.router");
const dbConnection = require("./config/db")

const app = express();


dbConnection()

app.use(express.json());
app.use(`/api`, userRoute);

const PORT = 4000;

app.listen(PORT);
