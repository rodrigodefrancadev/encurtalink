import { LinkCurto } from "../entity/link-curto";
import { LinkCurtoRepository } from "../repository/link-curto.repository";

export class GetLinkCurtoBySlugUseCase {
  constructor(private readonly repository: LinkCurtoRepository) {}

  async executar(slug: string): Promise<LinkCurto> {
    const linkCurto = await this.repository.getBySlug(slug);
    return linkCurto;
  }
}
