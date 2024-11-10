const express = require("express");
const app = express();
const cors = require("cors");
const dummy = require("./Schema/dummy");
const axios = require("axios");
const mongoose = require("mongoose");

require("./database/database");

const port = 8081;

app.use(cors());
app.use(express.json());

app.get("/hello", async (req, res) => {
  try {
    res.status(200).send("hii...");
  } catch (error) {
    console.log(error);
  }
});

///////-----------post api---------

app.post("/post", async (req, res) => {
  try {
    const data = new dummy(req.body);
    await data.save();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

///////-----------get all api---------

app.get("/get", async (req, res) => {
  try {
    const data = await dummy.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

///////-----------get by id api---------

app.get("/get/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await dummy.findById(id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

///////-----------update by id api---------

app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const updatedData = await dummy.findByIdAndUpdate(id, newData, { new: true });
    res.status(200).send(updatedData);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

///////-----------delete by id api---------

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await dummy.findByIdAndDelete(id);
    res.status(200).send("Data deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Connection is listen at http://localhost:${port}`);
});
