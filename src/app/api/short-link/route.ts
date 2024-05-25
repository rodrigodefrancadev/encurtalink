import { UseCasesFactory } from "../../../use-cases";

export async function POST(request: Request) {
  const body = await request.json();
  const link = body.link;
  if (!link) throw new Error("Link não informado");

  const useCase = UseCasesFactory.createShortLink();
  const shortLink = await useCase.execute(link);
  return Response.json(shortLink.toJson());
}
