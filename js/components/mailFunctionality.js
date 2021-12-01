import { SendMail } from "./mailer.js";
   // mail functionality (kept here just for now)

    let mailSubmit = document.querySelector('.submit-wrapper');

    function processMailFailure(result) {
        // show a failure message in the UI
        console.table(result); // table shows us an object in table form
        alert(result.message);

        // show some UI here to let the user know the mail attempt was successful
    }

    function processMailSuccess(result) {
        // show a success message in the UI
        console.table(result); // table shows us an object in table form
        alert(result.message);

        // show some UI here to let the user know the mail attempt was successful
    }

    function processMail(event) {
        // block the default submit behaviour
        event.preventDefault();
        // console.log('test message');
        // use the SendMail component to try to process mail
        SendMail(this.parentNode)
            .then(data => processMailSuccess(data))
            .catch(err => processMailFailure(err));

            // the error handler in the catch block could actually be a generic catch-and-display function that handles EVERY error you might encounter during runtime. Might be a better strategy to pass in a flag or just a message and have the function display it in the UI
    }

    // grecaptcha.ready(() => {
    //     grecaptcha.execute('6LfbtGsdAAAAAOF1R_yOBqEYEoQocyGafRkRNIko', { action: 'contact' }).then(token => {
    //       document.querySelector('#recaptchaResponse').value = token;
    //     });
    // });

    mailSubmit.addEventListener("click", processMail);