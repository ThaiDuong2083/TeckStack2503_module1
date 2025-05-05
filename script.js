document.querySelector("input[type='date']").value = new Date().toISOString().slice(0, 10);
function quantityBook(value) {
    let quantityElement = document.querySelector(".quantity-booking");
    let input = parseInt(quantityElement.textContent);

    input = value === "+" ? input + 1 : value === "-" ? input - 1 : input;
    input = input < 1 ? 1 : input;

    quantityElement.textContent = input;
}
