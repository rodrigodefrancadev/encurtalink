test("get api/status with success", async () => {
  const response = await fetch("http://localhost:3000/api/status");
  expect(response.status).toBe(200);
});
