export default class yourInformationPage{
    static verifyYourInformationTitle(title){
        cy.get(".title").should("have.text",title)
    }
    static enterPersonalData(data){
        cy.get("#first-name").type(data.rawTable[1][0])
        cy.get("#last-name").type(data.rawTable[1][1])
        cy.get("#postal-code").type(data.rawTable[1][2])
        cy.get("#continue").click()
    }
}