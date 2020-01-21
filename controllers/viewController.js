const cropModel = require("../models/cropModel");
const userModel=require("../models/userModel");

module.exports.getHomePage = function(req, res) {
  res.render("AgriApp.pug", { title: "AgriApp" });
};
module.exports.getListingPage = async function(req, res) {
  const crops = await cropModel.find({});
  const user=await userModel
  res.render("listing.pug", { title: "Listing page", crops });
};

module.exports.getProfile = async function(req, res) {
  const user=req.user;
  console.log(req.user);
  res.render("profile.pug", {user});
};
module.exports.getAddcropPage = function(req, res) {

  res.render("addcrop.pug");
};
