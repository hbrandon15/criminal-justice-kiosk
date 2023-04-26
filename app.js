const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");

app.use(express.static("public"));

main().catch((err) => console.log(err));


async function main() {
  await mongoose.connect(
    "mongodb+srv://admin-brandon:test123@cluster0.7drueob.mongodb.net/Docket"
  );

  const docketSchema = {
    firstName: String,
    lastName: String,
    DOB: Date,
    UScitizen: Boolean,
    Height: String,
    Weight: String,
    Case: String,
    Court: String,
    JudgeName: String,
    CourtType: String,
    CourtFloor: String,
    RaceSex: String,
    NextCourtDate: Date,
    Status: String,
  };

  const Defendant = mongoose.model("Defendant", docketSchema);
  const defendants = await Defendant.find();
  //console.log(defendants);
  app.get("/", (req, res) => {
    res.render("index", {
      defList: defendants,
    });
  });

  app.get("/Docket", (req, res) => {
    res.render("docket", {
      defList: defendants,
    });
  });
  app.listen(4000, function () {
    console.log("server is running");
  });
}
