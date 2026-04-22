describe("My first test", () => {
  it("opens a page and checks title", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.title().should("include", "OrangeHRM");
  });
});
