import { LinkCurto } from "../entity/link-curto";
import { LinkCurtoRepository } from "../repository/link-curto.repository";

export class GetLinkCurtoByIdUseCase {
  constructor(private readonly repository: LinkCurtoRepository) {}

  async executar(id: number): Promise<LinkCurto> {
    const linkCurto = await this.repository.getById(id);
    return linkCurto;
  }
}
