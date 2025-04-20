// 1 - topshiriq

const mainImgEl = document.querySelector(".carusel__img img");

function changeImg(path) {
    mainImgEl.classList.add("fade");

    setTimeout(() => {
        mainImgEl.setAttribute("src", path);
        mainImgEl.classList.remove("fade");
    }, 400); 
}
    

// 2 -topshiriq
 
function addCard() {
    const wrapper = document.querySelector(".card-wrapper");

    const cardHTML = `
        <div class="cards">
            <div class="cards_img">
                <img src="./img/woman.jpg" alt="">
            </div>
            <div class="cards_txt">
                <h2>Joy Parker</h2>
                <p>UI/UX | Front-End DevelopeR</p>
                <button class="cards_btn">See more</button>
            </div>
        </div>
    `;

    wrapper.insertAdjacentHTML("beforeend", cardHTML);
}
    
