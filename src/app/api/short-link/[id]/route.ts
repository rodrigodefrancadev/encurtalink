import { UseCasesFactory } from "../../../../use-cases";

interface Params {
  id: string;
}

export async function GET(_: Request, { params }: { params: Params }) {
  const id = parseInt(params.id);
  const useCase = UseCasesFactory.getShortLinkById();
  const shortLink = await useCase.execute(id);
  if (!shortLink) {
    return Response.json({ message: "link não encontrado" }, { status: 404 });
  }
  return Response.json(shortLink.toJson());
}
