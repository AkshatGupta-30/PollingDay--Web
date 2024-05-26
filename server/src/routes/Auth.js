const express = require("express");
const router = express.Router();
const crypto = require('crypto')
const Voter = require("../models/voters");

//* Check if Voter role is admin or not
const isAdminPresent = async function () {
  try {
    const admin = await Voter.findOne({ role: "Admin" });
    if (!admin) return false;
    return true;
  } catch (err) {
    console.log(err);
    return true;
  }
};

//* Generate Voter Id
const generateVoterId = async function() {
  let isValidId = false;
  let id = parseInt(crypto.randomBytes(4).toString('hex'), 16).toString().slice(0, 8);
  while(!isValidId) {
    await Voter.findOne({id: id})
    .then((idExist) => {
      if(idExist) {
        console.log("Id Exists" + id)
        id = parseInt(crypto.randomBytes(3).toString('hex'), 16).toString().slice(0, 10);
      } else {
        isValidId = true;
      }
    })
  }
  return id;
}

//* Register Voter
router.post("/register", async (req, res) => {
  try {
    //* Reciving Voter entries from request body
    const { name, fathersName, dob, gender, address, mobile, aadhar, password, role } = req.body;

    if (!name || !fathersName || !dob || !gender || !mobile || !aadhar || !password) {
      return res.status(422).json({ error: "Plz fill the required fields" });
    }

    Voter.findOne({
      $or: [{ mobile: mobile }, { aadhar: aadhar }],
    })
    .then((voterExist) => {
      if (voterExist) {
        if (voterExist.mobile === mobile) {
          return res.status(422).json({ error: "Mobile number already exists" });
        } else {
          return res.status(422).json({ error: "Aadhar number already exists" });
        }
      }
    });

    const id = (role == "Admin") ? "0" : await generateVoterId();

    //* Creating New Voter
    const newVoter = new Voter({id, name, fathersName, dob, gender, address, mobile, aadhar, password, role});
    if (newVoter.role == "Admin" && (await isAdminPresent())) {
      return res.status(403).json("You are not authorized to be the admin");
    }

    // * Saving new voter in database
    const response = await newVoter.save();
    console.log("Data Saved");
    res.status(200).json({ response: response });
  } catch (err) {
    console.log("error: " + err);
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;
