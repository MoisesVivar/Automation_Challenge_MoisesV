import algorithms from "../../support/algorithms"

export default class homePage{
    static verifyHomePageTitle(){
        cy.get(".title").should("have.text","Products")
    }
    static clickBurgerButton(){
        cy.get("#react-burger-menu-btn").click()
    }
    static clickLogout(){
        cy.get("#logout_sidebar_link").click()
    }
    static selectFilterOption(option){
        cy.get(".product_sort_container").select(option)
    }
    static verifyDataIsSorted(option){
        cy.fixture("productInfo").then((data)=>{
            let data_Sorted = algorithms.sorting2DArray(data.products,option)
            cy.log("Verify every price order")
            cy.get(".inventory_item_price").each( (price, index) => {
                cy.wrap(price).should("have.text",data_Sorted[index][1])
            })
            cy.log("Verify every name order")
            cy.get(".inventory_item_name").each((itemName, index)=>{
                cy.wrap(itemName).should("have.text",data_Sorted[index][0])
            })
        })
    }
    static addProducts(products){
        products.rawTable.forEach(product=>{
            let buttonSelector = "button[id='add-to-cart-" + product[0].toLowerCase().replaceAll(" ","-") + "']"
            cy.get(buttonSelector).click()
        })
    }
    static selectShoppingCart(){
        cy.get(".shopping_cart_link").click()
    }
    static verifySelectedProducts(products){
        products.rawTable.forEach(product => {
            cy.get(".cart_item_label a .inventory_item_name").should("include.text",product[0])
        })
    }
}