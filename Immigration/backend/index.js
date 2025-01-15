const express = require("express");
const mongoose = require("mongoose");

const data = express();

const CategorySchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  country: String,
});

const CategoryModel = mongoose.model("category", CategorySchema);

data.get("/categories", async (req, res) => {
  let categories = await CategoryModel.find();
  res.send(categories);
});

data.get("/categories/:id", async (req, res) => {
  let id = req.params.id;
  let category = await CategoryModel.findById(id);
  res.send(category);
});

data.post("/categories", async (req, res) => {
  let newCategory = CategoryModel(req.body);
  await newCategory.save();
  res.send("succes post");
});

data.delete("/categories/:id", async (req, res) => {
  let id = req.params.id;
  await CategoryModel.findByIdAndDelete(id);
  res.send("Success Delete");
});

data.put("/categories/:id", async (req, res) => {
  let id = req.params.id;
  let updateCategory = req.body;
  await CategoryModel.findByIdAndUpdate({ _id: id }, updateCategory);
  res.send("success update");
});

mongoose
  .connect(
    "mongodb+srv://xadicacmbp109:Khadija27M.@nodeproject.krm25.mongodb.net/"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

data.listen(3000, () => {
  console.log("3000 portunda dinlenilir");
});
