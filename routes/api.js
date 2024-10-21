import express from "express";
const router = express.Router();

import * as controller from "../app/controllers/controllers.js";

//create Route
router.post("/createTask", controller.createTask);

//Read Route
router.get("/readTask", controller.readTask);

//Update Route
router.put("/updateTask", controller.updateTask);

//Delete Route
router.delete("/deleteTask", controller.deleteTask);

export default router;