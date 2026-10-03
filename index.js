
document.addEventListener("keydown", function(event){

    if(event.key >= "0" && event.key <= "9"){
        display.value += event.key;
    }

    else if(event.key === "+"){
        display.value += "+";
    }

    else if(event.key === "-"){
        display.value += "-";
    }

    else if(event.key === "*"){
        display.value += "*";
    }

    else if(event.key === "/"){
        display.value += "/";
    }

    else if(event.key === "."){
        display.value += ".";
    }

    else if(event.key === "Backspace"){
        display.value = display.value.toString().slice(0, -1);
    }
});