document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const commentsField = document.getElementById('comments');
    const botField = document.getElementById('bot-field');

    const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');

    contactForm.addEventListener('click', function () {
        botField.value = 'false';
    });

    contactForm.addEventListener('input', function () {
        botField.value = 'false';
    });

    const regexAllowed = {
        name: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/,
        email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~@-]+$/
    }

    let flashTimeouts = {};

    function handleInvalidChar(e) {
        const input = e.target;
        const rx = regexAllowed[input.id];
        const errorOutput = document.getElementById(`${input.id}-error`);

        if (input.value && !rx.test(input.value)) {
            const invalidChar = [...input.value].find(char => !new RegExp(rx).test(char));
            
            errorOutput.textContent = `Invalid character '${invalidChar}' detected.`;
            errorOutput.classList.remove('hidden');

            input.classList.remove('flash');
            void input.offsetWidth;

            input.classList.add('flash');

            input.value = input.value.replace(invalidChar, '');

            clearTimeout(flashTimeouts[input.id]);

            flashTimeouts[input.id] = setTimeout(() => {
                errorOutput.classList.add('hidden');
                input.classList.remove('flash');
            }, 1500);
        }
    }

    nameField.addEventListener('input', handleInvalidChar);
    emailField.addEventListener('input', handleInvalidChar);

    const charCounter = document.getElementById('char-counter');
    const maxChars = 300;

    charCounter.textContent = maxChars;

    commentsField.addEventListener('input', function () {
        const currLength = commentsField.value.length;
        const remaining = maxChars - currLength;

        charCounter.textContent = remaining;

        if (remaining <= 30) {
            charCounter.style.color = '#fc1225';
        } else {
            charCounter.style.color = mainColor;
        }
    });

    nameField.addEventListener('input', () => nameField.setCustomValidity(''));
    emailField.addEventListener('input', () => emailField.setCustomValidity(''));
    commentsField.addEventListener('input', () => commentsField.setCustomValidity(''));

    contactForm.addEventListener('submit', function (e) {
        let isValid = true;
        
        if (botField.value === 'true') {
            isValid = false;
        }

        if (nameField.validity.valueMissing) {
            nameField.setCustomValidity('Oops! The name field cannot be empty. 😧');
            isValid = false;
        } else if (nameField.validity.tooShort) {
            nameField.setCustomValidity('Too short! 🌟 Your name needs at least 2 characters.');
            isValid = false;
        } else {
            nameField.setCustomValidity('');
        }

        if (emailField.validity.valueMissing) {
            emailField.setCustomValidity('Looks like you forgot to add your email. 💌');
            isValid = false;
        } else if (emailField.validity.typeMismatch) {
            emailField.setCustomValidity('Hmm..🤔 Please enter a valid email address. (e.g., name@example.com)');
            isValid = false;
        } else {
            emailField.setCustomValidity('');
        }

        if (commentsField.validity.valueMissing) {
            commentsField.setCustomValidity("Don't forget to leave a comment! 💭");
            isValid = false;
        } else if (commentsField.validity.tooShort) {
            commentsField.setCustomValidity('Too short! ✏️ Your comment needs at least 10 characters.')
            isValid = false;
        } else {
            commentsField.setCustomValidity('')
        }

        if (!isValid) {
            e.preventDefault();
            contactForm.reportValidity();
        }
    });
});
