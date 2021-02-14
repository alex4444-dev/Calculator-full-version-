var numbersEls = document.querySelectorAll('.numbers'); // находим все элементы с классом numbers
var operatorsEls = document.querySelectorAll('.operator'); // находим все элементы с классом operators
var mainPanelEl = document.querySelector('.main-panel'); // находим главную панель вывода
var cEl = document.getElementById('c'); //находим элемент с id c
var resultBtn = document.getElementById('result'); //находим элемент с id result
var decimalBtn = document.getElementById('decimal'); //находим элемент с id decimal
var isOperationClicked = false; // true сразу после нажатия +*.- 
var memorySecondNumber = ''; // обьявляем переменную равную 0
var operation = '';

for (let i=0; i<numbersEls.length; i++){ // перебираем значение одного элемента массива переменной
	const number = numbersEls[i];     // присватваем значение одного элемента массива переменной
	number.addEventListener('click', numberPress); // вешаем на элемент listener
};

for (let j=0; j<operatorsEls.length; j++){ // перебираем все элементы с классом operation
	const operatorEl = operatorsEls[j];		// присватваем значение одного элемента массива переменной
	operatorEl.addEventListener('click', operationPress);  // вешаем на элемент listener
};

cEl.addEventListener('click', function(e) { //вешаем listener на кнопку с
	mainPanelEl.value = 0; // обнуляем значение панели вывода
});

resultBtn.addEventListener('click', onResultPress)

function numberPress(){ // обработчик события клика на кнопку с числом 
	_resetDisplayIfNeed(); //if operation button was clicked befor this step
	_appendNumberToDisplay(this.value);
};

function _resetDisplayIfNeed(){
	if(isOperationClicked){  // проверяем условие что MemoryFirstNumber true
		mainPanelEl.value = '';
		isOperationClicked = false; // делаем переменную обратно false
	}
}

function _appendNumberToDisplay(numberValue){
	if(mainPanelEl.value === '0'){
	  mainPanelEl.value = '';
	}
	mainPanelEl.value += numberValue;
}


function operationPress(){ //обработчик события на клик кнопок с оператором (+-*/)
  _saveFirstNumber();
  _setOperationClickedFlagToTrue();
  _saveOperation(this.value);
};

function _saveFirstNumber(){
	savedNum = mainPanelEl.value;
}

function _setOperationClickedFlagToTrue(){
	isOperationClicked = true;
} 

function _saveOperation(operationValue){
	operation = operationValue;
}

function onResultPress(){
	var value1 = _getNumber1();
	var value2 = _getNumber2();
	var operation = _getOperation();
	
	var result = _countResult(value1, value2, operation);
	_showResult(result);
}

function _getNumber1(){
	return Number(savedNum);
}

function _getNumber2(){
	return Number(mainPanelEl.value);
}
	
function _getOperation(){
	return operation;
}

function _countResult(num1, num2, operation){
	if(operation === '+'){ //если  при нажатии на кнопку +
		return num1 + num2; // то прибавь второе введенное число к сохраненному ранее
	}else if(operation === '-'){ //если  при нажатии на кнопку -
		return num1 - num2;		// то отними второе введенное число от сохраненного ранее
	}else if(operation === '*'){ //если  при нажатии на кнопку *
		return num1 * num2; 	// то умножь второе введенное число на сохраненное ранее
	}else if(operation === '/'){ //если  при нажатии на кнопку /
		return num1 / num2;		// то раздели второе введенное число на сохраненное ранее
	};
}

function _showResult(result){
	mainPanelEl.value = result;
}
