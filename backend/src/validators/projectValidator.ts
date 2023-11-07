import Joi from "joi";

export const validateProject = Joi.object().keys({
  project_name: Joi.string().required(),
  project_description: Joi.string().min(5).required(),
  dueDate: Joi.date().required(),
});

export const validateUpdateProject = Joi.object().keys({
  project_id: Joi.string().min(8).required(),
  project_name: Joi.string().required(),
  project_description: Joi.string().min(5).required(),
  dueDate: Joi.date().required(),
});
export const assignProject = Joi.object().keys({
  project_id: Joi.string().required(),
  user_id: Joi.string().required(),
});

export const validateProjectId = Joi.object().keys({
  project_id: Joi.string().min(8).required(),
  // password: Joi.string().min(8).required(),
});
