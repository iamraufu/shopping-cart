document.getElementById('case-increase').addEventListener('click', function() {
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const newCaseInput = caseCount + 1;
    caseInput.value = newCaseInput;
    const caseTotal = newCaseInput * 59;
    document.getElementById('case-total').innerText = caseTotal;
})

document.getElementById('case-decrease').addEventListener('click', function() {
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);

    if (caseCount == 0) {
        const caseTotal = newCaseInput * 59;
        document.getElementById('case-total').innerText = caseTotal;
    } else {
        const newCaseInput = caseCount - 1;
        caseInput.value = newCaseInput;
        const caseTotal = newCaseInput * 59;
        document.getElementById('case-total').innerText = caseTotal;
    }
})

document.getElementById('phone-increase').addEventListener('click', function() {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    const newPhoneInput = phoneCount + 1;
    phoneInput.value = newPhoneInput;
    const phoneTotal = newPhoneInput * 1219;
    document.getElementById('phone-total').innerText = phoneTotal;
})

document.getElementById('phone-decrease').addEventListener('click', function() {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    if (phoneCount == 0) {
        const phoneTotal = newPhoneInput * 1219;
        document.getElementById('phone-total').innerText = phoneTotal;
    } else {
        const newPhoneInput = phoneCount - 1;
        phoneInput.value = newPhoneInput;
        const phoneTotal = newPhoneInput * 1219;
        document.getElementById('phone-total').innerText = phoneTotal;
    }
})