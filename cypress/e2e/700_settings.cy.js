describe('load homepage', () => {
  it('checks tabs', () => {
    cy.intercept('http://localhost:5000/wifi/v1/connection_status', (req) => {
      req.reply({"wifi": false, "internet": true})
    })
    cy.intercept('http://localhost:5000/wifi/v1/list_access_points', (req) => {
      req.reply({"ssids": [{"ssid": "wifi-home", "conn_type": "WPA2", "strength": 99}]})
    })
    cy.visit('http://localhost:8080')
    cy.get('.v-carousel').should('exist')
    cy.get('button.v-app-bar-nav-icon').should('exist').click()
    cy.get('a.v-list-item[href*="/settings"]').click()
    cy.get('#app').click()
    cy.get('button#0').should('exist')
    cy.get('button#1').should('exist')
    cy.get('button#2').should('exist')
    cy.get('button#3').should('exist')
    cy.get('button#4').should('exist')
    cy.get('button#5').should('exist')
    cy.get('button#6').should('exist')
    cy.get('button#7').should('exist')
    cy.get('button#8').should('exist')
  })

  it('checks password', () => {
    cy.intercept('http://localhost:5000/wifi/v1/connection_status', (req) => {
      req.reply({"wifi": false, "internet": true})
    })
    cy.intercept('http://localhost:5000/wifi/v1/list_access_points', (req) => {
      req.reply({"ssids": [{"ssid": "wifi-home", "conn_type": "WPA2", "strength": 99}]})
    })
    cy.visit('http://localhost:8080')
    cy.get('.v-carousel').should('exist')
    cy.get('button.v-app-bar-nav-icon').should('exist').click()
    cy.get('a.v-list-item[href*="/settings"]').click()
    cy.get('#app').click()
    cy.get('button#0').should('exist')
    cy.get('button#0').click()
    cy.get('#settings_password').type('secret')
    cy.get('#save').should('exist')
    cy.get('#save').click()
    cy.visit('http://localhost:8080')
    cy.get('.v-carousel').should('exist')
    cy.get('button.v-app-bar-nav-icon').should('exist').click()
    cy.get('a.v-list-item[href*="/settings"]').click()
    cy.get('#settings_password_verify').should('exist')
    cy.get('#settings_password_verify').type('secret')
    cy.get('#settings_password_verify_ok').click()
    cy.get('button#0').should('exist')
  })
})