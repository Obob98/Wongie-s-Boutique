let menu, ulBg, nav, prevScrollPos, inp, search, li, winW, body, imgs;

winW = window.innerWidth;
window.addEventListener('resize', () => {
    winW = window.innerWidth;
    window.location.reload();
});

if (winW < 600) {
    menu = document.querySelector(".mobMenu");
    ulBg = document.querySelector(".ulBg");
    nav = document.querySelector(".nav");
    header = document.querySelector("header");
    search = document.querySelector(".icon");
    sInpu = document.querySelector(".sInp");
    li = document.querySelectorAll("li");
    imgs = ["url('imgs/web/ns.jpeg')", "url('imgs/web/ScreenShot2022-01-11at4.39.32PM_800x.png')"];
    
    
    let i = 0;
    setInterval(() => {
        if(i === 0){
            header.style.backgroundImage = imgs[i];
            i = 1;
        }else{
            header.style.backgroundImage = imgs[i];
            i = 0;   
        }
    }, 10000);

    window.addEventListener("scroll", () => {
        let headPos = header.getBoundingClientRect().bottom;
        if (headPos < 50) {
            nav.style.background = "var(--mDark)";
            sInpu.parentNode.style.top = "92vh";
        } else {
            sInpu.parentNode.style.top = "55px";
            nav.style.background = "none";
        }
    })
   
    sInpu.style.width = '0vw';
    search.addEventListener("click", () => {
        if (sInpu.style.width === "0vw") {
            sInpu.style.width = "50vw";
            search.parentNode.style.background = "rgba(255, 255, 255, 0.7)";
        } else {
            sInpu.style.width = "0vw";
            search.parentNode.style.background = "rgba(255, 255, 255, 0)";
        }
    });

    menu.addEventListener("click", () => {
        menu.classList.toggle("sel");
        ulBg.classList.toggle("wid");
    });

    for (list of li) {
        list.addEventListener("click", (e) => {
            setTimeout(() => {
                menu.classList.toggle("sel");
                ulBg.classList.toggle("wid");
            }, 500)
        })

    }
} else {
    body = document.querySelector("body");
    body.innerHTML = "<p style='text-align: center; padding: 100px 20px; font-size:2rem;'>this site is only supported on devices with a 500 and below window width</p>";
}