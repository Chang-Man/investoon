const express = require("express");
const router = express.Router();
const Model = require("../models/model");

router.post("/post", async (req, res) => {
  const data = new Model({
    email: req.body.email,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
