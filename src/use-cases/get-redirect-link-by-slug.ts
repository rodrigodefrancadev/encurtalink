import { ShortLinkRepository } from "../repository/short-link.repository";

export class GetRedirectLinkBySlugUseCase {
  constructor(private readonly repository: ShortLinkRepository) {}

  async execute(slug: string): Promise<string> {
    const shortLink = await this.repository.getBySlug(slug);
    if (shortLink) {
      return shortLink.link.url;
    } else {
      return `/404?slug=${slug}`;
    }
  }
}
