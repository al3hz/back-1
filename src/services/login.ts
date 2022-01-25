import { getManager } from "typeorm";
import { User } from "../entity/users";

type Payload = {
  username: string;
  password: string;
};

export class Login {
  private manager = getManager();

  public async buscarUsuario(payload: Payload) {
    const usuarios = await this.manager.findOne(User, {
      where: { username: payload.username, password: payload.password },
    });

    return usuarios;
  }
}
