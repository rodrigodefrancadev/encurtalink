import { redirect } from "next/navigation";
import { UseCasesFactory } from "../../use-cases";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const useCase = UseCasesFactory.getRedirectLinkBySlug();
  const redirectLink = await useCase.execute(params.slug);
  return redirect(redirectLink);
}
