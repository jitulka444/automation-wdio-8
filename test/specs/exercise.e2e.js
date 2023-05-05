import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

 const formTagSelector = $('form');
        console.log(await formTagSelector.getHTML());

        const inputTagSelector = $('input');
        console.log(await inputTagSelector.getHTML());

        const buttonTagSelector = $('button');
        console.log(await buttonTagSelector.getHTML());

        

    });

});
