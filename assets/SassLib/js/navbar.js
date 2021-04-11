const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links links");
const shadowOverlay = document.querySelector(".shadow-overlay");



hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    shadowOverlay.classList.toggle("active");
});

const header = document.querySelector(".header");
const sectionOne = document.querySelector(".scroll-check");

const sectionOneOptions = {
    rootMargin: "-220px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver)
{
    entries.forEach(entry => {
        console.log(entry.target);
        if(!entry.isIntersecting){
            header.classList.add("scrolled");
        }else{
            header.classList.remove("scrolled");
        }
    })
},sectionOneOptions);

sectionOneObserver.observe(sectionOne);


const checkboxPc = document.querySelector("#nightToggle");
const checkboxMobile = document.querySelector("#nightToggleMobile");

checkboxPc.addEventListener('change', function(){
    if(this.checked){
        trans();
        document.documentElement.setAttribute('data-theme','night');
        checkboxMobile.checked = true;
    }else
    {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
        checkboxMobile.checked = false;
    }
});

checkboxMobile.addEventListener('change', function(){
    if(this.checked){
        trans();
        document.documentElement.setAttribute('data-theme','night');
        checkboxPc.checked = true;
    }else
    {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
        checkboxPc.checked = false;
    }
});

const trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 400)
}


