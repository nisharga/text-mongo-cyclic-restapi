const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const Student = require("./model");

router.get("/student/getall", async (req, res) => {
  try {
    const data = await Student.find();
    res.status(200).json(data);
  } catch (err) {
    res.send(500).json({ message: err.message });
  }
});

router.get("/student/getbyid/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Student.findById(id);
    res.status(200).json(data);
  } catch (err) {
    res.send(500).json({ message: err.message });
  }
});

router.post("/student/add", async (req, res) => {
  try {
    const student = new Student({
      name: req.body.name,
      age: req.body.age,
    });
    const result = await student.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/student/delet/:id", async (req, res) => {
  try {
    const result = await Student.findOneAndDelete(req.params.id);
    res.status(200).json({ message: "DELET sucessfully" });
  } catch (err) {
    consol.log(err);
  }
});

router.put("/student/update/:id", async (req, res) => {
  try {
    const options = { new: true };
    const result = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
