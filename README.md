# Encurtador de Links

Um sistema de encurtamento de link usando um algorótimo simples para geração dos links curtos.

### Teste o aplicativo: <a href="https://encurta.meulink.uk" _target='blank'>encurta.meulink.uk</a>

## Tecnologias

- Next.Js
- Prisma
- Postgress
- Typescript

# Descrição do Algorítimo de Encurtar

Primeiramente é criado um registro no banco de dados da entidade ShortLink. O id dessa entidade é do tipo Inteiro.

```prisma
model ShortLink {
  id Int @id @default(autoincrement())
  link String
  createdAt DateTime @default(now())
}
```

o link curto gerado segue a seguinte estrutura: https://meulink.uk/[slug]

O Slug é formado da seguinte forma: 'G' + [id do registro em hexadecimal]

```typescript
//src/entity/short-link.ts
export class ShortLink implements ShortLinkProps {
...
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
}
...
```
