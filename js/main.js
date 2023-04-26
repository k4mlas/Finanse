//web
const incomeSection = document.querySelector('.transactions__list__incomeArea');
const expensesSection = document.querySelector(
	'.transactions__list__expensesArea'
);
const wallet = document.querySelector('.options__data__available');
const deleteSingleExpenses = document.querySelector(
	'.transactions__list__expensesArea__transaction__delete'
);
const deleteSingleIncome = document.querySelector(
	'.transactions__list__incomeArea__transaction__delete'
);
//panel
const panel = document.querySelector('.panel');
const inputName = document.querySelector('#name');
const inputAmount = document.querySelector('#amount');
const categorySelect = document.querySelector('#category');
const save = document.querySelector('.panel__buttons__save');
const cancel = document.querySelector('.panel__buttons__cancel');
//options
const add = document.querySelector('.options__controls__add');
const deleteAll = document.querySelector('.options__controls__delete');
const light = document.querySelector('.options__style__color__light');
const dark = document.querySelector('.options__style__color__dark');

let root = document.documentElement;
let ID = 0;
let categoIcon;
let selectedCategory;
let moneyArr = [0];

const openPanel = () => {
	panel.style.display = 'flex';
};

const closePanel = () => {
	panel.style.display = 'none';
	clearPanel();
};

const checkForm = () => {
	if (
		inputName.value !== '' &&
		inputAmount.value !== '' &&
		categorySelect.value !== 'none'
	) {
		console.log('Jest ok');
	} else {
		alert('Wypełnij wszystkie pola');
	}
};

const clearPanel = () => {
	inputName.value = '';
	inputAmount.value = '';
	categorySelect.selectedIndex = 0;
};

add.addEventListener('click', openPanel);
cancel.addEventListener('click', closePanel);
save.addEventListener('click', checkForm);
