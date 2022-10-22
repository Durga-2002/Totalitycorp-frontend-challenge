// constant elements
const fullpageEl = document.getElementById("fullpage");
const menuBtn = document.querySelector(".menu__btn");
const navigation = document.querySelector(".navigation");
const navCloseBtn = document.querySelector(".navigation__close__btn");

const blurOverlay = document.querySelector(".blur__overlay");

const IS_ACTIVE = "is--active";

//const to turn on blur and stop scrolling in the webpage.
const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE);
	blurOverlay.classList.toggle(IS_ACTIVE);
	fullpageEl.classList.toggle("no-scroll");
};

const CLICK = "click";
// Events 
menuBtn.addEventListener(CLICK, toggleNavigation);
navCloseBtn.addEventListener(CLICK, toggleNavigation);
blurOverlay.addEventListener(CLICK, toggleNavigation);

// normal page with scrolling and scroll bar active
new fullpage("#fullpage", {
	autoScrolling: true,
	scrollBar: true
});
