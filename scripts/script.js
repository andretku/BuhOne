// слайдер сделать универсальный, один для всех, то есть одну функцию, которую потом можно применить везде

// в мобильной версии там, где "с нами работают", точки можно или отключить, или сделать так, чтобы они не заканчивались на четвертой


// -------- ПРОБЛЕМА: ----------------
// не работает белый цвет у стрелочек слайдера


// navbar menu

const burger = document.querySelector(`.burger__menu`);
const burgerMenuItems = document.querySelector(`.header__navbar`);

burger.onclick = burgerHandler;

function burgerHandler() {
    this.classList.toggle('burger__menu_active');
    burgerMenuItems.classList.toggle(`header__navbar_active`);
}

// ------------------------------------------------------

const mainSlider = document.querySelector('.main__slider');

// main slider text

let mainText = [
    {
        text: 'Бухгалтерские услуги в вашем городе',
        button: 'Наша презентация'
    },
    {
        text: 'Text2',
        button: 'вторая презентация'
    },
    {
        text: 'Third',
        button: 'третья кнопка'
    },
    {
        text: 'Number four',
        button: 'четвертая кнопка'
    }
];


// main slider content

    for(let elem of mainText) {
        let h1Elem = document.createElement('h1');
        h1Elem.classList.add('title', 'color_inversed');
        h1Elem.innerText = elem.text;

        let buttonElem = document.createElement('button');
        buttonElem.classList.add('main__btn');
        buttonElem.innerText = elem.button;

        let divElem = document.createElement('div');
        divElem.classList.add('main__text');

        divElem.append(h1Elem, buttonElem);
        mainSlider.append(divElem);
    }

const divElemArray = document.querySelectorAll('.main__text');
const sliderColor = 'main__slider_color'

Slider(mainSlider, mainText, divElemArray, sliderColor);


// ---------- main function Slider -----------

function Slider(sliderElems, sliderContent, carouselSlides, sliderColor) {

// get the name of a slider
    let indicator = sliderElems.classList.value.split('__')[0];
    console.log(indicator);

//slider buttons
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    prevBtn.classList.add('slider__btn', 'prev', sliderColor);
    nextBtn.classList.add('slider__btn', 'next', sliderColor);
    
    prevBtn.innerHTML = '<img src="media/prev.svg">';
    nextBtn.innerHTML = '<img src="media/next.svg">';

    const divBtn = document.createElement('div');
    divBtn.classList.add('slider__buttons');
    divBtn.append(prevBtn, nextBtn);

//slider dots
    let dotContainer = document.createElement('div');
    dotContainer.classList.add('slider__dots');

    for(let ind in sliderContent) {
        let dotElem = document.createElement('span');
        dotElem.setAttribute('data-slide', ind);
        dotElem.classList.add('slider__dot', sliderColor, indicator);
        if(ind === 0) {dotElem.classList.add('active')};
        dotContainer.append(dotElem);
    }

    sliderElems.append(dotContainer, divBtn);

    let currentSlide = 0;
    
    const activeDot = function (slide) {

        document.querySelectorAll(`.${indicator}`).forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.${indicator}[data-slide="${slide}"]`).classList.add('active');

    };

    activeDot(currentSlide);

    const changeSlide = function (currentSlideIndex) {
        carouselSlides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlideIndex)}%)`;
            slide.style.display = 'none';
        });
        carouselSlides[currentSlideIndex].style.display = 'block';
    };
    
    changeSlide(currentSlide);

    nextBtn.addEventListener('click', function () {
        currentSlide++; 
        if (carouselSlides.length - 1 < currentSlide) {
            currentSlide = 0;
        };
        changeSlide(currentSlide);
        activeDot(currentSlide);
});
    prevBtn.addEventListener('click', function () {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = carouselSlides.length-1;
        }; 
        changeSlide(currentSlide);
        activeDot(currentSlide);
    });

    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains(indicator)) {
            const slide = e.target.dataset.slide;
            currentSlide = slide;
            changeSlide(slide);
            activeDot(slide);            
        }
    });
};

//===============================================

// clients slider images

const clientsSlider = document.querySelector('.clients__slider');

let clientsBrands = [
    {
        text1: 'Microsoft',
        image1: './media/Microsoft.png',
        text2: 'Microsoft',
        image2: './media/Microsoft.png',
        text3: 'Microsoft',
        image3: './media/Microsoft.png',
        text4: 'Microsoft',
        image4: './media/Microsoft.png'
    },
    {
        text1: 'Apple',
        image1: './media/Apple.png',
        text2: 'Apple',
        image2: './media/Apple.png',
        text3: 'Apple',
        image3: './media/Apple.png',
        text4: 'Apple',
        image4: './media/Apple.png'
    },
    {
        text1: 'Oracle',
        image1: './media/Oracle.png',
        text2: 'Oracle',
        image2: './media/Oracle.png',
        text3: 'Oracle',
        image3: './media/Oracle.png',
        text4: 'Oracle',
        image4: './media/Oracle.png'
    },
    {
        text1: 'Amazon',
        image1: './media/Amazon.png',
        text2: 'Amazon',
        image2: './media/Amazon.png',
        text3: 'Amazon',
        image3: './media/Amazon.png',
        text4: 'Amazon',
        image4: './media/Amazon.png'
    },
];

for(let elem of clientsBrands) {

    let divElem = document.createElement('div');
    divElem.classList.add('clients__brands');

    let imgElem1 = document.createElement('img');
    imgElem1.setAttribute('src', elem.image1);
    imgElem1.setAttribute('alt', elem.text1);

    let imgElem2 = document.createElement('img');
    imgElem2.setAttribute('src', elem.image2);
    imgElem2.setAttribute('alt', elem.text2);

    let imgElem3 = document.createElement('img');
    imgElem3.setAttribute('src', elem.image3);
    imgElem3.setAttribute('alt', elem.text3);

    let imgElem4 = document.createElement('img');
    imgElem4.setAttribute('src', elem.image4);
    imgElem4.setAttribute('alt', elem.text4);

    divElem.append(imgElem1, imgElem2, imgElem3, imgElem4);

    clientsSlider.append(divElem);
};

const divElemArrayBrands = document.querySelectorAll('.clients__brands');
const clientsSliderColor = 'clients__slider_color';


Slider(clientsSlider, clientsBrands, divElemArrayBrands, clientsSliderColor);


// =======================================================

// clients slider images

const reviewSlider = document.querySelector('.review__slider');

let clientsReview = [
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque praesentium, eos dolores consequuntur nobis in velit debitis iusto dolorum ipsa veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque praesentium, eos dolores consequuntur nobis in velit debitis iusto dolorum ipsa veniam.',
        img: 'media/photo1.png',
        author: 'Екатерина',
        company: `Директор ООО "Раз-два"`
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: 'media/photo2.png',
        author: 'Иванова',
        company: `ООО "Раз-два"`
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque praesentium',
        img: 'media/photo3.png',
        author: 'Катя Сидорова',
        company: `Директор ООО`
    },
    {
        text: 'Doloremque praesentium, eos dolores consequuntur nobis in velit debitis iusto dolorum ipsa veniam.',
        img: 'media/photo4.png',
        author: 'Анжела Петровна',
        company: `"Раз-три-пять"`
    }
];

for (let elem of clientsReview) {
    const divContainer = document.createElement('div');
    divContainer.classList.add('review__container');

    const divContent = document.createElement('div');
    divContent.classList.add('review__content');
    divContent.innerText = elem.text;

    const divAuthor = document.createElement('div');
    divAuthor.classList.add('review__author');

    const imgAuthor = document.createElement('img');
    imgAuthor.setAttribute('src', elem.img);
    imgAuthor.setAttribute('alt', elem.author);

    const divAuthorInfo = document.createElement('div');
    divAuthorInfo.classList.add('review__author_info');

    const pAuthorName = document.createElement('p');
    pAuthorName.classList.add('review__author_name');
    pAuthorName.innerText = elem.author;

    const pAuthorCompany = document.createElement('p');
    pAuthorCompany.classList.add('review__author_company');
    pAuthorCompany.innerText = elem.company;

    divAuthorInfo.append(pAuthorName, pAuthorCompany);
    divAuthor.append(imgAuthor, divAuthorInfo);
    divContainer.append(divContent, divAuthor);
    reviewSlider.append(divContainer);
}

const divElemArrayReviews = document.querySelectorAll('.review__container');
const reviewsSliderColor = 'clients__slider_color';


Slider(reviewSlider, clientsReview, divElemArrayReviews, reviewsSliderColor);


