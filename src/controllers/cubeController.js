const express = require("express");

const cubeService = require("../services/cubeService");
const cubeAccessoryController = require("./cubeAccessoryController");
const { TOKEN_COOKIE, SECRET } = require("../constants");
const jwt = require("jsonwebtoken");
const { isAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

const getCreateCubePage = (req, res) => {
  res.render("cube/create");
};

const createCube = async (req, res) => {
  let { name, description, imageUrl, difficulty } = req.body;

  try {
    await cubeService.create(name, description, imageUrl, difficulty);
    res.redirect("/");
  } catch (error) {
    res.status(400).json({ messege: "Could not create cube" });
  }
};

const cubeDetails = async (req, res) => {
  let cube = await cubeService.getOne(req.params.cubeId);
  res.render("cube/details", { ...cube });
};

const getEditCubePage = async (req, res) => {
  let cube = await cubeService.getOne(req.params.cubeId);

  res.render("cube/edit", cube);
};

const postEditCubePage = async (req, res) => {
  let { name, description, imageUrl, difficulty } = req.body;
  await cubeService.updateOne(req.params.cubeId, { name, description, imageUrl, difficulty });

  res.redirect(`/cube/${req.params.cubeId}`);
};

const getDeleteCubePage = async (req, res) => {
  let cubeId = req.params.cubeId;
  let cube = await cubeService.getOne(req.params.cubeId);
  res.render("cube/delete", cube);
};

const postDeletePage = async (req, res) => {
  await cubeService.deleteOne(req.params.cubeId);
  res.redirect("/");
};

router.get("/create", getCreateCubePage);
router.post("/create", isAuth, createCube);
router.get("/:cubeId", cubeDetails);
router.get("/:cubeId/edit", isAuth, getEditCubePage);
router.post("/:cubeId/edit", isAuth, postEditCubePage);
router.get("/:cubeId/delete", isAuth, getDeleteCubePage);
router.post("/:cubeId/delete", isAuth, postDeletePage);

router.use("/:cubeId/accessory", cubeAccessoryController);

module.exports = router;
