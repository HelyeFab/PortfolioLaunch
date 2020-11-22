// ? Typing animation Start
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Zealot", "Enthusiast", "Buff", "Lover", "Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// ? Typing animation End



// ? Menu and Theme Controls Start
const homeBtn = document.querySelector('.homeMenuBtn');
const themeBtn = document.querySelector('.themeMenuBtn');
const colorOption = document.querySelectorAll('.themeMenu-accents-colors li');
const mark = document.querySelectorAll('.highlight');
const svgColor = document.querySelectorAll('.colorCustom');
const btnColor = document.querySelectorAll('.themeColor');
const themeToggler = document.getElementById('theme');




// EventListeners
// ! Activating the Home Menu 
homeBtn.addEventListener('click', () => {
    const homeMenu = document.querySelector('.homeMenu');
    homeMenu.classList.toggle('active');

});
// ! Activating the Settings Menu 
themeBtn.addEventListener('click', () => {
    const themeMenu = document.querySelector('.themeMenu');
    themeMenu.classList.toggle('active');

});

const removeCurrentColor = (el) => {
    const colors = ['yellow','violet','orange', 'darkPink', 'purple'];
    colors.forEach((c) => {
        if (el.classList.contains(c)) el.classList.remove(c);
    })
}


// ! Picking the color accent from the menu and changing the  color of the mark and svg
colorOption.forEach((el => {
    el.addEventListener('click', () => {

        mark.forEach((highlight) => {
            removeCurrentColor(highlight);
            highlight.classList.add(el.id);
        });

        let pickedColor = el.innerHTML;
        svgColor.forEach((el) => {
            el.attributes.fill.nodeValue = pickedColor;
        })

        btnColor.forEach((el) => {
            el.style.background = pickedColor;
        })

        let iconBar = document.querySelectorAll('.icon');
        iconBar.forEach((el) => {
            el.style.color = pickedColor;
       })


    })
}))



// ! Toggling the Dark Theme
themeToggler.addEventListener('click', () => {
  
    const body = document.querySelector('body');
    const card = document.querySelectorAll('.card');
    
    const span = document.querySelectorAll('span');
    const homeMenu = document.querySelector('.homeMenu');
    const themeMenu = document.querySelector('.themeMenu');
    

  
    body.classList.toggle('dark');
    card.forEach((el) => {
        el.classList.toggle('dark');
        el.classList.toggle('whiteText');
    })
    homeBtn.classList.toggle('dark');
    homeMenu.classList.toggle('dark');
    themeMenu.classList.toggle('dark');
   
    themeBtn.classList.toggle('dark');
    body.classList.toggle('whiteText');
    // card.classList.toggle('whiteText');
    

    mark.forEach((el) => {
       el.classList.toggle('whiteText');
    })
   
    



    

    

})