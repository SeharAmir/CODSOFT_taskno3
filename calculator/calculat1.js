var display= document.getElementById("display");
var button= document.querySelectorAll("button");
var screenValue='';

for(item of button){
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;

        if(buttonText== '='){
            display.value = eval(screenValue);
            screenValue= display.value;
        }
        else if(buttonText=='clear'){
                  display.value='';
                  screenValue='';
        }
        else{
            screenValue+=buttonText;
            display.value=screenValue;
        }
    })
}