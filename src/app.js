console.log('Heureka')

if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js")
} 


const sectionOne = document.querySelector(".scroll-check");
const sectionOneOptions = {
    rootMargin: "-220px 0px 0px 0px"
};
const contactBtn = document.querySelector(".showcase--cta");
const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver)
{
    entries.forEach(entry => {
        console.log(entry.target);
        if(!entry.isIntersecting){
            contactBtn.classList.add("scrolled");
            contactBtn.innerHTML = `<svg class="cta--icon">
                                        <use xlink:href="#cta--icon"/>
                                    </svg>`;
        }else{
            contactBtn.classList.remove("scrolled");
            contactBtn.innerHTML = "Contact Us";
        }
    })
},sectionOneOptions);
sectionOneObserver.observe(sectionOne);