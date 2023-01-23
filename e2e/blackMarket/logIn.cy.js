describe("log in successful", () => {
    it("put log on form", () => {
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");
        cy.contains("C'est OK pour moi").click();
        cy.get("#signin-email").type("abcds@gmail.com");
        cy.get("#signin-password").type("abW2ESDSAcd");
        cy.contains("Welcome Back").click();
    });
});
