const LoginPage = require('../../pageobjects/login.page');
const LandingPage = require('../../pageobjects/landing.page');
//const SecurePage = require('../../pageobjects/secure.page');
import should from 'chai';

describe('Login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('pmt1', '1');
        await LandingPage.grdTodo.should.toBeExisting();
        //await LandingPage.getTitle().should.c
    });
});


