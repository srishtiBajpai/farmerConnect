const viewRouter = require("express").Router();
const {
  getHomePage,
  getListingPage,
  getProfile,
  getAddcropPage
} = require("../controllers/viewController");
const { protectRoute } = require("../controllers/authController");

const { getFarmer,addCrop } = require("../controllers/cropsController");

viewRouter.route("/signup").post(getHomePage);
viewRouter.route("/login").post(getHomePage);
viewRouter.route("/listing").get(protectRoute,getListingPage);
viewRouter.route("/profile").get(protectRoute, getProfile);
viewRouter.route("/addcrop").get(protectRoute, getAddcropPage).post(protectRoute,addCrop);
// viewRouter.route("/profile").get(protectRoute, getProfile);

viewRouter.route("/cropFarmerPage/:planId").get(getFarmer, getProfile);

viewRouter.route("").get(getHomePage);
// viewRouter.route("/notAuthorized").get()

// viewRouter.route("/plans").get(getPlansPage)

module.exports = viewRouter;
