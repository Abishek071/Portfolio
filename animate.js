const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const observer_sec = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    });
});

const elements = document.querySelectorAll(".para");
elements.forEach((el) => observer_sec.observe(el));

const observer_third = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('conso');
        } else {
            entry.target.classList.remove('conso');
        }
    });
});

const element = document.querySelectorAll(".cons");
element.forEach((el) => observer_third.observe(el));

const observer_fourth = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('glow');
        }
    });
});

const elem = document.querySelectorAll(".hide");
elem.forEach((el) => observer_fourth.observe(el));

