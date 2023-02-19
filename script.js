
let a = 0
let block_2 = document.querySelector('.block-2')
let btn_open = document.querySelector('#btn-of-site')
let btn_submit = document.querySelector('#btn-submit')
let btn_close = document.querySelector('.btn-close')
let btn_cl = document.querySelector('.block-reg')
let custom_alert = document.querySelector('.custom-alert')

let cust_alert_close = document.querySelector('.cust-alert-close')

// input
let input_name = document.querySelector('#input-name');
let input_contact = document.querySelector('#input-contact');
let input_info = document.querySelector('#input-info');

// Наші роботи
let btn_open_I_site = document.querySelector('.btn-open-I-site')


window.addEventListener('load', ()=> {
    let mask = document.querySelector('.preloader');
    mask.classList.add('hide');
    
});

btn_open.addEventListener('click', ()=>{
    block_2.classList.add('act');
    block_2.classList.remove('close')
    btn_cl.classList.add('act')
});

btn_close.addEventListener('click', ()=>{
    block_2.classList.remove('act');
    block_2.classList.add('close')
    btn_cl.classList.remove('act')
});

btn_submit.addEventListener('click', ()=>{
    //custom_alert.classList.add('act')
    // a b c
    let a, b, c = false


    let inp_name = input_name.value;
    let inp_contact = input_contact.value;
    let inp_info = input_info.value;

    // Імя обробка інпута якщо нвчого не введеннно
    //                                                                1
    if (inp_name.trim() == ''){
        input_name.style.boxShadow = "0 5px 10px red";
        a = false;
    }else{
        input_name.style.boxShadow = "0 5px 10px lightblue";
        a = true

    }
    //                                                                2
    // контактні данні теж
    if (inp_contact.trim() == ''){
        input_contact.style.boxShadow = "0 5px 10px red";
        b = false;
    }//    Якщо 1 неспрацює
    else{
        input_contact.style.boxShadow = "0 5px 10px lightblue";
        b = true
    }
    // Опис сайту
    //                                                                3
    if (inp_info.trim() == ''){
        input_info.style.boxShadow = "0 5px 10px red";
        c = false;
    }else{
        input_info.style.boxShadow = "0 5px 10px lightblue";
        c = true
    }
    
    if(a && b && c){

        if (inp_contact.includes('@') == true || inp_contact.includes('gmail') || inp_contact.includes('.') || inp_contact.includes('380') || inp_contact.includes('068') || inp_contact.includes('68') == true){
            custom_alert.classList.add('act');
        }else{
            input_contact.style.boxShadow = "0 5px 10px red"; b = false;
        }
    }
       
});

cust_alert_close.addEventListener('click', ()=>{
    custom_alert.classList.remove('act')
});

// OUR VORCS

let our_works = document.querySelector('.our-works')
let our_works_cose = document.querySelector('.our-works-close')

btn_open_I_site.addEventListener('click', ()=>{
    our_works.classList.add('act')
});
our_works_cose.addEventListener('click', ()=>{
    our_works.classList.remove('act')
});


