const express = require("express"); //import express
const notes = require("./data/notes"); //import notes
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const app = express(); //creates an object of express
dotenv.config();
connectDB();
app.use(express.json());

//app.get("/", (req, res) => {
//  res.send("API is running...");
//});

//app.get("/api/notes", (req, res) => {
//  res.json(notes);
//});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`)); //creates a web server on port 5000
