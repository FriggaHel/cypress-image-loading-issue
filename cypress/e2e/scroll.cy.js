context('Actions', () => {
  it('.visit', () => {
    cy.visit('https://smartpath.myalexandertoyota.com/inventory?dealerCd=02037&source=t3&zipcode=85365&type=new')
    cy.wait(10000);

    cy.scrollTo(0, 1000);
    cy.wait(10000);

    cy.scrollTo(0, 2000);
    cy.wait(10000);

    cy.scrollTo(0, 3000);
    cy.wait(10000);

    cy.scrollTo(0, 4000);
    cy.wait(10000);

    cy.get('div.mat-form-field-infix').click();
    cy.wait(10000);

    cy.get('#mat-option-3 > span > span').click();
    cy.wait(10000);

    cy.screenshot('03', { capture: 'fullPage' });
    cy.wait(10000);

    cy.get('app-card-container .vehicle-name').first().click().then(()=>{
      cy.get('div .vehicle-image').first().click();
    });
    cy.wait(10000);
  });
})
