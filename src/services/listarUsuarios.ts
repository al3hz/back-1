import { getManager } from "typeorm";
import { User } from "../entity/users";

export class ListarUsuarios {
  private manager = getManager();

  public async execute() {
    const usuarios = await this.manager.find(User);
    return usuarios;
  }
}
