describe('Registration Page', async () => {


    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/registrace');

});

it('do new registration', async () => {

    const nameField = $('#name');
    const emailField = $('#email');
    const passwordField = $('#password');
    const pswcheckfield = $('#password-confirm')
    const submitButton = $('.btn-primary');
                
        
        await nameField.setValue('Ja Ja');
       
        await emailField.setValue('jaja4486@email.com');

        await passwordField.setValue('Heslo1234');

        await pswcheckfield.setValue('Heslo1234');

        await submitButton.click();
        
        const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
console.log('User currently logged in: ' + await userNameDropdown.getText());

await expect(userNameDropdown).togetText('Ja Ja')
    });

it('unsuccessful registration with existing email', async () => {

    const nameField = $('#name');
    const emailField = $('#email');
    const passwordField = $('#password');
    const pswcheckfield = $('#password-confirm')
    const submitButton = $('.btn-primary');
    const fieldError = $('.invalid-feedback');
    const toastMessage = $('.toast-message');
        
        
        
        await nameField.setValue('Beruska');


        
        await emailField.setValue('redbar@seznam.cz');

      
        await passwordField.setValue('Heslo12345');

        
        await pswcheckfield.setValue('Heslo12345');

       
        await submitButton.click();
        
        


    await expect(fieldError).togetText("Účet s tímto emailem již existuje")

    await expect(await toastMessage.getText()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');

    await expect(await passwordField).toBeDisplayed();
    await expect(await passwordControlField).toBeDisplayed();
    await expect(await registrationButton).toBeDisplayed();

    });

it('unsuccessful registration with invalid password', async () => {

    const nameField = $('#name');
    const emailField = $('#email');
    const passwordField = $('#password');
    const pswcheckfield = $('#password-confirm')
    const submitButton = $('.btn-primary');
    const toastMessage = $('.toast-message');
    const fieldError = $('.invalid-feedback');
        
        
       
        await nameField.setValue('Tester');

        await emailField.setValue('tester@email.com');

        await passwordField.setValue('1234');

        await pswcheckfield.setValue('1234');

        await submitButton.click();
        
        await expect(await toastMessage.getText()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');

        await expect(await fieldError.getText()).toEqual('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');


        await expect(await passwordField).toBeDisplayed();
        await expect(await passwordControlField).toBeDisplayed();
        await expect(await registrationButton).toBeDisplayed();


});
});