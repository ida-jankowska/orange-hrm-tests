describe("Dog API tests", () => {
  it("should get random dog image", () => {
    cy.request("https://dog.ceo/api/breeds/image/random").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.status).to.eq("success");
      expect(res.body.message).to.include("https://images.dog.ceo");
    });
  });

  it("should get list of all breeds", () => {
    cy.request("https://dog.ceo/api/breeds/list/all").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.status).to.eq("success");
      expect(res.body.message).to.have.property("bulldog");
    });
  });

  it("should get random image for specific breed", () => {
    cy.request("https://dog.ceo/api/breed/hound/images/random").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.status).to.eq("success");
      expect(res.body.message).to.include("hound");
    });
  });
});
