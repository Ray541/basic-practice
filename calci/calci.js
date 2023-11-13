const display = document.querySelector("#display");

// display.setAttribute("readonly", true)

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
        if(isNaN(result))
        {
            display.value = ""
        }
        else
        {
            display.value = result
        }
    }
    catch(error)
    {
        display.value = "Error"
    }
}

// Display all the buttons dynamically

const btnHolder = document.querySelector(".buttons-holder")

const buttonValues = ["7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"];

buttonValues.forEach(value => {
    var button = document.createElement("button")

    button.setAttribute("class", "number-btn button-design")
    button.onclick = () => displayValue(value)
    button.textContent = value
    btnHolder.appendChild(button)

    if(value == "/" || value == "-" || value == "+")
    {
        button.setAttribute("class", "button-design operation-btn")
    }

    if(value == "=")
    {
        button.setAttribute("class", "button-design delete-btn")
        button.onclick = () => calculate()
    }

    if(value == "x")
    {
        button.onclick = () => displayValue("*")
        button.setAttribute("class", "button-design operation-btn")
    }
})