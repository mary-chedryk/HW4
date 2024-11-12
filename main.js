// Task 1

const btn = document.querySelector('[type="submit"]');
const message = document.querySelector('.text')
const one = document.querySelector('.one');
const two = document.querySelector('.two');



btn.addEventListener('click', (e)=>{
    e.preventDefault()

 
        if(one.value && two.value){
        message.textContent = "Обидва поля заповнені";
           }else{
            message.textContent = "Не всі поля заповнені"
           }
})


// Task 2

const button = document.querySelector('.button');
const msg = document.querySelector('.msg')
const first = document.querySelector('.first');
const second = document.querySelector('.second');

button.addEventListener('click', (e) => {
    e.preventDefault()
    const input = Number(first.value);
    
     const input2 = Number(second.value);
    console.log(input2);
    if (input + input2 <= 10) {
         message.textContent = "Сума менша або дорівнює 10"
    } else {
        message.textContent = "Сума більша за 10";
       
    }
})


// Task 3

const btnTask3 = document.querySelector('.btn_task3');
const mess = document.querySelector('.mess')
const inputTask3 = document.querySelector('.input_task3');

btnTask3.addEventListener('click', (e)=>{
    e.preventDefault()

const productName = inputTask3.value;
    console.log(productName);
 
        if(productName.includes("JavaScript")){
        message.textContent = "Текст містить слово JavaScript";
           }else{
        message.textContent = "Текст не містить слово JavaScript";
           }
})


// Task 4

function checkNumber() {
    const number = parseInt(document.getElementById("numberInput").value);
    const result = document.getElementById("numberResult");

    if (number > 10 && number < 20) {
        result.textContent = "Число входить в діапазон від 10 до 20";
    } else {
        result.textContent = "Число не входить в діапазон від 10 до 20";
    }
}


// Task 5

function validateForm() {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("formResult");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length >= 3 && emailPattern.test(email) && password.length >= 6) {
        result.textContent = "";
        window.location.href = "success.html"; 
    } else {
        result.textContent = "Помилка: Перевірте введені дані!";
    }
}