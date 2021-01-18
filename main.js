var numbersEls = document.querySelectorAll('.numbers');
var operatorsEls = document.querySelectorAll('.operator');
var mainPanelEl = document.querySelectorAll('.main-panel');
var cEl = document.getElementById('c');
var resultBtn = document.getElementById('result');
var decimalBtn = document.getElementById('decimal');
var isOperationClicked = false;
var memorySecondNumber = 0;
var operation = '';

for (let i=0; i<numbersEls.length; i++){
	const number = numbersEls[i];
	number.addEventListener('click', numberPress);
};

for (let j=0; j<operatorsEls.length; j++){
	const operatorEl = operatorsEls[j];
	operatorEl.addEventListener('click', operationPress);
};

cEl.addEventListener('click', function(e) {
	mainPanelEl.value = 0;
});

resultBtn.addEventListener('click', onResultPress)

function numberPress(){
	_resetDisplayIfNeed();
	_appendNumberToDisplay(this.value);
};

function _resetDisplayIfNeed(){
	if(isOperationClicked){
		mainPanelEl.value = '';
		isOperationClicked = false;
	}
}

function _appendNumberToDisplay(numberValue){
	if(mainPanelEl.value === '0'){
	  mainPanelEl.value = '';
	}
	mainPanelEl.value += numberValue;
}


function operationPress(){
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
	if(operation === '+'){
		return num1 + num2;
	}else if(operation === '-'){
		return num1 - num2;
	} else if(operation === '*'){
		return num1 * num2;
	}else if(operation === '/'){
		return num1 / num2;
	};
}

function _showResult(result){
	mainPanelEl.value = result;
}
