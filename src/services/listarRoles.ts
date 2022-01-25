import { getManager } from "typeorm";
import { Roles } from "../entity/roles";

export class ListarRoles {
  private manager = getManager();

  public async execute() {
    const roles = await this.manager.find(Roles);
    return roles;
  }
}
