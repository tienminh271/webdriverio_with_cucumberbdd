const Page = require('./Base/page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get lnkHere (){return $('div.navigationContainer a[href="/Account/LogOn"]')}
    get inputUsername () { return $('#UserName') }
    get inputPassword () { return $('#Password') }
    get btnSubmit () { return $('button#loginUser') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
