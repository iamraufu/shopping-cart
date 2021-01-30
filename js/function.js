function handleCaseChange(isIncrease) {
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    let newCaseCount = caseCount;
    if (isIncrease == true) {
        newCaseCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        newCaseCount = caseCount - 1;
    }
    caseInput.value = newCaseCount;
    const caseTotal = newCaseCount * 59;
    document.getElementById('case-total').innerText = caseTotal;
}

function handlePhoneChange(isIncrease) {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    let newPhoneCount = phoneCount;
    if (isIncrease == true) {
        newPhoneCount = phoneCount + 1;
    }
    if (isIncrease == false && phoneCount > 0) {
        newPhoneCount = phoneCount - 1;
    }
    phoneInput.value = newPhoneCount;
    const phoneTotal = newPhoneCount * 1219;
    document.getElementById('phone-total').innerText = phoneTotal;
}