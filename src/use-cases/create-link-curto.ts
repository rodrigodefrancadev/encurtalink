import { LinkCurto } from "../entity/link-curto";
import { LinkCurtoRepository } from "../repository/link-curto.repository";

export class CreateLinkCurtoUseCase {
  constructor(private readonly repository: LinkCurtoRepository) {}

  async executar(link: string): Promise<LinkCurto> {
    const linkCurto = await this.repository.create(link);
    return linkCurto;
  }
}
