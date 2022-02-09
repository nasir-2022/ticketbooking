import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../role/roles.decorator";
import { Role } from "../roles/role";
/**
 * rolse guards
 * @author guards
 */
@Injectable()
export  class RolesGuard implements CanActivate{
  /**
   * injectable reflectore
   * @param reflectore path
   */
    constructor(private reflectore:Reflector){}
    /**
     * can activate methods
     * @param context path
     * @returns if success or failure
     */
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
         /**
     * requiredRoles
     */
    const requiredRoles = this.reflectore.getAllAndOverride<Role[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      /**
       * checking rolse
       */
      if (!requiredRoles) {
        return true;
      }
      /**
       * user role
       */
      const { user } = context.switchToHttp().getRequest();
      /**
       * return roles
       */
      return requiredRoles.some((role) => user.role?.includes(role));
    }
    }
    
