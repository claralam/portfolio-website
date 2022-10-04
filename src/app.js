$(document).ready( function() {
    // Show and hide navbar with hamburger

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu")

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("hidden")
    })

    // Autotyping on home screen
    const autotypedText = ['a developer', 'a designer', 'a food enthusiast', 'Clara'];
    const typing = new AutoTyping('#autotypedText', autotypedText, {
        typeSpeed: 100,
        deleteSpeed: 100,
        waitBeforeDelete: 2000,
        waitBetweenWords: 500,
    });

    typing.start();

});

// Sets all cards style.display to 'none'
function hideAll() {
    const allCards = document.querySelectorAll('.design, .development');
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].style.display = 'none';
    }

    const allBtns = document.querySelectorAll('#workSection button');
    for (let i=0; i < allBtns.length; i++) {
        allBtns[i].style.backgroundColor = '#F8D0CE';
        console.log('yay')
    }
};

// Function is called when "Show all" button is clicked
function showAll(btn) {
    hideAll();

    const allCards = document.querySelectorAll('.design, .development');
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].style.display = '';
    }
    btn.style.backgroundColor = '#D57A7D';
};

// Function is called when "Development" filter button is clicked
function showDevelopment(btn) {
    hideAll();
    const devCards = document.getElementsByClassName('development');
    for (let i = 0; i < devCards.length; i++) {
        devCards[i].style.display = '';
    }
    btn.style.backgroundColor = '#D57A7D';
};

// Function is called when "Design" filter button is clicked
function showDesign(btn) {
    hideAll();
    const designCards = document.getElementsByClassName('design')
    for (let i = 0; i < designCards.length; i++) {
        designCards[i].style.display = '';
    }
    btn.style.backgroundColor = '#D57A7D';
};