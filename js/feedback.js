'use strict';

const submit = document.getElementById('submit')
const reset = document.getElementById('cancel')

const body = document.querySelector('body')
let required = ['full_name', 'email_address', 'date'];
let requiredElements = []

required.forEach(el => {
    let element = document.getElementById(el);
    requiredElements.push(element)
})
console.log(requiredElements);

let warningPopup = `
<div class="popup">
Please fill this field
</div>

`
let emptyElements = []
let isClicked = false
submit.addEventListener('click', (e) => {
    e.preventDefault()
    emptyElements = []
    requiredElements.forEach((el, i) => {
        if (el.value == '') {
            emptyElements.push(el)
            el.classList.add('border-red')
        }

    })
    if (emptyElements.length > 0) {
        alert('Please fill the required fields!!')
    }

})

body.addEventListener('click', (e) => {
    console.log(e.target);
    emptyElements.forEach(el => {
        if (e.target == el) {
            emptyElements.forEach(el => {
                el.classList.remove('border-red')
            })
        }
    })
})

reset.addEventListener('click', (e) => {

    emptyElements.forEach(el => {
        el.classList.remove('border-red')
    })


})