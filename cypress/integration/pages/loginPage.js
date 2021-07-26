export default class loginPage{
    static typeUsername(username){
        cy.get("#user-name").type(username)
    }
    static typePassword(password){
        cy.get("#password").type(password)
    }
    static clickLogin(){
        cy.get("#login-button").click()
    }
    static assertingErrorMessage(message){
        cy.get("h3[data-test='error']").should("have.text",message).and("be.visible")
    }
}