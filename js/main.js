let menu, ulBg, nav, prevScrollPos, inp, search, li, winW, body;

winW = window.innerWidth;
body = document.querySelector("body");

let kep = 0;

if (winW < 600) {


    body = document.querySelector("body");
    menu = document.querySelector(".mobMenu");
    ulBg = document.querySelector(".ulBg");
    nav = document.querySelector(".nav");
    header = document.querySelector("header");
    search = document.querySelector(".icon");
    sInpu = document.querySelector(".sInp");
    li = document.querySelectorAll("li");

    setInterval(() => {
        header.style.backgroundImage = "url('imgs/web/ns.jpeg')";
    }, 10000)
    setInterval(() => {
        header.style.backgroundImage = "url('imgs/web/ScreenShot2022-01-11at4.39.32PM_800x.png')";
    }, 20000)

    window.addEventListener("scroll", () => {
        let headPos = header.getBoundingClientRect().bottom;
        if (headPos < 50) {
            nav.style.background = "var(--mDark)";
            sInpu.parentNode.style.top = "92vh";
            // search.parentNode.style.background = "var(--mDark)"
        } else {
            sInpu.parentNode.style.top = "55px";
            nav.style.background = "none";
        }
    })
    search.addEventListener("click", () => {
        if (sInpu.style.width == "0vw") {
            sInpu.style.width = "50vw";
            search.parentNode.style.background = "rgba(255, 255, 255, 0.7)";
        } else {
            sInpu.style.width = "0vw"
            search.parentNode.style.background = "rgba(255, 255, 255, 0)"
        }
    })

    menu.addEventListener("click", () => {
        menu.classList.toggle("sel");
        ulBg.classList.toggle("wid");
    })
    for (i in li) {

        li[i].addEventListener("click", (e) => {
            setTimeout(() => {
                menu.classList.toggle("sel");
                ulBg.classList.toggle("wid");
                kep = i;
            }, 500)
        })

    }
} else {
    body.innerHTML = "<p style='text-align: center; padding: 100px 20px; font-size:2rem;'>this site is only supported on devices with a 500 and below window width</p>";
}