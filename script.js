window.addEventListener('scroll', ()=>{
    let mainDiv = document.querySelector('.main-div');
    mainDiv.classList.toggle('sticky', window.scrollY > 0)
})

let menuBtn = document.querySelector('.click');
let openMenu1 = document.querySelector('.main-menu');


menuBtn.addEventListener('click', () => {
    
    openMenu1.classList.toggle('openMenu');

});

let menuItems = document.querySelectorAll('.main-menu li');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        openMenu1.classList.remove('openMenu'); 
    });
});

let closeBtn = document.querySelector('.close_btn');
closeBtn.addEventListener('click', () =>{
    openMenu1.classList.remove('openMenu'); 
})

$(".animated-progress span").each(function () {
    $(this).animate(
    {
        width: $(this).attr("data-progress") + "%",
    },
    1000
    );
    $(this).text($(this).attr("data-progress") + "%");
});

let FullName  = document.querySelector('#fullname');
let Contact = document.querySelector('#phone');
let Email = document.querySelector('#id');
let Meassage = document.querySelector('#message');
let Submit = document.querySelector('#btn');
let nameError  = document.querySelector('#name-error');
let phoneError  = document.querySelector('#phone-error');
let emailError  = document.querySelector('#email-error');
let messageError  = document.querySelector('#meassage-error');
Submit.addEventListener('click',(e)=>{
    e.preventDefault();
    validate();
});

function validate(){
    let nameValue = FullName.value;
    let phoneValue = Contact.value;
    let emailValue = Email.value;
    let message = Meassage.value;
    if(nameValue === ''){
        nameError.innerHTML = `name is required`;
    }else if(nameValue.length <= 4){
        nameError.innerHTML = `Please enter atlest 5 charcter`;
    }else{
        nameError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
    }

    if(phoneValue === ''){
        phoneError.innerHTML = `Contact number is required`
    }else if (phoneValue.length !== 10 || !/^[0-9]+$/.test(phoneValue)) {
        phoneError.innerHTML = 'Invalid phone number format';
    }else{
        phoneError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
    }
    
    if(emailValue === ''){
        emailError.innerHTML = `Email is required `
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailError.innerHTML = 'Invalid email format';
    }else{
        emailError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
    }
    
    if(message === ''){
        messageError.innerHTML = `Message is required`;
    }else if( /[^A-Za-z]/.test(nameValue)){
        messageError.innerHTML = 'Please enter only alphabetic characters';
    }else if(message.length <=10){
        messageError.innerHTML = 'Please enter 5 characters';
    }else{
        messageError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
    }
}

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});











