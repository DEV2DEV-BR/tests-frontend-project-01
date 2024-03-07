describe("Testa a página de login", () => {
  it("Quando clicar em login deve ir para a página de Dashboard", () => {
    cy.visit("/");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.get("button").click();

    // cy.get("div")
    //   .find("button")
    //   .should(($button) => {
    //     expect($button).to.have.length(2);

    //     $button[1].click();
    //   })
    //   .then(() => {
    //     cy.contains("Dashboard");
    //   });
  });

  it("Quando clicar em login deve ir para a página de Dashboard e ter um pokemon Pikaxu", () => {
    cy.visit("/");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.get("button").click();
    cy.contains("Dashboard");
    cy.contains("Pikachu");
  });

  it("Quando clicar em Sign Up deve ir para a página de cadastro", () => {
    cy.visit("/");

    cy.contains("Não tem cadastro? Clique aqui!").click();
    cy.contains("Cadastre-se");
  });

  it("O botão deve ter 10px de margin top", () => {
    cy.visit("/sign-up");

    cy.get("div")
      .find("button")
      .should("have.css", "marginTop")
      .and("match", /10px/);
  });
});
