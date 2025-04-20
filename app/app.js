const mainImgEl = document.querySelector(".carusel__img img");

function changeImg(path) {
    mainImgEl.classList.add("fade");

    setTimeout(() => {
        mainImgEl.setAttribute("src", path);
        mainImgEl.classList.remove("fade");
    }, 400); }
