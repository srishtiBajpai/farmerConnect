const cropModel = require("../models/cropModel");
const userModel=require("../models/userModel");

module.exports.getHomePage = function(req, res) {
  res.render("AgriApp.pug", { title: "AgriApp" });
};
module.exports.getListingPage = async function(req, res) {
  if(req.user.role=="buyer"){
  const crops = await cropModel.find({});
  for(var i=0;i<crops.length;i++){
    // console.log(await userModel.find({_id:crops[i].seller}))
    const user=await userModel.findOne({_id:crops[i].seller})
    crops[i].address=user.address
  }
  res.render("listing.pug", { title: "Listing page", crops,role:"buyer" });
}
  else{
    const crops=await cropModel.find({seller:req.user._id})
    res.render("listing.pug", { title: "Listing page", crops,role:"farmer" });
  }
};

module.exports.getProfile = async function(req, res) {
  const user=req.user;
  // const crops=await cropModel.find({seller:user._id})
  console.log(req.user);
  res.render("profile.pug", {title:"Profile Page",user});
};
module.exports.getAddcropPage = function(req, res) {

  res.render("addcrop.pug",{title:"Add Crop Page"});
};
