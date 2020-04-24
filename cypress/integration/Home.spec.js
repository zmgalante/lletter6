describe('(Page) Home', () => {
  it('Should contain a link to How to play page and a link to return after link', () => {
    cy.visit('/');
    cy.get('[data-test=how-to-play-link]').click();
    cy.url().should('include', '/how-to-play');

    cy.get('[data-test=go-back-home-link]').click();
    cy.url().should('include', '/');
  });
});
