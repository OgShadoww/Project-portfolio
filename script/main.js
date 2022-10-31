// use IntersectionObserver for create animation with scroll

const animItem = document.querySelectorAll('.anim__item') // create variable for all element what must be animated

function onEntry (entry) {
    entry.forEach(change => {
        if(change.isIntersecting) {
            change.target.classList.add('anim_show')
        }   //else {
            // if(!change.target.classList.contains('anim_disposable')) {
            //     change.target.classList.remove('anim_show')
            // }
        //}
    });
}

let options = {
    threshold:[0.5] // create options
}

let observer = new IntersectionObserver(onEntry, options)

for(let el of animItem) {
    observer.observe(el)
}

// use Swiper.js for create slider

new Swiper('.swiper-conteiner', {
    pagination: {
        el:'.swiper-pagination' // create pegitation
    },
    navigation: {
        nextEl: '.swiper-button-next', // create button for slide next
        prevEl: '.swiper-button-prev' // create button for slide prev
    },
    loop:true
})

// Do link for button, becouse cant do this with using tag <a>

const portfolioBtn = document.querySelector('.hvr-bob') // create variable for scroll button to portfolio
const contactBtn = document.querySelectorAll('.hvr-radial-out') // create variable for scrotll button to contact
const contactBox = document.querySelector('.contact') // create variable for contact
const portfolioBox = document.querySelector('.portfolio') // create variable for portfolio

portfolioBtn.addEventListener('click', () => { // add event for scroll
    portfolioBox.scrollIntoView() // scroll to element
})

contactBtn.forEach(btn => {
    btn.addEventListener('click', () => { // add event for scroll
        contactBox.scrollIntoView() // scroll to element
    })
})

// form validate

const form = document.querySelector('.form')  // create variable for form
const input = document.querySelectorAll('.form__input') // create variable for input

let formEmail = document.querySelector('.form__email')

form.addEventListener('submit', e => { // add event submit 
    input.forEach(item => {
        if(item.value == '') { // 
            item.classList.add('error') // if input clear add class error
            e.preventDefault()
        }   
        else {
            item.classList.remove('error')
        }
        
    let r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i; // create regularEx for validate email

    if(!r.test(formEmail.value)) {
        formEmail.classList.add('error')
        e.preventDefault()
    }
    })
})

// open about card
const cardBox = document.querySelectorAll('.about__content__cards__item')
const cardContent = document.querySelectorAll('.about__content__cards__item__content')

cardBox.forEach(card => {
    card.addEventListener('click', () => {
        let cardId = card.getAttribute('data-set')
        let currentContent = document.getElementById(cardId)

        cardBox.forEach(item => {
            if(!item.classList.contains('active')) {
                item.classList.remove('active')
            }
        })
        cardContent.forEach(item => {
            if(!item.classList.contains('active')) {
                item.classList.remove('active')
            }
        })
        card.classList.toggle('active') 
        currentContent.classList.toggle('active')
    })
})

// change language 
const ua = document.querySelector("#ua")
const en = document.querySelector("#en")
const allLang = ['ua', 'en']

ua.addEventListener('click', changeUrlLanguage)
en.addEventListener('click', changeUrlLanguage)

// redirection url
function changeUrlLanguage() {
    let lang = this.textContent.toLowerCase()
    location.href = `${window.location.pathname}#${lang}`
    location.reload()
}

function changeLanguage () {
    let hash = window.location.hash
    hash = hash.substr(1)
    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en'
        location.reload()
    }
    document.querySelector('title').innerHTML = langArr['title'][hash]
    for(let key in langArr) {
        let elem = document.querySelector('.lng-' + key)
        if(elem) {
            elem.innerHTML = langArr[key][hash]
        }
    }
}

changeLanguage()