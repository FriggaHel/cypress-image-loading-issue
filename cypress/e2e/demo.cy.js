context('Actions', () => {
  it('.visit', () => {
    cy.visit('https://www.toyota.com/')
    cy.wait(10000);

    cy.screenshot('02', {
      capture: 'fullPage',
    });
    cy.wait(10000);
  });
})
