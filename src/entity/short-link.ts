import { LinkEntity } from "./link";

interface ShortLinkProps {
  id: number;
  link: LinkEntity.Link;
  createdAt: Date;
}

export class ShortLink implements ShortLinkProps {
  public readonly id: number;
  public readonly link: LinkEntity.Link;
  public readonly createdAt: Date;
  public get slug(): string {
    return this.generateSlug();
  }

  constructor(props: ShortLinkProps) {
    this.id = props.id;
    this.link = props.link;
    this.createdAt = props.createdAt;
  }

  private generateSlug() {
    return "G" + this.id.toString(16);
  }

  public static decodeSlug(slug: string) {
    if (!slug.startsWith("G")) {
      throw new Error("Invalid Slug");
    }

    const hex = slug.substring(1);
    const id = parseInt(hex, 16);

    return id;
  }

  public toJson() {
    return {
      id: this.id,
      link: this.link.url,
      slug: this.generateSlug(),
      createdAt: this.createdAt.toISOString(),
    };
  }
}
