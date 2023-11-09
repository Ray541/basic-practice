const display = document.querySelector("#display");



// Arrow function to display the numbers and the symbols

displayValue = (value) =>{
    display.value += value;
}

// Function to delete one value

deleteOne = () =>{ 
    display.value = display.value.slice(0, -1)
}

// Fuction to clearAll

clearAll = () =>{
    display.value = "";
}

// Function to calculate

calculate = () =>{
    try
    {
        var currentValue = display.value
        var result = eval(currentValue)
        display.value = result
        if(isNaN(result))
        {
            display.value = ""
        }
    }
    catch(error)
    {
        display.value = "Error"
    }
}