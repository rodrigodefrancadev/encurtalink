import { LinkCurtoRepository } from "../repository/link-curto.repository";
import { CreateLinkCurtoUseCase } from "./create-link-curto";
import { GetLinkCurtoByIdUseCase } from "./get-link-curto-by-id";
import { GetRedirectLinkBySlugUseCase } from "./get-redirect-link-by-slug";

export class UseCasesFactory {
  public static createLinkCurto() {
    const repository = new LinkCurtoRepository();
    return new CreateLinkCurtoUseCase(repository);
  }

  public static getLinkCurtoById() {
    const repository = new LinkCurtoRepository();
    return new GetLinkCurtoByIdUseCase(repository);
  }

  public static getRedirectLinkBySlug() {
    const repository = new LinkCurtoRepository();
    return new GetRedirectLinkBySlugUseCase(repository);
  }
}
