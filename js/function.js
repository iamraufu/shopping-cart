function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let newProductCount = productCount;
    if (isIncrease == true) {
        newProductCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        newProductCount = productCount - 1;
    }
    productInput.value = newProductCount;
    let productTotal;
    if (product == 'case') {
        productTotal = newProductCount * 59;
    } else {
        productTotal = newProductCount * 1219;
    }
    document.getElementById(product + '-total').innerText = productTotal;
}

// function handlePhoneChange(product, isIncrease) {
//     const phoneInput = document.getElementById(product + '-count');
//     console.log(phoneInput);
//     const phoneCount = parseInt(phoneInput.value);
//     let newPhoneCount = phoneCount;
//     if (isIncrease == true) {
//         newPhoneCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         newPhoneCount = phoneCount - 1;
//     }
//     phoneInput.value = newPhoneCount;
//     const phoneTotal = newPhoneCount * 1219;
//     document.getElementById(product + '-total').innerText = phoneTotal;
// }