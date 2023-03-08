let mainNav = document.getElementById("main-nav");
let bars = document.querySelector(".bars");
let btn = document.querySelector(".btn")

bars.onclick = () => {
    mainNav.classList.toggle("show")
}



window.onscroll = () => {
    window.scrollY >= 600 ? btn.style.display = "block" : btn.style.display = "none";
};

btn.onclick = () => {
    window.scrollTo({
        left: 0, top: 0, behavior: "smooth",
    })
}