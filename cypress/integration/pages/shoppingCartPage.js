export default class shoppingCartPage {
    static verifySelectedProducts(products){
        products.rawTable.forEach(product => {
            cy.get(".cart_item_label a .inventory_item_name").should("include.text",product[0])
        })
    }
    static verifyShoppingCartTitle(title){
        cy.get(".title").should("have.text",title)
    }
    static clickCheckout(){
        cy.get("#checkout").click()
    }
}