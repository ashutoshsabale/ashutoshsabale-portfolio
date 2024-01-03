/* -------------NAVIGAION BAR FUNCTION-------------- */

function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu")

    if(menuBtn.className === "nav-menu"){
        menuBtn.className+=" responsive"
    }
    else{
        menuBtn.className = "nav-menu"
    }
}

/* -------------ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING-------------- */
window.onscroll = function(){
    headerShadow()
    scrollDown()
}

function headerShadow(){
    var navHeader = document.getElementById('header')

    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        navHeader.style.boxShadow= '0 1px 6px rgba(0,0,0,.1)'
        navHeader.style.height = '70px'
        navHeader.style.lineHeight = '70px'
    }else{
        navHeader.style.boxShadow='none'
        navHeader.style.boxShadow='70px'
        navHeader.style.boxShadow='70px'
    }
}

function scrollDown(){
    var scrollDownPop = document.getElementsByClassName('scroll-icon-btn')[0]

    if(document.body.scrollTop>400 || document.documentElement.scrollTop>400){
        scrollDownPop.style.display = 'none'
    }
    else{
        scrollDownPop.style.display = 'flex'
    }
}

/* -------------TYPING EFFECT-------------- */
var typingEffect = new Typed(".typedText",{
    strings : ["Ashutosh","Developer","Designer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
 })

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
})
/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.featured-text .social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)


