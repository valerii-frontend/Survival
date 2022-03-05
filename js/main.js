const swiper = new Swiper(".swiper", {
	slideToClickedSlide: true,
	pagination: {
		el: ".main__pagination",
		clickable: true,
	},
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

window.addEventListener("load", function (e) {
	document.querySelectorAll(".swiper-pagination-bullet").forEach((element, index) => {
		if (index < 10) {
			element.innerHTML = "0" + (index + 1);
		} else {
			element.innerHTML = index + 1;
		}
	});
});
