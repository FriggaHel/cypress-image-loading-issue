context('Actions', () => {
  it('.visit', () => {
    cy.visit('https://duckduckgo.com/?va=v&t=ha&q=Tacoma&iax=images&ia=images')
    cy.wait(10000);

    cy.screenshot('02', {
      capture: 'viewport',
    });
    cy.get('div > span > img').first().click();
    cy.wait(10000);

    cy.get('div > span > img').eq(2).click();
    cy.screenshot('03', {
      capture: 'viewport',
    });
    cy.wait(10000);
  });
})
