$(document).ready(function(){

$('.header__burger').click(function(){
	$('.header__burger, .header__menu, .header__logo').toggleClass('active');
});

const tabsBtns = document.querySelectorAll('.tabs__btn');
const tabsItems = document.querySelectorAll('.tabs__items');

tabsBtns.forEach(function(item) {
	item.addEventListener("click", function() {
		tabsBtns.forEach(function(item){
			item.classList.remove('active');
		});
		item.classList.add('active');
		let tabsId = item.getAttribute('data-tab');
		let tabsItem = document.querySelector(tabsId);
		tabsItems.forEach(function(item){
			item.classList.remove('active');
		});
		tabsItem.classList.add('active');
	});
});
});

