describe("Testa a página de Sign Up", () => {
  it("Quando clicar em 'Já tem cadastro...' deve ir para tela de login", () => {
    cy.visit("/sign-up");

    cy.contains("Já tem cadastro? Clique aqui!").click();
    cy.contains("Login");
  });

  it("O botão deve ter 10px de margin top", () => {
    cy.visit("/sign-up");

    cy.get("div")
      .find("button")
      .should("have.css", "marginTop")
      .and("match", /10px/);
  });
});
