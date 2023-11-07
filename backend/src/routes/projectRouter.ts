import { Router } from "express";

import {
  assignProject,
  completeProject,
  createProject,
  deleteProject,
  getAssignedProjects,
  getProject,
  getProjects,
  getUserAssignedProject,
  unassignProject,
  updateProject,
  inProgressProject,
} from "../controllers/projectController";

const project_router = Router();

project_router.post("/", createProject);
project_router.get("/", getProjects);
project_router.put("/", updateProject);

project_router.get("/complete/:project_id", completeProject);
project_router.get("/inprogress/:project_id", inProgressProject);
project_router.get("/complete", createProject);
project_router.post("/getUserAssignedProjects", getUserAssignedProject);
project_router.get("/getAssigned", getAssignedProjects);
project_router.post("/assign", assignProject);
project_router.post("/unAssign", unassignProject);
project_router.get("/:project_id", getProject);
project_router.delete("/:project_id", deleteProject);

export default project_router;
