
describe('Registration Page', async () => {

        });

    it('should show registration form', async () => {

        const nameField = $('#name');
        console.log('Name field is dislayed: ' + await nameField.isDisplayed());
        console.log('Name field is dislayed: ' + await nameField.isEnabled());
        
        const emailField = $('#email');
        console.log('Email field is dislayed: ' + await emailField.isDisplayed());
        console.log('Email field is dislayed: ' + await emailField.isEnabled());

        const passwordField = $('#password');
        console.log('Password field is dislayed: ' + await passwordField.isDisplayed());
        console.log('Password field is dislayed: ' + await passwordField.isEnabled());

        const submitButton = $('.btn-primary');
        console.log('Submit button is dislayed: ' + await submitButton.isDisplayed());
        console.log('Submit button text is: ' + await submitButton.getText());

});

 it('new registration', async () => {

                
                await browser.reloadSession();
        
                await browser.url('/registrace');
                
                const nameField = $('#name');
                await nameField.setValue("Jitka Michálková");
        
        
                const emailField = $ ('#email');
                await emailField.setValue("michalkova.jitka@email.com");
        
                const passwordField = $ ('#password');
                await passwordField.setValue("1234");
        
                const passwordconfirmField = $ ('#password-confirm');
                await passwordconfirmField.setValue("1234");
        
                const submitButton = $ ('.btn-primary');
                await submitButton.click();
                
                const userNameDropdown = $('.navbar-right').$('[data-toggle="dropdown"]');
        console.log('User currently logged in: ' + await userNameDropdown.getText());
            });
        
            it('unsuccessful registration with existing email', async () => {

                
                await browser.reloadSession();
        
                await browser.url('/registrace');
                
                const nameField = $('#name');
                await nameField.setValue("Jitka Michálková");
        
        
                const emailField = $ ('#email');
                await emailField.setValue("da-app.admin@czechitas.cz");
        
                const passwordField = $ ('#password');
                await passwordField.setValue("Heslo1234");
        
                const passwordconfirmField = $ ('#password-confirm');
                await passwordconfirmField.setValue("Heslo1234");
        
                const submitButton = $ ('.btn-primary');
                await submitButton.click();
                
                const fieldError = $$('.invalid-feedback');
        console.log('Field error: ' + await fieldError.getText());
            });
        
            it('unsuccessful registration with invalid password', async () => {

                
                await browser.reloadSession();
        
                await browser.url('/registrace');
                
                const nameField = $('#name');
                await nameField.setValue("Jitka Michálková");
        
        
                const emailField = $ ('#email');
                await emailField.setValue("michalkova.jitka@email.com");
        
                const passwordField = $ ('#password');
                await passwordField.setValue("1234");
        
                const passwordconfirmField = $ ('#password-confirm');
                await passwordconfirmField.setValue("1234");
        
                const submitButton = $ ('.btn-primary');
                await submitButton.click();
                
                const fieldError = $$('.invalid-feedback');
        console.log('Field error: ' + await fieldError.getText());

    });
        

