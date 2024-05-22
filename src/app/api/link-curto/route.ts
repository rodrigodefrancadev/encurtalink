import { PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const link = body.link;
  if (!link) throw new Error("Link não informado");

  const prisma = new PrismaClient();

  const linkCurto = await prisma.linkCurto.create({
    data: {
      link,
    },
  });
  return Response.json(linkCurto);
}
