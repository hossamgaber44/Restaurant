const search=document.querySelector(".search");
function toggleSearch(){
    search.classList.toggle('display-search');
    navLink.classList.toggle('display-none');
}
const navLink=document.querySelector(".nav-link");
function toggleNavbar(){
    navLink.classList.toggle('mobile-menu');
}

var swiper = new Swiper('.mySwiper', {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 22,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1480: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
})
