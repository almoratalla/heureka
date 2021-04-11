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