context('Actions', () => {
  it('.visit', () => {
    cy.visit('https://smartpath.myalexandertoyota.com/inventory?dealerCd=02037&source=t3&zipcode=85365&type=new')
    cy.wait(10000);

    cy.screenshot('02', { capture: 'runner' });
    cy.wait(10000);

    cy.get('div.mat-form-field-infix').click();
    cy.wait(10000);

    cy.get('#mat-option-3 > span > span').click();
    cy.wait(10000);

    cy.screenshot('03', { capture: 'runner' });
    cy.wait(10000);

    cy.get('app-card-container .vehicle-name').first().click().then(()=>{
      cy.get('div .vehicle-image').first().click();
    });
    cy.wait(10000);
  });
})
