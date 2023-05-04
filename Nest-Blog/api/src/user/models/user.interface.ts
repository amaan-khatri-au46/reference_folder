// TypeScript interfaces are used for type-checking and defining the types of data that can be passed to a controller or a Nest service.
// This Type of role is their now depending on the guard that whether its admin or not or any thing we can choose an authorized the user... 
export enum UserRole {
  ADMIN = 'admin',
  CHIEFEDITOR = 'chiefeditor',
  EDITOR = 'editor',
  USER = 'user',
}

export interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  role?: UserRole;
}
