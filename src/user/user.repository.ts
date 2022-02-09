import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
/**
 * user repository class responsible for crude opretion
 * @author Md Nasir Hussain
 */
@EntityRepository(User)
export class UserRepository extends Repository<User>{}