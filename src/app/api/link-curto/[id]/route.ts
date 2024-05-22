import { PrismaClient } from "@prisma/client";
import { UseCasesFactory } from "../../../../use-cases";

interface Params {
  id: string;
}

export async function GET(_: Request, { params }: { params: Params }) {
  const id = parseInt(params.id);
  const useCase = UseCasesFactory.getLinkCurtoById();
  const linkCurto = await useCase.executar(id);
  if (!linkCurto) {
    return Response.json({ message: "link não encontrado" }, { status: 404 });
  }
  return Response.json(linkCurto.toJson());
}
