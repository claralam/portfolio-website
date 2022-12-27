$(document).ready( function() {
    // Show and hide navbar with hamburger
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu")

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("hidden")
    })

    if ($('body').is('.home-page')) {
        // Autotyping on home page
        const autotypedText = ['Clara', 'a developer', 'a designer', 'a food enthusiast'];
        const typing = new AutoTyping('#autotypedText', autotypedText, {
            typeSpeed: 100,
            deleteSpeed: 100,
            waitBeforeDelete: 2000,
            waitBetweenWords: 500,
        });

        typing.start();
    } else if ($('body').is('.project-page')) {
        // Individual Project Page Table of Contents Scroll
        // https://css-tricks.com/sticky-table-of-contents-with-scrolling-active-states/
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`li a[href="#${id}"]`).classList.remove('text-black');
                document.querySelector(`li a[href="#${id}"]`).classList.add('font-extrabold', 'text-mutedPink');
            } else {
                document.querySelector(`li a[href="#${id}"]`).classList.remove('font-extrabold', 'text-mutedPink');
                document.querySelector(`li a[href="#${id}"]`).classList.add('text-black');
            }
            });
        });
        
        // Track all sections that have an `id` applied
        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });
    }
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