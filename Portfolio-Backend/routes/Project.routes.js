import express from 'express';
import { CreateProject, getProjects } from '../controllers/createProject.controllers.js';

const router = express.Router();

router.post("/createProject", CreateProject)
router.get("/getProject", getProjects)

export default router;