describe("my-app", () =>{
    beforeEach(() =>
    { 

      cy.visit("http://localhost:3000/")
    })

  const textInput = () => cy.get("input[name=username]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const tosChecked = () => cy.get("input[name=checkedBox]");
  const submitBtn = () => cy.get("input[id=submitBtn]");

 it("elements test", () => {
 textInput().should("exist");
 emailInput().should("exist");
 passwordInput().should("exist");
 tosChecked().should("exist");
 submitBtn().should("exist");

 }) 


 describe("navigate and check required", () => {
    it("can navigate to site", () => {
        cy.url().should("include", "localhost")
    });
    it("check inputText fields", () => {
        textInput()
           .should("have.value", "")
           .type("lorem ipsum")
           .should("have.value", "lorem ipsum");
         })
    
    it("check for vailed email", () => {
        emailInput()
            .should("have.value", "")
            .type("email@email.com")
            .should("have.value", "email@email.com")
    })
    it("check for valid password", () => {
        passwordInput()
            .should("have.value", "")
            .type("12345678")
            .should("have.value", "12345678")
    })

    

    it("tos checked", () => {
        tosChecked()
            cy.get('[type="checkbox"]').check()
            .should("not.be.false")
    })

    
    




 })















})





















