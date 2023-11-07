// import { updatProject } from "./../types/projectInterface";
import { Request, Response } from "express";
import { execute, query } from "../services/dbconnect";

import { v4 as uuidv4 } from "uuid";
import {
  validateProject,
  validateProjectId,
  validateUpdateProject,
} from "../validators/projectValidator";
import { Project } from "../types/projectInterface";
import { user } from "../types/userInterfaces";

export const createProject = async (req: Request, res: Response) => {
  try {
    const { project_name, project_description, dueDate } = req.body;

    const { error } = validateProject.validate(req.body);

    if (error)
      return res
        .status(400)
        .send({ success: false, message: "please place correct details" });

    const newProject: Project = {
      project_id: uuidv4(),
      project_name,
      dueDate,
      project_description,
    };

    const procedure = "createProject";
    const params = newProject;

    await execute(procedure, params);
    return res.send({ message: "Project created successfully" });
  } catch (error) {
    console.log(error);
    res.send((error as Error).message);
  }
};
export const updateProject = async (req: Request, res: Response) => {
  try {
    const { project_id, project_name, project_description, dueDate } = req.body;

    const { error } = validateUpdateProject.validate(req.body);
    if (error)
      return res.status(400).send({ message: "please put correct details" });

    const newProject: Project = {
      project_id,
      project_name,
      project_description,
      dueDate,
    };

    const ProcedureName = "updateProject";
    const params = newProject;

    await execute(ProcedureName, params);

    return res.status(200).send({ message: "Project updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: (error as Error).message,
      message: "Internal Sever Error",
    });
  }
};
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const project_id = req.params.project_id;
    if (!project_id) return res.status(400).send({ message: "Id is required" });

    const { error } = validateProjectId.validate(req.params);

    if (error)
      return res
        .status(400)
        .send({ success: false, message: "please input id" });

    const procedureName = "deleteProject";
    await execute(procedureName, { project_id });

    res.status(201).send({ message: "Project deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: (error as Error).message,
      message: "Internal Sever Error",
    });
  }
};
export const completeProject = async (req: Request, res: Response) => {
  try {
    const project_id = req.params.project_id;
    // console.log(project_id);

    if (!project_id) return res.status(400).send({ message: "Id is required" });

    const procedureName = "completeProject";
    await execute(procedureName, { project_id });

    res.status(201).send({ message: "Project completed Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: (error as Error).message,
      message: "Internal Sever Error",
    });
  }
};
export const inProgressProject = async (req: Request, res: Response) => {
  try {
    const project_id = req.params.project_id;
    // console.log(project_id);

    if (!project_id) return res.status(400).send({ message: "Id is required" });

    const procedureName = "inProgressProject";
    await execute(procedureName, { project_id });

    res.status(201).send({ message: "Project placed in Progress" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: (error as Error).message,
      message: "Internal Sever Error",
    });
  }
};
export const getProject = async (req: Request, res: Response) => {
  try {
    const project_id = req.params.project_id;
    // console.log(id);
    if (!project_id) return res.status(400).send({ message: "Id is required" });

    const { error } = validateProjectId.validate(req.params);

    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    const procedureName = "getProjectById";
    const result = await execute(procedureName, { project_id });

    res.json(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "internal server error" });
  }
};
export const getProjects = async (req: Request, res: Response) => {
  try {
    const procedureName = "getProjects";
    const result = await query(`EXEC ${procedureName}`);
    // console.log(result.recordset);

    return res.json(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "internal server error" });
  }
};
export const getAssignedProjects = async (req: Request, res: Response) => {
  try {
    const procedureName3 = "getAssignedProjects";

    const result = await query(`EXEC ${procedureName3}`);

    return res.status(200).json(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "internal server error" });
  }
};
export const assignProject = async (req: Request, res: Response) => {
  try {
    const project_id = req.body.project_id;
    const user_id = req.body.user_id;
    // console.log(project_id);

    if (!project_id)
      return res.status(400).send({ message: "project Id is required" });
    if (!user_id)
      return res.status(400).send({ message: "user Id is required" });

    const procedureName3 = "getAssignedProject";
    const params = { project_id };

    const result = await execute(procedureName3, params);
    if (result.recordset.length > 0)
      return res.status(400).send({ message: "Project already assigned" });

    const project_status = "assigned";

    const procedureName = "assignProject";
    const procedureName2 = "assignProjectStatus";
    await execute(procedureName, { project_id, user_id });
    await execute(procedureName2, { project_id, project_status });

    res.status(201).send({ message: "Project Assigned Successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "internal server error" });
  }
};
export const unassignProject = async (req: Request, res: Response) => {
  try {
    const project_id = req.body.project_id;

    console.log(project_id);

    if (!project_id)
      return res.status(400).send({ message: "project Id is required" });

    const procedureName3 = "getAssignedProject";
    const params = { project_id };

    const result = await execute(procedureName3, params);
    // console.log(result.recordset);

    if (result.recordset.length === 0)
      return res.status(400).send({ message: "Project already unassigned" });

    const project_status = "unassigned";

    const procedureName = "unAssignProject";
    const procedureName2 = "assignProjectStatus";
    await execute(procedureName, { project_id });
    await execute(procedureName2, { project_id, project_status });

    res.status(201).send({ message: "Project unassigned Successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "internal server error" });
  }
};

export const getUserAssignedProject = async (req: Request, res: Response) => {
  try {
    const user_id = req.body.user_id;
    // console.log(user_id);

    if (!user_id)
      return res.status(400).send({ message: "user Id is required" });

    const procedureName3 = "fetchAssignedProject";
    const params = { user_id };

    const result = await execute(procedureName3, params);

    // console.log({ project: result.recordset[0] });

    if (result.recordset.length === 0) {
      res.status(200).json({ project: [] });
    } else {
      res.json(result.recordset[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: "internal server error" });
  }
};
