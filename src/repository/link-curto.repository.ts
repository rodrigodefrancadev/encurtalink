import { PrismaClient, LinkCurto as LinkCurtoDb } from "@prisma/client";
import { LinkCurto } from "../entity/link-curto";

export class LinkCurtoRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(link: string): Promise<LinkCurto> {
    const linkCurtoDb = await this.prisma.linkCurto.create({
      data: {
        link,
      },
    });

    const linkCurto = this.linkCurtoDbToLinkCurto(linkCurtoDb);
    return linkCurto;
  }

  async getById(id: number): Promise<LinkCurto> {
    const linkCurtoDb = await this.prisma.linkCurto.findUnique({
      where: {
        id,
      },
    });
    const linkCurto = this.linkCurtoDbToLinkCurto(linkCurtoDb);
    return linkCurto;
  }

  async getBySlug(slug: string): Promise<LinkCurto> {
    const id = LinkCurto.decodeSlug(slug);
    return await this.getById(id);
  }

  private linkCurtoDbToLinkCurto(linkCurtoDb: LinkCurtoDb): LinkCurto {
    const linkCurto = new LinkCurto({
      id: linkCurtoDb.id,
      link: linkCurtoDb.link,
      criadoEm: linkCurtoDb.criadoEm,
    });

    return linkCurto;
  }
}
