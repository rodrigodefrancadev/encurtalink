describe("tests for link-curto", () => {
  test("Teste de criar link curto", async () => {
    const link = "http://www.exemplo.com";
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
    console.log(result);
  });
});
