export default class homePage{
    static assertHomePageTitle(){
        cy.get(".title").should("have.text","Products")
    }
}