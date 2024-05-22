import { LinkCurtoRepository } from "../repository/link-curto.repository";

export class GetRedirectLinkBySlugUseCase {
  constructor(private readonly repository: LinkCurtoRepository) {}

  async executar(slug: string): Promise<string> {
    const linkCurto = await this.repository.getBySlug(slug);
    if (linkCurto) {
      return linkCurto.link;
    } else {
      return `/404?slug=${slug}`;
    }
  }
}
