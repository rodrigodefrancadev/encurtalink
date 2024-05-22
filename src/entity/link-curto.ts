interface LinkCurtoProps {
  id: number;
  link: string;
  criadoEm: Date;
}

export class LinkCurto implements LinkCurtoProps {
  public readonly id: number;
  public readonly link: string;
  public readonly criadoEm: Date;
  public get slug(): string {
    return this.generateSlug();
  }

  constructor(props: LinkCurtoProps) {
    this.id = props.id;
    this.link = props.link;
    this.criadoEm = props.criadoEm;
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
      link: this.link,
      slug: this.generateSlug(),
      criadoEm: this.criadoEm.toISOString(),
    }
  }
}
