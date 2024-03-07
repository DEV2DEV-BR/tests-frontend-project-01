describe("Testa a página de Dashboard", () => {
  it("Deve carregar uma lista com 3 pokemons", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.contains("Pikachu");
    cy.contains("Rotom");
    cy.contains("Charmander");
  });

  it("Quando clicar em um pokemon deve abrir a página de detalhes", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemon-detail.json",
    });

    cy.contains("Pikachu").click();
    cy.contains("Voltar");
  });

  it("Quando clicar em um pokemon deve abrir a página de detalhes e depois voltar para a listagem de 3 pokemons", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemon-detail.json",
    });

    cy.contains("Pikachu").click();
    cy.contains("Voltar").click();

    cy.contains("Pikachu");
    cy.contains("Rotom");
    cy.contains("Charmander");
  });

  it("Quando clicar em um pokemon deve abrir a página de detalhes e depois voltar para a listagem de 3 pokemons", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.get("div").find("ul").should("have.css", "display").and("match", /grid/);
  });

  it("Devem haver 3 pokemons na tela com li's", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.get("div")
      .find("li")
      .should(($li) => {
        expect($li).to.have.length(3);

        const pikachu = $li[0];
        const rotom = $li[1];
        const charmander = $li[2];

        expect(pikachu.textContent).to.contain("Pikachu");
        expect(rotom.textContent).to.contain("Rotom");
        expect(charmander.textContent).to.contain("Charmander");
      });
  });
});
