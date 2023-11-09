export interface Project {
    project_id: string;
    project_name: string;
    project_description: string;
    dueDate: string;
    assignedUsers?: string[];
  }
  
  export interface User {
    user_id: string;
    username: string;
  }
  