function padString (string, strLength, symbol, addToStart) {
  const diff = strLength - string.length; 
  if (diff<=0) {
    return string
  }else{
    if (symbol.length==1){
      const addSymbol=symbol.repeat(diff);
      return addToStart ? addSymbol+ string : string + addSymbol; 
    }else{
      return alert ("Введите один символ")
    }
  }
}
alert (padString ("aaaa", 12, '%', false)) //"Введите строку, длину строки которую хотите получить, символ который заполнит пустоту, и booleвое значение для выбора направления"

       
function getResultUsingIf (firstNumber =12, secondNumber=12, mathOperator='+') {
  result='';
    if (mathOperator=='+') {
      result= firstNumber + secondNumber;
    }
    else if (mathOperator =='-') {
      result=firstNumber - secondNumber;
    }
    else if (mathOperator == '*') {
      result= firstNumber * secondNumber;
    }
    else if (mathOperator == '/'){
      result= firstNumber/secondNumber;
    }
    else if (mathOperator == '**')
      result=firstNumber**secondNumber;
    else {
      result=firstNumber % secondNumber;
    }
    return result
}
alert (getResultUsingIf(12,12,'-'))

function getResultUsingSwitch (firstNumber =12, secondNumber =12, mathOperator= "+"){
  switch (mathOperator) {
    case "+":
    alert (firstNumber + secondNumber)
      break;
    case "-":
    alert (firstNumber - secondNumber)
       break;
    case "*": 
    alert (firstNumber * secondNumber)
    break;
    case "/":
    alert (firstNumber /secondNumber)
      break;
    case "**":
    alert (firstNumber ** secondNumber)
      break;
    case "%":
    alert (firstNumber % secondNumber)
      break;
      }
}
getResultUsingSwitch(12,23,"-")

function isCharPresent(string, symbol) {
  for (i=0; i<string.length; i++) {
    if(string[i] == symbol) {
      return true;}
  }
  return false;
} 
alert (isCharPresent('abcdefgeh', 'd')) 


function charIndexOf (string, symbol){
  for (var i=0; i< string.length; i++){
      if (string[i] ===symbol){
        return i;
    }
  }
  return -1;
  }
  
  alert (charIndexOf ('abcdef', 'v'))
