import { LinkEntity } from "../entity/link";
import { ShortLink } from "../entity/short-link";
import { ShortLinkRepository } from "../repository/short-link.repository";

export class CreateShortLinkUseCase {
  constructor(private readonly repository: ShortLinkRepository) {}

  async execute(link: string): Promise<ShortLink> {
    const shortLink = await this.repository.create(new LinkEntity.Link(link));
    return shortLink;
  }
}
