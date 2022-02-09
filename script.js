function phoneValidator(str) {
    const regEx = /^([+]?(1[\s\-]?))?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regEx.test(str);
}

function printAnswer(yourNum, answer) {
    let result = document.getElementById("result");
    if (answer === false) {
        result.innerHTML = `False. <span style="color:#f08348;">${yourNum}</span> is not in valid format for US Phone Number`;
        result.style.color = 'red';
    } else {
        result.innerHTML = `True. <span style="color:#f08348;">${yourNum}</span> is in valid format for US Phone Number`;
        result.style.color = 'green';
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    let input = document.getElementById("input");
    let submit = document.getElementById("submit");

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        if (input.value === "") {
            alert("You did not enter anything. Please try again.")
        } else {
            printAnswer(input.value, phoneValidator(input.value));
            input.value = "";
        }
    })
})