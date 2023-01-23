import { faker } from "@faker-js/faker";

function genPassword() {
    let chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
}
describe("register successful", () => {
    it("regist with success", () => {
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");
        cy.contains("C'est OK pour moi").click();
        cy.get("#firstName").type(faker.name.firstName());
        cy.get("#lastName").type(faker.name.lastName());
        cy.get("#signup-email").type(faker.internet.email());
        cy.get("#signup-password").type(genPassword());
        cy.contains("Enchantés !").click();
    });
});
