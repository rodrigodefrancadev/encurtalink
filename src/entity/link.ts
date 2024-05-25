import { z } from "zod";

export namespace LinkEntity {
  export const schema = z.object({
    url: z.string().url(),
  });

  export class Link {
    public readonly url: string;

    constructor(url: string) {
      const result = schema.safeParse({ url });
      if (result.success) {
        this.url = url;
      } else {
        throw new Error("Invalid URL Link: " + url);
      }
    }
  }
}
