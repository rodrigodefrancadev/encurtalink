import { PrismaClient } from "@prisma/client";
import { UseCasesFactory } from "../../../use-cases";

export async function POST(request: Request) {
  const body = await request.json();
  const link = body.link;
  if (!link) throw new Error("Link não informado");

  const useCase = UseCasesFactory.createLinkCurto();
  const linkCurto = await useCase.executar(link);
  return Response.json(linkCurto.toJson());
}
