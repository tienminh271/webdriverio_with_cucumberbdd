const Page = require('../pageobjects/Base/page');

class LandingPage extends Page{
    /**
     * define selectors using getter methods
     */
    get grdTodo(){return $('div#TodoGrid')}

    
}