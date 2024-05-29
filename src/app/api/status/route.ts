import prisma from "../../../server/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const count = await prisma.shortLink.count();
  return Response.json({ alive: true, total: count });
}
