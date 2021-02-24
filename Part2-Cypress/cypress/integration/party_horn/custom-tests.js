describe('Party Horn Tests', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
    });

    it('First Test', () => {
        expect(true).to.equal(true);
    });

    it('Slider changes when volume input changes', () => {
        cy.get("#volume-number").clear().type("75");
        cy.get('#volume-slider')
            .then(function($el) {
                expect($el).to.have.value(75);
            })

    });


    it('Volume input changes when slider changes', () => {
        cy.get('#volume-slider').invoke('val', 33).trigger('input');
        cy.get("#volume-number")
            .then(function($el) {
                expect($el).to.have.value(33);
            })

    });

    it('actual volume change when slider changes', () => {
        cy.get('#volume-slider').invoke('val', 33).trigger('input');
        cy.get("#horn-sound")
            .then(function($el) {
                expect($el).to.have.prop("volume", 0.33);
            })

    });

    it('Air horn image changes when selected', () => {
        cy.get("#radio-air-horn").click();
        cy.get("#sound-image")
            .then(function($el) {
                expect($el).to.have.prop("src", "http://127.0.0.1:5500/Part2-Cypress/assets/media/images/air-horn.svg");
            })

    });

    it('Car horn image changes when selected', () => {
        cy.get("#radio-car-horn").click();
        cy.get("#sound-image")
            .then(function($el) {
                expect($el).to.have.prop("src", "http://127.0.0.1:5500/Part2-Cypress/assets/media/images/car.svg");
            })

    });

    it('party horn image changes when selected', () => {
        cy.get("#radio-party-horn").click();
        cy.get("#sound-image")
            .then(function($el) {
                expect($el).to.have.prop("src", "http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg");
            })

    });

    it('Air horn sound changes when selected', () => {
        cy.get("#radio-air-horn").click();
        cy.get("#horn-sound")
            .then(function($el) {
                expect($el).to.have.prop("src", "http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/air-horn.mp3");
            })

    });

    it('car horn sound changes when selected', () => {
        cy.get("#radio-car-horn").click();
        cy.get("#horn-sound")
            .then(function($el) {
                expect($el).to.have.prop("src", "http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/car-horn.mp3");
            })

    });

    it('party horn sound changes when selected', () => {
        cy.get("#radio-party-horn").click();
        cy.get("#horn-sound")
            .then(function($el) {
                expect($el).to.have.prop("src", "http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3");
            })

    });

    it('volume image change for sound level 3', () => {
        cy.get("#volume-number").clear().type("75");
        cy.get('#volume-image')
            .then(function($el) {
                expect($el).to.have.prop("src", "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg");
            })

    });


    it('volume image change for sound level 2', () => {
        cy.get("#volume-number").clear().type("50");
        cy.get('#volume-image')
            .then(function($el) {
                expect($el).to.have.prop("src", "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg");
            })

    });


    it('volume image change for sound level 1', () => {
        cy.get("#volume-number").clear().type("20");
        cy.get('#volume-image')
            .then(function($el) {
                expect($el).to.have.prop("src", "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg");
            })

    });

    it('volume image change for sound level 0', () => {
        cy.get("#volume-number").clear().type("0");
        cy.get('#volume-image')
            .then(function($el) {
                expect($el).to.have.prop("src", "http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg");
            })

    });


    it('honk botton diasbaled for empty sound', () => {
        cy.get("#volume-number").clear().type("0");
        cy.get('#honk-btn')
            .then(function($el) {
                expect($el).to.have.attr("disabled", "disabled");
            })

    });

    it('honk botton diasbaled for type non-number', () => {
        cy.get("#volume-number").clear().type("a");
        cy.get('#honk-btn')
            .then(function($el) {
                expect($el).to.have.attr("disabled", "disabled");
            })

    });


    it('error occured when type number < 0', () => {
        cy.get("#volume-number").clear().type("-1");
        cy.get('#honk-btn').click();
        cy.get('input:invalid').should('have.length', 1);

    });


    it('error occured when type number > 100', () => {
        cy.get("#volume-number").clear().type("120");
        cy.get('#honk-btn').click();
        cy.get('input:invalid').should('have.length', 1);

    });


});