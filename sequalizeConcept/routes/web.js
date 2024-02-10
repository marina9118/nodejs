const express = require("express");
const router = express.Router();
const TutorialController = require("../Controllers/TutorialController.js");
const PostController = require("../Controllers/PostController.js");

router.get("/", (req, resp) => {
    return resp.send("route is working");
});
router.get("/list", (req, resp) => {
    TutorialController.index(req, resp);
});
router.post("/create", (req, res) => {
    TutorialController.create(req, res);
});
router.get("/edit/:id", TutorialController.edit);
router.get("/create-bulk-data", TutorialController.createBulkData);
router.put("/update/:id", TutorialController.update);
router.get("/where-in-function", TutorialController.whereInFunction);
router.post("/create-post", PostController.create);
router.get("/edit-post/:id", PostController.edit);
  
module.exports = router;