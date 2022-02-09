/**
 * rolse gurds
 * @author hotel managements
 */

import { SetMetadata } from "@nestjs/common";
import { Role } from "../roles/role";
/**
 * rolse gurads
 * @author Md Nasir Hussain
 */
 export const ROLES_KEY = 'roles';
 /**
  * check roles type here
  * @param roles path
  * @returns if success or failur
  */
 export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);