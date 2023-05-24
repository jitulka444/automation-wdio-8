import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        const loginButton = $ ('.btn-primary');
        await loginButton.click();

        
        const emailField = $('#email');
        await emailField.setValue('da-app.admin@czechitas.cz');

        const passwordField = $ ('#password');
        await passwordField.setValue('123');

        await loginButton.click();

        const fieldError = $('.invalid-feedback');
        console.log('Field error: ' + await fieldError.getText());


        const emailField = $('#email');
        await emailField.setValue('da-app.admin@czechitas.cz');

        const passwordField = $ ('#password');
        await passwordField.setValue('Czechitas123');

        const loginbutton = $ ('.btn-primary');
        await loginbutton.click();

        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
        console.log('User currently logged in: ' + await userNameDropdown.getText());

        await $('=Přihlášky').click();

        const rows = await $('.dataTable').$('tbody').$$('tr');
        console.log('There are ' + rows.length + ' rows in the table');
        for (const row of rows) {
            const rowText = await row.getText()
            console.log(rowText);
        }
        






        

    });

});
