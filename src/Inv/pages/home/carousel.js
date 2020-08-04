
const setSlider = () => {
    // Get width and height of the window excluding scrollbars
    // console.log({ w })
    // return w

    window.addEventListener("resize", () => {
        window.wi = document.documentElement.clientWidth;
        // var h = document.documentElement.clientHeight;
    });

    const carouselSlide = document.querySelector('.carousel_slide');
    const carouselImages = document.querySelectorAll('.carousel_slide img');

    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let counter = 1;
    const width = window.innerWidth;
    const size = width;

    console.log({ check: width })

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    console.log(carouselImages[0].clientWidth)
    // nextBtn.addEventListener('click', () => {
    //     carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    //     counter++;
    //     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // })

    // prevBtn.addEventListener('click', () => {
    //     if(counter <= 0) return
    //     carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    //     counter--;
    //     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // })

    const timer = () => {
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        if (counter === carouselImages.length) {
            counter = 1
            carouselSlide.style.transition = 'none';
            // counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    setInterval(timer, 3000)

}


export { setSlider };