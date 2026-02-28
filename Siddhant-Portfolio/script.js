// ===============================
// SCROLL BUTTON
// ===============================
const scrollBtn = document.getElementById("scrollBtn");

if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
        const projectSection = document.getElementById("projects");
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}


// ===============================
// ACTIVE NAV LINK ON SCROLL
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const allSections = document.querySelectorAll(".section");

function revealSections() {
    const triggerBottom = window.innerHeight * 0.8;

    allSections.forEach(function (section) {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();


// ===============================
// TYPING EFFECT
// ===============================
const typingElement = document.getElementById("typing");

if (typingElement) {

    const textArray = [
        "Aspiring Web Developer",
        "HTML Learner",
        "CSS Designer",
        "JavaScript Beginner"
    ];

    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    function type() {

        if (count === textArray.length) {
            count = 0;
        }

        currentText = textArray[count];
        letter = currentText.slice(0, ++index);

        typingElement.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 1000);
        } else {
            setTimeout(type, 100);
        }
    }

    type();
}


// ===============================
// DARK MODE TOGGLE
// ===============================
const toggleBtn = document.getElementById("modeToggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });
}


// ===============================
// CONTACT FORM
// ===============================
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        formMessage.textContent = "Message Sent Successfully!";
        formMessage.style.color = "#38bdf8";

        form.reset();
    });
}


// ===============================
// HAMBURGER MENU
// ===============================
const menuToggle = document.getElementById("menuToggle");
const navUl = document.querySelector("nav ul");

if (menuToggle && navUl) {
    menuToggle.addEventListener("click", function () {
        navUl.classList.toggle("active");
    });
}


// ===============================
// PARTICLES BACKGROUND
// ===============================
if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
        particles: {
            number: { value: 60 },
            size: { value: 3 },
            color: { value: "#38bdf8" },
            line_linked: {
                enable: true,
                color: "#38bdf8"
            },
            move: { speed: 2 }
        }
    });
}


// ===============================
// LOADER FADE OUT
// ===============================
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.classList.add("hidden");
        }, 800);
    }
});