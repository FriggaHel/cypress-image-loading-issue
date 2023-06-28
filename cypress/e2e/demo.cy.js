context('Actions', () => {
  it('.visit', () => {
    cy.visit('https://duckduckgo.com/?va=v&t=ha&q=Tacoma&iax=images&ia=images')

    cy.screenshot('02', {
      capture: 'viewport',
    });
    cy.get('div > span > img').first().click();

    cy.get('div > span > img').eq(2).click();
    cy.screenshot('03', {
      capture: 'viewport',
    });
  });
})
