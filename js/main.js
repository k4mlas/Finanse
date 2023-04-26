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
