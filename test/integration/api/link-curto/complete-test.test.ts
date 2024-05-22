describe("api/link-curto", () => {
  const randNum = Math.round(Math.random() * 1000);
  const link = `https://www.google.com/search?q=${randNum}`;
  test("create, read, and redirect", async () => {
    const { id } = await create(link);
    await read(id, link);
  });
});

async function create(link: string) {
  const response = await fetch("http://localhost:3000/api/link-curto", {
    method: "POST",
    body: JSON.stringify({
      link: link,
    }),
  });
  expect(response.status).toBe(200);
  const result = await response.json();
  expect(result.id).toBeDefined();
  expect(result.link).toBe(link);
  expect(result.slug).toBeDefined();

  return { id: result.id };
}

async function read(id: number, link: string) {
  const response = await fetch(`http://localhost:3000/api/link-curto/${id}`);
  const linkCurto = await response.json();
  expect(linkCurto.link).toBe(link);
}
