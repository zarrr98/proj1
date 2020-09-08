const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../../models/user");


//handle clicking on confirmation link
router.put("/testapi", (req, res, next) => {
  console.log("req.decodedJWT in handle confirmation => ");
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
  });

  user
    .save()
    .then((resolve) => {
      return res.status(200).json({
        message: "user saved successfully",
        status: 200,
        resolve,
      });
    })
    .catch((err) => {
      console.log("error in test api");
      return res.status(500).json({
        error: err,
        status: 500,
      });
    });
});



module.exports = router;
