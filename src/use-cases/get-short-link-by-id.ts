import { ShortLink } from "../entity/short-link";
import { ShortLinkRepository } from "../repository/short-link.repository";

export class GetShortLinkByIdUseCase {
  constructor(private readonly repository: ShortLinkRepository) {}

  async execute(id: number): Promise<ShortLink | null> {
    const shortLink = await this.repository.getById(id);
    return shortLink;
  }
}
