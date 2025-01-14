import express from 'express';
import { CreateProject, deleteProject, getProjects } from '../controllers/createProject.controllers.js';
import AdminRole from '../middlewares/admin.role.js';

const router = express.Router();

router.post("/createProject", AdminRole, CreateProject)
router.delete("/deleteProject/:id", AdminRole, deleteProject)
router.get("/getProject", getProjects)

export default router;