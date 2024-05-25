import { PrismaClient, ShortLink as ShortLinkDb } from "@prisma/client";
import { ShortLink } from "../entity/short-link";
import prisma from "../server/db";

export class ShortLinkRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async create(link: string): Promise<ShortLink> {
    const shortLinkDb = await this.prisma.shortLink.create({
      data: {
        link,
      },
    });

    const shortLink = this.shortLinkDbToShortLink(shortLinkDb);
    return shortLink;
  }

  async getById(id: number): Promise<ShortLink> {
    const shortLinkDb = await this.prisma.shortLink.findUnique({
      where: {
        id,
      },
    });
    const shortLink = this.shortLinkDbToShortLink(shortLinkDb);
    return shortLink;
  }

  async getBySlug(slug: string): Promise<ShortLink> {
    const id = ShortLink.decodeSlug(slug);
    return await this.getById(id);
  }

  private shortLinkDbToShortLink(shortLinkDb: ShortLinkDb): ShortLink {
    const shortLink = new ShortLink({
      id: shortLinkDb.id,
      link: shortLinkDb.link,
      createdAt: shortLinkDb.createdAt,
    });

    return shortLink;
  }
}
