import { PrismaClient } from "@prisma/client";

export async function GET() {
  const prisma = new PrismaClient();
  const count = await prisma.linkCurto.count();
  return Response.json({ alive: true, total: count });
}
