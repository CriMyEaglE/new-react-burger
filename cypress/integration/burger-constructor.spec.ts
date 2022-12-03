export { }

describe('service is available', () => {
   beforeEach(() => {
      cy.viewport(1920, 1024)
   });

   it('should be available localhost:3000', () => {
      cy.visit('/')
   });

   it('should open ingredient details', () => {
      cy.get('[class^=bun]').wait(500).first().click()
   });

   it('should close ingredient details by button', () => {
      cy.get('[class^=modal_close_icon]').wait(500).click();
      cy.visit('/');
   });

   it('should tab', () => {
      for (let i = 2; i > 0; i--) {
         cy.get('[class^=tab').last().wait(500).click();
         cy.get('[class^=tab').eq(i).wait(500).click();
      }
   })

   it('should scroll', () => {
      cy.wait(500).get('[class^=bruger-ingredients_scroll').scrollTo(0, 1000).wait(500)
   });

   it('should dragndrop ingredients', () => {
      for (let i = 0; i <= 1; i++) {
         cy.get('[class^=bun]').eq(i).drag('[class^=burger-constructor_scroll]')
      }
      for (let i = 0; i <= 3; i++) {
         cy.get('[class^=sauce]').eq(i).drag('[class^=burger-constructor_scroll]')
      }
      for (let i = 0; i <= 8; i++) {
         cy.get('[class^=main]').eq(i).drag('[class^=burger-constructor_scroll]')
      }
   })

   it('should dragndrop constructor-container', () => {
      cy.get('[class^=burger-item_container]').eq(0)
         .drag('[class^=burger-constructor_scroll]')
      cy.get('[class^=burger-item_container]').eq(1)
         .drag('[class^=burger-constructor_scroll]')
   })

   it('should delete constructor-element from constructor-container', () => {
      cy.get('[class^=constructor-element__action]').eq(1).click()
      cy.get('[class^=constructor-element__action]').eq(1).click()
      cy.get('[class^=constructor-element__action]').eq(1).click()
   })

   it('should open ingredients detail', () => {
      cy.get('button').contains('Оформить заказ').click()
   });

   it('should autorization', () => {
      const email = 'qw@qw.qw';
      const password = 'qwqwqw';
      cy.get('input').first().type(email)
      cy.get('input').last().type(password)
      cy.get('button').click();
   })

   it('should open ingredients detail', () => {
      cy.wait(1000).get('button').contains('Оформить заказ').click()
   });

   it('should close order details by button', () => {
      cy.wait(16000).get('[class^=modal_close_icon]').click();
      cy.get('[class^=constructor-element]').and('not.exist');
   });
})

