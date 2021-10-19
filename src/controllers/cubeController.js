const express = require("express");

const cubeService = require("../services/cubeService");
const cubeAccessoryController = require("./cubeAccessoryController");
const { TOKEN_COOKIE, SECRET } = require("../constants");
const jwt = require("jsonwebtoken");
const {isAuth} = require('../middlewares/authMiddleware');

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

const getEditCubePage = (req, res) => {
  res.render("cube/edit");
};

const getDeleteCubePage = (req, res) => {
   
  res.render("cube/delete");
};

router.get("/create", getCreateCubePage);
router.post("/create", isAuth, createCube);
router.get("/:cubeId", cubeDetails);
router.get("/:cubeId/edit",isAuth, getEditCubePage);
router.get("/:cubeId/delete", isAuth, getDeleteCubePage);

router.use("/:cubeId/accessory", cubeAccessoryController);

module.exports = router;
