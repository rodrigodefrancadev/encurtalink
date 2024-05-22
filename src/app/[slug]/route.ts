import { redirect } from "next/navigation";
import { LinkCurtoRepository } from "../../repository/link-curto.repository";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const repository = new LinkCurtoRepository();
  try {
    const linkCurto = await repository.getBySlug(params.slug);
    return Response.redirect(linkCurto.link);
  } catch {
    return redirect(`/404?slug=${params.slug}`);
  }
}
