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
    DOB: String,
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

  app.get("/", (req, res) => {
    res.render("index", {
      defList: defendants,
    });
  });

  // Docket pages

  app.get("/Docket", (req, res) => {
    res.render("docket", {
      defList: defendants,
    });
  });

  app.get("/court228_docket", (req, res) => {
    res.render("court228_docket", {
      defList: defendants,
    });
  });

  app.get("/court11_docket", (req, res) => {
    res.render("court11_docket", {
      defList: defendants,
    });
  });

  app.get("/court-main", (req, res) => {
    res.render("court-main", {});
  });

  app.get("/felony-main", (req, res) => {
    res.render("felony-main", {});
  });

  app.get("/misdemeanor-main", (req, res) => {
    res.render("misdemeanor-main", {});
  });

  // Misdemeanor Court pages

  app.get("/court9", (req, res) => {
    res.render("court9", {});
  });

  app.get("/court10", (req, res) => {
    res.render("court10", {});
  });

  // Felony Court pages

  app.get("/court174", (req, res) => {
    res.render("court174", {});
  });

  app.get("/court228", (req, res) => {
    res.render("court228", {});
  });

  // Error pages
  app.get("/404", (req, res) => {
    res.render("404", {});
  });

  //

  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 4000;
  }

  app.listen(port, function () {
    console.log("server is running");
  });
}
