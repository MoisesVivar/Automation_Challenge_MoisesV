export default class completePage{
    static verifyCompleteTitle(title){
        cy.get(".title").should("have.text",title)
    }
}