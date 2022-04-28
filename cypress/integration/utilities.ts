import { LenderFields } from './../../lib/types/index';

const mockAnswers = {
    text: 'xyz',
    email: 'test@gmail.com',
    date: '12-02-1995',
    number: 10,
    select: 'opt1',
    checkbox: true
};


export const typeInEachInput = (questions: Array<LenderFields>) => {
    questions.forEach((question) => {
        const type = question.type
        if (type === 'select') {
            cy.get(`[data-testid="${question.name}"]`).click()
            cy.get('[role="option"]').eq(0).click()
        }
        else if (type === 'email')
            cy.get(`[data-testid="${question.name}"]`).should('be.visible').type(mockAnswers[type])
        else if (type === 'checkbox' || type === 'date' || type === 'number')
            cy.get(`[data-testid="${question.name}"]`).should('be.visible')
        else
            cy.get(`[data-testid="${question.name}"]`).should('be.visible').type(mockAnswers[type])
    });
}