context('Actions', () => {
  it('.visit', () => {
    cy.visit('https://www.toyota.com/')
    cy.wait(10000);

    cy.screenshot('02', {
      capture: 'viewport',
    });

    cy.get('button[data-aa-link-type-title="vehicles"]').first().click();
    cy.get('div[class="vehicle-wrapper"]').first().click();
    cy.wait(10000);
    cy.screenshot('03', {
      capture: 'viewport',
    });
  });
})
