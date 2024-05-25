import { ShortLinkRepository } from "../repository/short-link.repository";
import { CreateShortLinkUseCase } from "./create-short-link";
import { GetShortLinkByIdUseCase } from "./get-short-link-by-id";
import { GetRedirectLinkBySlugUseCase } from "./get-redirect-link-by-slug";

export class UseCasesFactory {
  public static createShortLink() {
    const repository = new ShortLinkRepository();
    return new CreateShortLinkUseCase(repository);
  }

  public static getShortLinkById() {
    const repository = new ShortLinkRepository();
    return new GetShortLinkByIdUseCase(repository);
  }

  public static getRedirectLinkBySlug() {
    const repository = new ShortLinkRepository();
    return new GetRedirectLinkBySlugUseCase(repository);
  }
}
