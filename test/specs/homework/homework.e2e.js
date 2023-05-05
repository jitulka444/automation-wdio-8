describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        escribe('Homework', async () => {

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
                
        
            });
        
        });
        

    });

});
