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
		createNewTransaction();
		panel.style.display = 'none';
	} else {
		alert('Wypełnij wszystkie pola');
	}
};

const clearPanel = () => {
	inputName.value = '';
	inputAmount.value = '';
	categorySelect.selectedIndex = 0;
};

const lightColor = () => {
	root.style.setProperty('--first-color', 'rgb(225, 232, 237)');
	root.style.setProperty('--second-color', 'rgb(46, 44, 44)');
	root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.2)');
};

const darkColor = () => {
	root.style.setProperty('--first-color', 'rgb(46, 44, 44)');
	root.style.setProperty('--second-color', 'rgb(225, 232, 237)');
	root.style.setProperty('--border-color', 'rgb(225, 232, 237)');
};

const createNewTransaction = () => {
	const newTransaction = document.createElement('div');
	newTransaction.setAttribute('id', ID);
	const activeCategory =
		categorySelect.options[categorySelect.selectedIndex].text;
	checkCategory(activeCategory);
	if (inputAmount.value > 0) {
		newTransaction.classList.add('transactions__list__incomeArea__transaction');
		newTransaction.innerHTML = `<p class="transactions__list__incomeArea__transaction__name">${categoIcon} ${inputName.value}</p> <p class="transactions__list__incomeArea__transaction__amount">${inputAmount.value} zł <button class="transactions__list__incomeArea__transaction__delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button></p>`;
		incomeSection.append(newTransaction);
	} else if (inputAmount.value < 0) {
		newTransaction.classList.add(
			'transactions__list__expensesArea__transaction'
		);
		newTransaction.innerHTML = `<p class="transactions__list__expensesArea__transaction__name">${categoIcon} ${inputName.value}</p> <p class="transactions__list__expensesArea__transaction__amount">${inputAmount.value} zł <button class="transactions__list__expensesArea__transaction__delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button></p>`;
		expensesSection.append(newTransaction);
	}
	moneyArr.push(parseFloat(inputAmount.value));
	sumAllMoney();
	closePanel();
	ID++;
};

const checkCategory = (selectOfTransaction) => {
	switch (selectOfTransaction) {
		case '[+] Przychód':
			categoIcon = '<i class="fas fa-money-bill-wave"></i>';
			break;
		case '[-] Zakupy':
			categoIcon = '<i class="fas fa-cart-arrow-down"></i>';
			break;
		case '[-] Jedzenie':
			categoIcon = '<i class="fas fa-hamburger"></i>';
			break;
		case '[-] Kino':
			categoIcon = '<i class="fas fa-film"></i>';
			break;
		case '[-] Wakacje':
			categoIcon = '<i class="fas fa-film"></i>';
			break;
		case '[-] Zdrowie':
			categoIcon = '<i class="fas fa-film"></i>';
			break;
	}
};

const sumAllMoney = () => {
	const sum = moneyArr.reduce((x, y) => x + y);
	wallet.textContent = `${sum} zł`;
};

const deleteTransaction = (id) => {
	const transactionToDelete = document.getElementById(id);

	const amountTransaction = parseFloat(
		transactionToDelete.childNodes[2].innerText
	);
	const indexOfTransaction = moneyArr.indexOf(amountTransaction);
	console.log(indexOfTransaction);
	moneyArr.splice(indexOfTransaction, 1);

	transactionToDelete.classList.contains(
		'transactions__list__incomeArea__transaction'
	)
		? incomeSection.removeChild(transactionToDelete)
		: expensesSection.removeChild(transactionToDelete);

	sumAllMoney(moneyArr);
};

const clearAllTransaction = () => {
	incomeSection.innerHTML =
		'<h3 class="transactions__list__incomeArea__title">Przychód:</h3>';
	expensesSection.innerHTML =
		'<h3 class="transactions__list__expensesArea__title">Wydatki:</h3>';
	wallet.textContent = '0zł';
	moneyArr = [0];
};

add.addEventListener('click', openPanel);
cancel.addEventListener('click', closePanel);
save.addEventListener('click', checkForm);
light.addEventListener('click', lightColor);
dark.addEventListener('click', darkColor);
deleteAll.addEventListener('click', clearAllTransaction);
