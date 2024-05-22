import { PrismaClient } from "@prisma/client";

interface Params {
  id: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  console.log(params);
  const id = parseInt(params.id);
  const prisma = new PrismaClient();
  const linkCurto = await prisma.linkCurto.findUnique({
    where: {
      id,
    },
  });
  if (!linkCurto) {
    return Response.json({ message: "link não encontrado" }, { status: 404 });
  }
  return Response.json(linkCurto);
}
