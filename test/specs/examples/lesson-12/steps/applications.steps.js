describe('Registration Page', async () => {


    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/registrace');

});

it('new registration', async () => {

    const nameField = $('#name');
    const emailField = $('#email');
    const passwordField = $('#password');
    const pswcheckfield = $('#password-confirm')
    const submitButton = $('.btn-primary');
                
        
        await nameField.setValue("Jitka Michálková");
       
        await emailField.setValue("michalkova.jitka@email.com");

        await passwordField.setValue("Heslo1234");

        await pswcheckfield.setValue("Heslo1234");

        await submitButton.click();
        
        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
console.log('User currently logged in: ' + await userNameDropdown.getText());

await expect(userNameDropdown).togetText('Jitka Michálková')
    });

it('unsuccessful registration with existing email', async () => {

    const nameField = $('#name');
    const emailField = $('#email');
    const passwordField = $('#password');
    const pswcheckfield = $('#password-confirm')
    const submitButton = $('.btn-primary');

        
        
        
        await nameField.setValue("Jitka Michálková");


        
        await emailField.setValue("da-app.admin@czechitas.cz");

      
        await passwordField.setValue("Heslo1234");

        
        await pswcheckfield.setValue("Heslo1234");

       
        await submitButton.click();
        
        const fieldError = $$('.invalid-feedback');
console.log('Field error: ' + await fieldError.getText());

await expect(fieldError).togetText("Účet s tímto emailem již existuje")
    });

it('unsuccessful registration with invalid password', async () => {

    const nameField = $('#name');
    const emailField = $('#email');
    const passwordField = $('#password');
    const pswcheckfield = $('#password-confirm')
    const submitButton = $('.btn-primary');

        
        
       
        await nameField.setValue("Jitka Michálková");

        await emailField.setValue("michalkova.jitka@email.com");

        await passwordField.setValue("1234");

        await pswcheckfield.setValue("1234");

        await submitButton.click();
        
        const fieldError = $$('.invalid-feedback');
console.log('Field error: ' + await fieldError.getText());

await expect(fieldError).togetText("Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici")

});
});