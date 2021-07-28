export default class overviewPage{
    static verifyOverviewTitle(title){
        cy.get(".title").should("have.text",title)
    }
    static clickFinish(){
        cy.get("#finish").click()
    }
}