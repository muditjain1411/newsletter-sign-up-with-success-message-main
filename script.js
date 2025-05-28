const formCard = document.getElementById('formCard');
const form = document.getElementById('subscribeForm');
const errMsg = document.getElementById('emailError');
const emailInput = document.getElementById('email');
const emailOutput = document.getElementById('userEmail');
const dismiss = document.getElementById('dismiss');
const successCard = document.getElementById('successCard');
function validateEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if(!validateEmail(email)){
        errMsg.classList.remove("hidden");
    }
    else {
        errMsg.classList.add("hidden");
        formCard.style.display = 'none';
        emailOutput.textContent = email;
        successCard.style.display = 'flex';
    }
});

dismiss.addEventListener('click', () => {
    successCard.style.display = 'none';
    formCard.style.display = 'flex';
    emailInput.value = '';
});