import { LenderGetExtendedArray } from '../../components/utility/LenderExtendArray';
import { typeInEachInput } from './utilities';

context('Lender Form ', () => {
  let lenderData;
  before(() => {
    const host = Cypress.config()['host'];
    cy.visit(host);

    cy.fixture('lenders').then((lender: LenderFixture) => {
      lenderData = lender;
    });
  });

  it('will check if form is submitted', () => {
    lenderData.forEach((lender: LenderFixture) => {
      
      cy.get(`[data-testid="${lender.slug}"]`).as('lenderLink');
      cy.get('@lenderLink').click();

      cy.request(`/api/lenders/${lender.slug}`).then((response) => {
        let questions = response.body.fields;
        if (lender.slug === 'bank-of-azeroth') {
          // map string values to object type
          questions = LenderGetExtendedArray(questions)
        }

        typeInEachInput(questions)
      });

      cy.get('form').submit();
      cy.get('[role="alert"]')
        .should('be.visible');
      cy.get('a').should('be.visible').click();
    });
  });
});