describe('Test search is working', () => {
  it('get search string and type "Some text" and get no films', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.input-0-2-11')
      .focus()
      .type('Some text', { delay: 100 })
      .type('{enter}');

    cy.contains('No films found');
  });

  it('get search string and type "Kill" and get 2 films', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.input-0-2-11').focus().type('Kill', { delay: 100 });

    cy.get('.searchContainer-0-2-9 > .button-0-2-12').click();

    cy.get('.filmList-0-2-18')
      .find('.filmTile-0-2-20')
      .should('have.length', 2);
  });
});
