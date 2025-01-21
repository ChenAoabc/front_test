// get the table element using its id
let  table = document.getElementById("mytable");

// get result cells using its row and cell index
let resultStr = table.rows[0].cells[0];

// add char(number) function
function addNumChar(element){
    resultStr.innerText+=element.innerText;
}

// add Option function
function addOperationChar(element){
    // get the last character of the result string
    let lastChar = resultStr.innerHTML.charAt(resultStr.innerHTML.length-1);
    
    if(lastChar == '+' || lastChar == '-' 
        || lastChar == '*' || lastChar == '/' || lastChar == '%'){
            if (element.innerText != "."){
                // if the last character in1 [ +,-,*,/,% ] 
                // and the current character is not a dot,
                // replace the last character with
                // the current character
                resultStr.innerText=resultStr.innerText.replace(lastChar,element.innerText,
                    resultStr.innerHTML.length-1)
            }
        }else if(lastChar == "." && element.innerText == "."){
            
        }else{
            resultStr.innerText+=element.innerText;
        }
}

// clear all function
function clearAll(){
    resultStr.innerText="";
}

// backspace function
function backSpace(){
    let lastChar=resultStr.innerText.charAt(resultStr.innerText.length-1);
    resultStr.innerText=resultStr.innerText.replace(lastChar,"",
        resultStr.innerHTML.length-1);
}

// modify "+/-" sign function
function pluMinChange(){
    if(!isNaN(Number(resultStr.innerText))){
        resultStr.innerText=Number(resultStr.innerText);
    }
}

// compute function
function calculateResult(){
    resultStr.innerText=eval(resultStr.innerText);
    if(isNaN(resultStr.innerText)){
        resultStr.innerText="Error";
    }
}

