import { faker } from "@faker-js/faker";

function genPassword() {
    let chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 5;
    let password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
}

describe("register with failure", () => {
    it("expect error on password", () => {
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");

        cy.contains("C'est OK pour moi").click();
        cy.get("#firstName").type(faker.name.firstName());
        cy.get("#lastName").type(faker.name.lastName());
        cy.get("#signup-email").type(faker.internet.email());
        cy.get("#signup-password").type(genPassword());
        cy.contains("Enchantés !").click();
        cy.contains(
            "Au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre. Parce qu'on sait jamais."
        );
    });
});
