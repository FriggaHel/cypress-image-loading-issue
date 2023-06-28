context('Actions', () => {
  it('.visit', () => {
    cy.visit('https://smartpath.myalexandertoyota.com/inventory?dealerCd=02037&source=t3&zipcode=85365&type=new')
    cy.wait(10000);

    cy.screenshot('02');
    cy.get('div.mat-form-field-infix').click();
    cy.wait(10000);

    cy.get('#mat-option-3 > span > span').click();
    cy.screenshot('03');
    cy.get('app-card-container .vehicle-name').first().click().then(()=>{
      cy.get('div .vehicle-image').first().click();
      cy.get('.primary-button').click()
      cy.get('body > main:nth-child(1) > app-root:nth-child(1) > mat-drawer-container:nth-child(1) > mat-drawer-content:nth-child(5) > div:nth-child(3) > app-create-account:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(1) > con-textfield:nth-child(1) > div:nth-child(1) > mat-form-field:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > input:nth-child(1)').first().type("smartpathtester1@gmail.com");
      cy.get('body > main:nth-child(1) > app-root:nth-child(1) > mat-drawer-container:nth-child(1) > mat-drawer-content:nth-child(5) > div:nth-child(3) > app-create-account:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > con-textfield:nth-child(1) > div:nth-child(1) > mat-form-field:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > input:nth-child(1)').type("mickey");
      cy.get('body > main:nth-child(1) > app-root:nth-child(1) > mat-drawer-container:nth-child(1) > mat-drawer-content:nth-child(5) > div:nth-child(3) > app-create-account:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(2) > con-textfield:nth-child(1) > div:nth-child(1) > mat-form-field:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > input:nth-child(1)').type("mouse");
      cy.get('#tel').type("9849641160");
      cy.get('body > main:nth-child(1) > app-root:nth-child(1) > mat-drawer-container:nth-child(1) > mat-drawer-content:nth-child(5) > div:nth-child(3) > app-create-account:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(2) > div:nth-child(4) > con-textfield:nth-child(1) > div:nth-child(1) > mat-form-field:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > input:nth-child(1)').type("Toyota@123!");
    });
  });
})
