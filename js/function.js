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
    calculateTotal();
}

function calculateTotal() {
    const phoneCount = getInputValue('phone')
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('sub-total').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}