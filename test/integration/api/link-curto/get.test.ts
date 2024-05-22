describe("get api/link-curto", () => {
  test("success", async () => {
    const response = await fetch("http://localhost:3000/api/link-curto/2");
    const linkCurto = await response.json();
    expect(linkCurto).toHaveProperty("link");
  });
});
