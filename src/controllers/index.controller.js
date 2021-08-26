/*  */
/*  */
/* const Story = require("../models/Story"); */
const controller = {};

controller.showHome = (req, res) => {
  res.render("index");
};

/* controller.showFormSignin = (req, res) => {
  res.render("signin");
};

controller.showDashboard = async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id }).lean();
    res.render("dashboard", { name: req.user.firstName, stories });
  } catch (error) {
    console.log(error);
    res.render("errors/500");
  }
}; */

module.exports = controller;
