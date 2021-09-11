const express = require("express"); //import express
const notes = require("./data/notes"); //import notes
const dotenv = require("dotenv");

const app = express(); //creates an object of express

dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`)); //creates a web server on port 5000
